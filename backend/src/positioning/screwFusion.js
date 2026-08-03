import Detection from "../models/Detection.js";
import mongoose from "mongoose";
import ScrewLocalizationTelemetry from "../models/ScrewLocalizationTelemetry.js";
import { getSimulationConfigValue } from "../controllers/simulationController.js";

export const screwFusionAlgorithms = ["average", "ekf", "es_ekf", "rmv_fgo"];

export const screwFusionLabels = {
  average: "平均法",
  ekf: "EKF",
  es_ekf: "ESKF",
  rmv_fgo: "RMV-FGO"
};

const WINDOW_SIZE = 60;
const EPSILON = 1e-9;
const finite = (value) => Number.isFinite(Number(value)) ? Number(value) : 0;
const vector = (value = {}) => ({ x: finite(value.x), y: finite(value.y), z: finite(value.z) });
const add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
const subtract = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
const scale = (a, multiplier) => ({ x: a.x * multiplier, y: a.y * multiplier, z: a.z * multiplier });
const norm = (a) => Math.hypot(a.x, a.y, a.z);
const squared = (a) => ({ x: a.x * a.x, y: a.y * a.y, z: a.z * a.z });
const squareRoot = (a) => ({ x: Math.sqrt(Math.max(a.x, 0)), y: Math.sqrt(Math.max(a.y, 0)), z: Math.sqrt(Math.max(a.z, 0)) });

const diagonalMeasurementUncertainty = (depthCentimetres) => {
  const depth = Math.max(0.2, finite(depthCentimetres) / 100 || 1.5);
  // RGB-D depth error grows with range.  This is deliberately a measurement
  // model, not a ground-truth correction, so it also works with real data.
  const lateral = Math.min(0.12, 0.012 + depth * 0.009);
  const axial = Math.min(0.16, 0.018 + depth * 0.014);
  return { x: lateral, y: lateral, z: axial };
};

const averageFusion = (observations) => {
  const total = observations.reduce((sum, item) => add(sum, item.rawPosition), { x: 0, y: 0, z: 0 });
  const position = scale(total, 1 / observations.length);
  const scatter = observations.reduce((sum, item) => {
    const residual = subtract(item.rawPosition, position);
    return add(sum, squared(residual));
  }, { x: 0, y: 0, z: 0 });
  const count = Math.max(1, observations.length);
  const measurementVariance = observations.reduce((sum, item) => add(sum, squared(item.uncertainty)), { x: 0, y: 0, z: 0 });
  return {
    position,
    // Variance of a mean: independent measurement variances add as 1/n²;
    // observed multi-view scatter contributes as its standard-error term.
    uncertainty: squareRoot(add(scale(measurementVariance, 1 / (count * count)), scale(scatter, 1 / (count * count)))),
    innovation: norm(subtract(observations.at(-1).rawPosition, position))
  };
};

const ekfFusion = (observations) => {
  let state = vector(observations[0].rawPosition);
  let covariance = squared(observations[0].uncertainty);
  const processNoise = { x: 0.00006, y: 0.00006, z: 0.00012 };
  let innovation = 0;

  for (const observation of observations.slice(1)) {
    covariance = add(covariance, processNoise);
    const residual = subtract(observation.rawPosition, state);
    const measurementVariance = squared(observation.uncertainty);
    const gain = {
      x: covariance.x / (covariance.x + measurementVariance.x + EPSILON),
      y: covariance.y / (covariance.y + measurementVariance.y + EPSILON),
      z: covariance.z / (covariance.z + measurementVariance.z + EPSILON)
    };
    state = add(state, { x: gain.x * residual.x, y: gain.y * residual.y, z: gain.z * residual.z });
    covariance = {
      x: Math.max(EPSILON, (1 - gain.x) * covariance.x),
      y: Math.max(EPSILON, (1 - gain.y) * covariance.y),
      z: Math.max(EPSILON, (1 - gain.z) * covariance.z)
    };
    innovation = norm(residual);
  }
  return { position: state, uncertainty: squareRoot(covariance), innovation };
};

