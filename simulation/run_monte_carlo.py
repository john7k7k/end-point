"""UWB + IMU Monte Carlo simulator for the terminal-localisation system.

The simulator deliberately stores the generated raw sample before calculating
each filter, so all algorithms receive exactly the same UWB / IMU inputs.
"""

from __future__ import annotations

import argparse
import csv
import json
import math
from dataclasses import asdict, dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterable

import matplotlib.pyplot as plt
import numpy as np


ANCHORS = np.array([
    [0.0, 0.0, 0.0], [20.0, 0.0, 0.0], [0.0, 12.0, 0.0], [20.0, 12.0, 0.0],
    [0.0, 0.0, 2.5], [20.0, 0.0, 2.5], [0.0, 12.0, 2.5], [20.0, 12.0, 2.5],
])
ALGORITHMS = ("ekf", "complementary", "weighted_average")


@dataclass
class Config:
    trials: int = 100
    duration: float = 60.0
    dt: float = 0.05
    seed: int = 42
    uwb_sigma: float = 0.08
    uwb_dropout: float = 0.04
    nlos_probability: float = 0.10
    nlos_bias: float = 0.45
    imu_accel_sigma: float = 0.035
    imu_gyro_sigma_deg: float = 0.35
    imu_accel_bias_rw: float = 0.003
    imu_gyro_bias_rw_deg: float = 0.03
    warmup_seconds: float = 2.0


def angle_wrap(value: float) -> float:
    return (value + math.pi) % (2 * math.pi) - math.pi


def trajectory(t: float, duration: float) -> tuple[np.ndarray, np.ndarray, float]:
    """Smooth four-corner walking loop with a small vertical motion."""
    corners = np.array([[2.0, 2.0], [18.0, 2.0], [18.0, 10.0], [2.0, 10.0]])
    phase = (t / duration * len(corners)) % len(corners)
    index = int(phase)
    u = phase - index
    smooth = u * u * (3.0 - 2.0 * u)
    derivative = 6.0 * u * (1.0 - u) * len(corners) / duration
    start, end = corners[index], corners[(index + 1) % len(corners)]
    velocity_xy = (end - start) * derivative
    position_xy = start + (end - start) * smooth
    # Analytical acceleration of the smoothstep segment.
    acceleration_xy = (end - start) * (6.0 - 12.0 * u) * (len(corners) / duration) ** 2
    z = 1.40 + 0.05 * math.sin(0.32 * t)
    vz = 0.016 * math.cos(0.32 * t)
    az = -0.00512 * math.sin(0.32 * t)
    heading = math.atan2(velocity_xy[1], velocity_xy[0]) if np.linalg.norm(velocity_xy) > 1e-6 else 0.0
    return np.array([position_xy[0], position_xy[1], z]), np.array([acceleration_xy[0], acceleration_xy[1], az]), heading


def solve_uwb_position(ranges: np.ndarray, valid: np.ndarray, initial: np.ndarray) -> tuple[np.ndarray | None, float]:
    if int(valid.sum()) < 4:
        return None, float("inf")
    position = initial.copy()
    for _ in range(6):
        selected_anchors, selected_ranges = ANCHORS[valid], ranges[valid]
        delta = position - selected_anchors
        predicted = np.maximum(np.linalg.norm(delta, axis=1), 1e-6)
        h = delta / predicted[:, None]
        residual = selected_ranges - predicted
        normal = h.T @ h
        try:
            correction = np.linalg.solve(normal + np.eye(3) * 1e-6, h.T @ residual)
        except np.linalg.LinAlgError:
            return None, float("inf")
        position += np.clip(correction, -1.0, 1.0)
        if np.linalg.norm(correction) < 1e-4:
            break
    residual = ranges[valid] - np.linalg.norm(position - ANCHORS[valid], axis=1)
    return position, max(float(np.mean(residual**2)), 0.01)


class Filter:
    def __init__(self, algorithm: str, dt: float):
        self.algorithm, self.dt = algorithm, dt
        self.position = np.array([10.0, 6.0, 1.4])
        self.velocity = np.zeros(3)
        self.variance = np.full(3, 0.4)
        self.yaw = 0.0

    def predict(self, acceleration: np.ndarray, gyro_z_rad: float) -> None:
        self.position += self.velocity * self.dt + 0.5 * acceleration * self.dt**2
        self.velocity += acceleration * self.dt
        self.variance += 0.03 * self.dt
        self.yaw = angle_wrap(self.yaw + gyro_z_rad * self.dt)

    def update(self, ranges: np.ndarray, valid: np.ndarray) -> None:
        if self.algorithm == "ekf":
            for _ in range(2):
                for station_id in np.flatnonzero(valid):
                    delta = self.position - ANCHORS[station_id]
                    predicted = max(float(np.linalg.norm(delta)), 1e-6)
                    h = delta / predicted
                    residual = ranges[station_id] - predicted
                    gain = self.variance * h / (h * h * self.variance + 0.08)
                    self.position += gain * residual
                    self.variance = np.maximum(0.01, self.variance * (1.0 - gain * h))
            return
        uwb_position, uwb_variance = solve_uwb_position(ranges, valid, self.position)
        if uwb_position is None:
            return
        if self.algorithm == "complementary":
            alpha = 0.86
            self.position = alpha * self.position + (1.0 - alpha) * uwb_position
            self.variance = np.maximum(0.01, alpha * self.variance + (1.0 - alpha) * uwb_variance)
            return
        imu_weight = 1.0 / np.maximum(self.variance, 0.01)
        uwb_weight = 1.0 / uwb_variance
        self.position = (imu_weight * self.position + uwb_weight * uwb_position) / (imu_weight + uwb_weight)
        self.variance = 1.0 / (imu_weight + uwb_weight)