const esEkfFusion = (observations) => {
  // Nominal state plus additive error state.  For a static screw, the nominal
  // state is its world position; δp is injected and reset after each update.
  let nominal = vector(observations[0].rawPosition);
  let covariance = squared(observations[0].uncertainty);
  const processNoise = { x: 0.00004, y: 0.00004, z: 0.00008 };
  let innovation = 0;

  for (const observation of observations.slice(1)) {
    covariance = add(covariance, processNoise);
    const residual = subtract(observation.rawPosition, nominal);
    const measurementVariance = squared(observation.uncertainty);
    const gain = {
      x: covariance.x / (covariance.x + measurementVariance.x + EPSILON),
      y: covariance.y / (covariance.y + measurementVariance.y + EPSILON),
      z: covariance.z / (covariance.z + measurementVariance.z + EPSILON)
    };
    const errorState = { x: gain.x * residual.x, y: gain.y * residual.y, z: gain.z * residual.z };
    nominal = add(nominal, errorState); // inject δp into the nominal screw position
    covariance = {
      x: Math.max(EPSILON, (1 - gain.x) * covariance.x),
      y: Math.max(EPSILON, (1 - gain.y) * covariance.y),
      z: Math.max(EPSILON, (1 - gain.z) * covariance.z)
    };
    innovation = norm(residual);
    // The error state is reset to zero after injection; its covariance above is
    // already expressed about the updated nominal state for this additive model.
  }
  return { position: nominal, uncertainty: squareRoot(covariance), innovation };
};

const rmvFgoFusion = (observations) => {
  // Robust Multi-View Factor Graph Optimisation.  Each absolute screw estimate
  // contributes a unary observation factor; IRLS with Huber weights suppresses
  // transient RGB-D / pose outliers while jointly estimating one static point.
  let state = averageFusion(observations).position;
  const huberThreshold = 2.5;
  let information = { x: 0, y: 0, z: 0 };

  for (let iteration = 0; iteration < 8; iteration += 1) {
    let weightedSum = { x: 0, y: 0, z: 0 };
    information = { x: 0, y: 0, z: 0 };
    for (const observation of observations) {
      const residual = subtract(observation.rawPosition, state);
      const variance = squared(observation.uncertainty);
      const mahalanobis = Math.sqrt(
        residual.x * residual.x / (variance.x + EPSILON) +
        residual.y * residual.y / (variance.y + EPSILON) +
        residual.z * residual.z / (variance.z + EPSILON)
      );
      const robustWeight = mahalanobis <= huberThreshold ? 1 : huberThreshold / mahalanobis;
      const weight = {
        x: robustWeight / (variance.x + EPSILON),
        y: robustWeight / (variance.y + EPSILON),
        z: robustWeight / (variance.z + EPSILON)
      };
      information = add(information, weight);
      weightedSum = add(weightedSum, {
        x: weight.x * observation.rawPosition.x,
        y: weight.y * observation.rawPosition.y,
        z: weight.z * observation.rawPosition.z
      });
    }
    const next = {
      x: weightedSum.x / (information.x + EPSILON),
      y: weightedSum.y / (information.y + EPSILON),
      z: weightedSum.z / (information.z + EPSILON)
    };
    if (norm(subtract(next, state)) < 0.0001) { state = next; break; }
    state = next;
  }
  return {
    position: state,
    uncertainty: { x: Math.sqrt(1 / (information.x + EPSILON)), y: Math.sqrt(1 / (information.y + EPSILON)), z: Math.sqrt(1 / (information.z + EPSILON)) },
    innovation: norm(subtract(observations.at(-1).rawPosition, state))
  };
};

export const fuseScrewObservations = (algorithm, observations) => {
  if (!observations.length) return null;
  if (algorithm === "ekf") return ekfFusion(observations);
  if (algorithm === "es_ekf") return esEkfFusion(observations);
  if (algorithm === "rmv_fgo") return rmvFgoFusion(observations);
  return averageFusion(observations);
};