def generate_sample(config: Config, rng: np.random.Generator, t: float, accel_bias: np.ndarray, gyro_bias: float) -> tuple[dict, np.ndarray, float, np.ndarray, float]:
    truth, truth_accel, truth_yaw = trajectory(t, config.duration)
    range_truth = np.linalg.norm(ANCHORS - truth, axis=1)
    nlos = rng.random(8) < config.nlos_probability
    ranges = range_truth + rng.normal(0, config.uwb_sigma, 8) + nlos * (config.nlos_bias + rng.exponential(config.nlos_bias * 0.25, 8))
    valid = rng.random(8) >= config.uwb_dropout
    acceleration = truth_accel + accel_bias + rng.normal(0, config.imu_accel_sigma, 3)
    gyro_z = gyro_bias + rng.normal(0, math.radians(config.imu_gyro_sigma_deg))
    payload = {
        "timestamp": round(t * 1000),
        "source": "simulation",
        "payload": {
            "ranges": [{"stationId": int(i), "distance": float(ranges[i])} for i in range(8) if valid[i]],
            "acceleration": dict(zip("xyz", map(float, acceleration))),
            "gyroscope": {"x": 0.0, "y": 0.0, "z": float(math.degrees(gyro_z))},
            "truth": {"position": dict(zip("xyz", map(float, truth))), "yawDegrees": math.degrees(truth_yaw)},
            "nlosAnchorIds": np.flatnonzero(nlos).astype(int).tolist(),
        },
    }
    return payload, truth, truth_yaw, ranges, valid


def metrics(errors: np.ndarray) -> dict:
    return {"mae_m": float(np.mean(errors)), "rmse_m": float(np.sqrt(np.mean(errors**2))), "p50_m": float(np.percentile(errors, 50)), "p95_m": float(np.percentile(errors, 95)), "p99_m": float(np.percentile(errors, 99))}


def run_trial(config: Config, seed: int, keep_history: bool) -> tuple[dict, dict | None, list[dict] | None]:
    rng = np.random.default_rng(seed)
    filters = {algorithm: Filter(algorithm, config.dt) for algorithm in ALGORITHMS}
    accel_bias, gyro_bias = np.zeros(3), 0.0
    errors = {algorithm: [] for algorithm in ALGORITHMS}
    history, raw = [], []
    for step in range(int(config.duration / config.dt)):
        t = step * config.dt
        accel_bias += rng.normal(0, config.imu_accel_bias_rw * math.sqrt(config.dt), 3)
        gyro_bias += rng.normal(0, math.radians(config.imu_gyro_bias_rw_deg) * math.sqrt(config.dt))
        payload, truth, truth_yaw, ranges, valid = generate_sample(config, rng, t, accel_bias, gyro_bias)
        for algorithm, estimator in filters.items():
            estimator.predict(np.array(list(payload["payload"]["acceleration"].values())), math.radians(payload["payload"]["gyroscope"]["z"]))
            estimator.update(ranges, valid)
            errors[algorithm].append(float(np.linalg.norm(estimator.position - truth)))
        if keep_history:
            raw.append(payload)
            row = {"time_s": t, "truth_x": truth[0], "truth_y": truth[1], "truth_z": truth[2], "truth_yaw_deg": math.degrees(truth_yaw)}
            for algorithm, estimator in filters.items():
                row.update({f"{algorithm}_x": estimator.position[0], f"{algorithm}_y": estimator.position[1], f"{algorithm}_z": estimator.position[2], f"{algorithm}_error_m": errors[algorithm][-1]})
            history.append(row)
    # The initial state is deliberately not set to the true operator position.
    # Exclude this filter convergence period from the reported experiment metrics.
    warmup_steps = min(int(config.warmup_seconds / config.dt), max(0, len(next(iter(errors.values()))) - 1))
    return {
        algorithm: metrics(np.array(values[warmup_steps:]))
        for algorithm, values in errors.items()
    }, (dict(history=history) if keep_history else None), raw if keep_history else None