export const persistScrewFusionResults = async ({ operationId, detection, rawPosition, timestamp, dataSource }) => {
  if (!operationId || !detection?._id || !detection.screwId || !rawPosition) return {};
  const previous = await ScrewLocalizationTelemetry.find({ operationId, screwId: detection.screwId, algorithm: "average" })
    .sort({ timestamp: -1 }).limit(WINDOW_SIZE - 1).lean();
  const measurement = {
    rawPosition: vector(rawPosition),
    uncertainty: diagonalMeasurementUncertainty(detection.depth),
    timestamp: new Date(timestamp || detection.timestamp || Date.now())
  };
  const observations = [...previous.reverse().map((item) => ({ rawPosition: vector(item.rawPosition), uncertainty: vector(item.uncertainty) })), measurement];
  const rows = screwFusionAlgorithms.map((algorithm) => {
    const result = fuseScrewObservations(algorithm, observations);
    return {
      operationId,
      detectionId: detection._id,
      screwId: detection.screwId,
      timestamp: measurement.timestamp,
      algorithm,
      rawPosition: measurement.rawPosition,
      fusedPosition: result.position,
      uncertainty: result.uncertainty,
      innovation: result.innovation,
      observationCount: observations.length,
      dataSource: dataSource || detection.dataSource || "simulation"
    };
  });
  const created = await ScrewLocalizationTelemetry.insertMany(rows);
  return Object.fromEntries(created.map((row) => [row.algorithm, row]));
};

// Shared write path for REST and MQTT detections.  The Detection document keeps
// the currently selected result for compatibility; every algorithm is retained
// in ScrewLocalizationTelemetry for reproducible history playback.
export const persistDetectionWithScrewFusion = async (data) => {
  const detection = await Detection.create(data);
  const rawPosition = detection.rawAbsolutePosition || detection.absolutePosition;
  if (!detection.screwId || !rawPosition) return detection;
  const results = await persistScrewFusionResults({
    operationId: detection.operationId,
    detection,
    rawPosition,
    timestamp: detection.timestamp,
    dataSource: detection.dataSource
  });
  const selectedAlgorithm = getSimulationConfigValue().screwFusionAlgorithm || "average";
  const selected = results[selectedAlgorithm] || results.average;
  if (selected) {
    detection.rawAbsolutePosition = vector(rawPosition);
    detection.absolutePosition = vector(selected.fusedPosition);
    detection.screwFusionPosition = vector(selected.fusedPosition);
    detection.screwFusionAlgorithm = selected.algorithm;
    await detection.save();
  }
  return detection;
};

// Called when an operation ends.  It provides a deterministic complete result
// set for the archived operation and also backfills detections that predate the
// live multi-algorithm write path.
export const rebuildScrewFusionForOperation = async (operationId) => {
  if (!operationId) return { detections: 0, results: 0 };
  const detections = await Detection.find({ operationId }).sort({ timestamp: 1 });
  await ScrewLocalizationTelemetry.deleteMany({ operationId });
  let resultCount = 0;
  for (const detection of detections) {
    const rawPosition = detection.rawAbsolutePosition || detection.absolutePosition;
    if (!detection.screwId || !rawPosition) continue;
    const results = await persistScrewFusionResults({
      operationId,
      detection,
      rawPosition,
      timestamp: detection.timestamp,
      dataSource: detection.dataSource
    });
    const selectedAlgorithm = getSimulationConfigValue().screwFusionAlgorithm || "average";
    const selected = results[selectedAlgorithm] || results.average;
    if (selected) {
      detection.rawAbsolutePosition = vector(rawPosition);
      detection.absolutePosition = vector(selected.fusedPosition);
      detection.screwFusionPosition = vector(selected.fusedPosition);
      detection.screwFusionAlgorithm = selected.algorithm;
      await detection.save();
      resultCount += Object.keys(results).length;
    }
  }
  return { detections: detections.length, results: resultCount };
};

export const getScrewFusionResult = (detectionId, algorithm) => ScrewLocalizationTelemetry.findOne({ detectionId, algorithm }).lean();

// Return one latest fused world position per screw.  This feeds the 3D scene so
// a detected screw replaces its initial/reference position after localization.
export const getLatestScrewFusionResults = async (operationId, algorithm, at = null) => {
  const match = {
    operationId: new mongoose.Types.ObjectId(String(operationId)),
    algorithm
  };
  if (at) match.timestamp = { $lte: new Date(at) };
  return ScrewLocalizationTelemetry.aggregate([
    { $match: match },
    { $sort: { timestamp: -1 } },
    {
      $group: {
        _id: "$screwId",
        screwId: { $first: "$screwId" },
        fusedPosition: { $first: "$fusedPosition" },
        timestamp: { $first: "$timestamp" },
        observationCount: { $first: "$observationCount" }
      }
    }
  ]);
};