def save_outputs(output: Path, config: Config, summaries: dict, trial_rows: list[dict], history: list[dict], raw: list[dict]) -> None:
    output.mkdir(parents=True, exist_ok=True)
    (output / "summary.json").write_text(json.dumps({"config": asdict(config), "algorithms": summaries}, indent=2), encoding="utf-8")
    with (output / "trial_metrics.csv").open("w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=trial_rows[0].keys()); writer.writeheader(); writer.writerows(trial_rows)
    with (output / "raw_sensor_measurements.jsonl").open("w", encoding="utf-8") as file:
        for sample in raw: file.write(json.dumps(sample) + "\n")
    with (output / "telemetry.csv").open("w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=history[0].keys()); writer.writeheader(); writer.writerows(history)
    truth_x, truth_y = [row["truth_x"] for row in history], [row["truth_y"] for row in history]
    plt.figure(figsize=(9, 5)); plt.plot(truth_x, truth_y, "k--", label="ground truth", linewidth=2)
    colors = {"ekf": "#2563eb", "complementary": "#059669", "weighted_average": "#d97706"}
    for algorithm in ALGORITHMS: plt.plot([r[f"{algorithm}_x"] for r in history], [r[f"{algorithm}_y"] for r in history], color=colors[algorithm], label=algorithm)
    plt.scatter(ANCHORS[:, 0], ANCHORS[:, 1], marker="s", c="#64748b", label="anchors"); plt.xlim(-1, 21); plt.ylim(-1, 13); plt.gca().set_aspect("equal"); plt.legend(); plt.xlabel("X (m)"); plt.ylabel("Y (m)"); plt.tight_layout(); plt.savefig(output / "trajectory.png", dpi=180); plt.close()
    warmup_index = min(int(config.warmup_seconds / config.dt), max(0, len(history) - 1))
    plt.figure(figsize=(8, 5))
    for algorithm in ALGORITHMS:
        values = np.sort([r[f"{algorithm}_error_m"] for r in history[warmup_index:]]); plt.plot(values, np.linspace(0, 1, len(values)), color=colors[algorithm], label=algorithm)
    plt.xlabel(f"3D position error (m), after {config.warmup_seconds:g}s warm-up"); plt.ylabel("CDF"); plt.grid(); plt.legend(); plt.tight_layout(); plt.savefig(output / "error_cdf.png", dpi=180); plt.close()
    plt.figure(figsize=(9, 5))
    for algorithm in ALGORITHMS: plt.plot([r["time_s"] for r in history], [r[f"{algorithm}_error_m"] for r in history], color=colors[algorithm], label=algorithm)
    plt.axvline(config.warmup_seconds, color="#64748b", linestyle="--", linewidth=1, label="warm-up end")
    plt.xlabel("time (s)"); plt.ylabel("3D position error (m)"); plt.grid(); plt.legend(); plt.tight_layout(); plt.savefig(output / "error_over_time.png", dpi=180); plt.close()


def main() -> None:
    parser = argparse.ArgumentParser(description="UWB + IMU Monte Carlo simulator")
    parser.add_argument("--trials", type=int, default=100); parser.add_argument("--duration", type=float, default=60.0); parser.add_argument("--dt", type=float, default=0.05); parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--uwb-dropout", type=float, default=0.04); parser.add_argument("--nlos-probability", type=float, default=0.10); parser.add_argument("--nlos-bias", type=float, default=0.45); parser.add_argument("--warmup-seconds", type=float, default=2.0, help="Exclude initial filter convergence from summary metrics (default: 2)"); parser.add_argument("--output", type=Path, default=None)
    args = parser.parse_args(); config = Config(trials=args.trials, duration=args.duration, dt=args.dt, seed=args.seed, uwb_dropout=args.uwb_dropout, nlos_probability=args.nlos_probability, nlos_bias=args.nlos_bias, warmup_seconds=max(0.0, args.warmup_seconds))
    aggregate = {algorithm: [] for algorithm in ALGORITHMS}; trial_rows = []; representative_history = representative_raw = None
    for trial in range(config.trials):
        result, data, raw = run_trial(config, config.seed + trial, trial == 0)
        for algorithm in ALGORITHMS:
            aggregate[algorithm].append(result[algorithm]); trial_rows.append({"trial": trial, "algorithm": algorithm, **result[algorithm]})
        if data: representative_history, representative_raw = data["history"], raw
    summaries = {algorithm: {metric: float(np.mean([row[metric] for row in values])) for metric in values[0]} for algorithm, values in aggregate.items()}
    output = args.output or Path(__file__).parent / "output" / datetime.now().strftime("%Y%m%d_%H%M%S")
    save_outputs(output, config, summaries, trial_rows, representative_history, representative_raw)
    print(json.dumps(summaries, indent=2)); print(f"Saved results to: {output.resolve()}")


if __name__ == "__main__":
    main()
