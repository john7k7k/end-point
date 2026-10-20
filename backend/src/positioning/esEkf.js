import { solveGwo4d, cleanGwoRanges } from './gwo4d.js';
import { deviceAlgorithms } from './deviceAlgorithms.js';
const anchors = [
  [0, 0, 0], [20, 0, 0], [0, 12, 0], [20, 12, 0],
  [0, 0, 2.5], [20, 0, 2.5], [0, 12, 2.5], [20, 12, 2.5]
];

const state = {
  position: [10, 6, 1.45], velocity: [0, 0, 0], quaternion: [1, 0, 0, 0],
  positionVariance: [0.4, 0.4, 0.4], lastUpdate: Date.now(), latestRanges: [], latestImu: null
};

const createInertialState = () => ({
  position: [10, 6, 1.45], velocity: [0, 0, 0], quaternion: [1, 0, 0, 0],
  positionVariance: [0.4, 0.4, 0.4], lastUpdate: Date.now(), latestRanges: [], latestImu: null
});
const complementaryState = createInertialState();
const weightedAverageState = createInertialState();
const gwoState = createInertialState();
const targetFor = algorithm => algorithm === 'gwo4d' ? gwoState : algorithm === 'complementary' ? complementaryState : algorithm === 'weighted_average' ? weightedAverageState : state;
const resetState = (target) => Object.assign(target, createInertialState());

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const normalizeQuaternion = (q) => {
  const length = Math.hypot(...q) || 1;
  return q.map((value) => value / length);
};
const quaternionMultiply = (a, b) => [
  a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3],
  a[0] * b[1] + a[1] * b[0] + a[2] * b[3] - a[3] * b[2],
  a[0] * b[2] - a[1] * b[3] + a[2] * b[0] + a[3] * b[1],
  a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0]
];

const eulerFromQuaternion = ([w, x, y, z]) => ({
  roll: Math.atan2(2 * (w * x + y * z), 1 - 2 * (x * x + y * y)) * 180 / Math.PI,
  pitch: Math.asin(clamp(2 * (w * y - z * x), -1, 1)) * 180 / Math.PI,
  yaw: Math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z)) * 180 / Math.PI
});

const validRangesFrom = (ranges) => ranges.filter((item) => Number.isInteger(item.stationId) && anchors[item.stationId] && Number.isFinite(item.distance));
const recordRanges = (target, ranges) => {
  target.latestRanges = ranges.map(({ stationId, distance }) => ({ stationId, distance: Number(distance.toFixed(3)) }));
};
const integrateImu = (target, acceleration, gyroscope, now, integratePosition = true) => {
  const dt = clamp((now - target.lastUpdate) / 1000, 0.001, 0.1);
  target.lastUpdate = now;
  target.latestImu = {
    acceleration: Object.fromEntries(['x', 'y', 'z'].map((axis) => [axis, Number(Number(acceleration[axis] || 0).toFixed(3))])),
    gyroscope: Object.fromEntries(['x', 'y', 'z'].map((axis) => [axis, Number(Number(gyroscope[axis] || 0).toFixed(3))]))
  };
  const gyro = [gyroscope.x, gyroscope.y, gyroscope.z].map((value) => Number(value || 0) * Math.PI / 180);
  target.quaternion = normalizeQuaternion(quaternionMultiply(target.quaternion, [1, gyro[0] * dt / 2, gyro[1] * dt / 2, gyro[2] * dt / 2]));
  for (let axis = 0; integratePosition && axis < 3; axis += 1) {
    const value = Number(acceleration[['x', 'y', 'z'][axis]] || 0);
    target.position[axis] += target.velocity[axis] * dt + value * dt * dt / 2;
    target.velocity[axis] += value * dt;
    target.positionVariance[axis] += 0.03 * dt;
  }
};

const solve3x3 = (matrix, vector) => {
  const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
  const determinant = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
  if (Math.abs(determinant) < 1e-8) return null;
  const inverse = [
    [(e * i - f * h) / determinant, (c * h - b * i) / determinant, (b * f - c * e) / determinant],
    [(f * g - d * i) / determinant, (a * i - c * g) / determinant, (c * d - a * f) / determinant],
    [(d * h - e * g) / determinant, (b * g - a * h) / determinant, (a * e - b * d) / determinant]
  ];
  return inverse.map((row) => row.reduce((sum, value, index) => sum + value * vector[index], 0));
};

// Nonlinear least squares multilateration. It turns the 8 UWB ranges into an
// independent 3D UWB position used by the two non-EKF fusion branches.
const solveUwbPosition = (ranges, initialPosition) => {
  if (ranges.length < 4) return null;
  const position = [...initialPosition];
  for (let iteration = 0; iteration < 5; iteration += 1) {
    const normal = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const gradient = [0, 0, 0];
    for (const { stationId, distance } of ranges) {
      const delta = position.map((value, axis) => value - anchors[stationId][axis]);
      const predicted = Math.hypot(...delta) || 0.001;
      const residual = distance - predicted;
      const h = delta.map((value) => value / predicted);
      for (let row = 0; row < 3; row += 1) {
        gradient[row] += h[row] * residual;
        for (let column = 0; column < 3; column += 1) normal[row][column] += h[row] * h[column];
      }
    }
    const correction = solve3x3(normal, gradient);
    if (!correction) return null;
    correction.forEach((value, axis) => { position[axis] += clamp(value, -1, 1); });
    if (Math.hypot(...correction) < 0.001) break;
  }
  const residualVariance = ranges.reduce((sum, { stationId, distance }) => {
    const residual = distance - Math.hypot(...position.map((value, axis) => value - anchors[stationId][axis]));
    return sum + residual * residual;
  }, 0) / ranges.length;
  return { position, variance: Math.max(0.01, residualVariance) };
};

const updateComplementary = (ranges) => {
  const validRanges = validRangesFrom(ranges); recordRanges(complementaryState, validRanges);
  const uwb = solveUwbPosition(validRanges, complementaryState.position);
  if (!uwb) return;
  // High-frequency inertial prediction + low-frequency, drift-free UWB position.
  const alpha = 0.86;
  complementaryState.position = complementaryState.position.map((value, axis) => alpha * value + (1 - alpha) * uwb.position[axis]);
  complementaryState.positionVariance = complementaryState.positionVariance.map((value) => Math.max(0.01, alpha * value + (1 - alpha) * uwb.variance));
};

const updateWeightedAverage = (ranges) => {
  const validRanges = validRangesFrom(ranges); recordRanges(weightedAverageState, validRanges);
  const uwb = solveUwbPosition(validRanges, weightedAverageState.position);
  if (!uwb) return;
  weightedAverageState.position = weightedAverageState.position.map((inertialPosition, axis) => {
    const inertialVariance = Math.max(0.01, weightedAverageState.positionVariance[axis]);
    const uwbWeight = 1 / uwb.variance;
    const inertialWeight = 1 / inertialVariance;
    return (uwbWeight * uwb.position[axis] + inertialWeight * inertialPosition) / (uwbWeight + inertialWeight);
  });
  weightedAverageState.positionVariance = weightedAverageState.positionVariance.map((value) => {
    const inertialWeight = 1 / Math.max(0.01, value);
    const uwbWeight = 1 / uwb.variance;
    return 1 / (inertialWeight + uwbWeight);
  });
};

export const predict = (acceleration, gyroscope, now = Date.now(), algorithm = "ekf") => {
  if (algorithm === 'gwo4d') return integrateImu(gwoState, acceleration, gyroscope, now, false);
  if (algorithm === "complementary") return integrateImu(complementaryState, acceleration, gyroscope, now);
  if (algorithm === "weighted_average") return integrateImu(weightedAverageState, acceleration, gyroscope, now);
  const dt = clamp((now - state.lastUpdate) / 1000, 0.001, 0.1);
  state.lastUpdate = now;
  state.latestImu = {
    acceleration: Object.fromEntries(['x', 'y', 'z'].map((axis) => [axis, Number(Number(acceleration[axis] || 0).toFixed(3))])),
    gyroscope: Object.fromEntries(['x', 'y', 'z'].map((axis) => [axis, Number(Number(gyroscope[axis] || 0).toFixed(3))]))
  };
  const gyro = [gyroscope.x, gyroscope.y, gyroscope.z].map((value) => value * Math.PI / 180);
  state.quaternion = normalizeQuaternion(quaternionMultiply(state.quaternion, [1, gyro[0] * dt / 2, gyro[1] * dt / 2, gyro[2] * dt / 2]));
  for (let axis = 0; axis < 3; axis += 1) {
    state.position[axis] += state.velocity[axis] * dt + acceleration[['x', 'y', 'z'][axis]] * dt * dt / 2;
    state.velocity[axis] += acceleration[['x', 'y', 'z'][axis]] * dt;
    state.positionVariance[axis] += 0.03 * dt;
  }
};

// Error-state position correction from up to eight UWB range measurements.
export const updateUwb = (ranges, algorithm = "ekf") => {
  if (algorithm === 'gwo4d') {
    const valid = cleanGwoRanges(ranges); recordRanges(gwoState, valid);
    const solution = solveGwo4d(valid);
    const { position, positionVariance, ...diagnostics } = solution;
    gwoState.deviceLocalization = diagnostics;
    if (solution.status === 'ready') {
      gwoState.position = position; gwoState.positionVariance = positionVariance;
      gwoState.velocity = [0,0,0];
    }
    return solution.status === 'ready';
  }
  if (algorithm === "complementary") return updateComplementary(ranges);
  if (algorithm === "weighted_average") return updateWeightedAverage(ranges);
  const validRanges = ranges.filter((item) => Number.isInteger(item.stationId) && anchors[item.stationId] && Number.isFinite(item.distance));
  state.latestRanges = validRanges.map(({ stationId, distance }) => ({ stationId, distance: Number(distance.toFixed(3)) }));
  for (let iteration = 0; iteration < 2; iteration += 1) {
    const correction = [0, 0, 0];
    const weight = [0, 0, 0];
    for (const { stationId, distance } of validRanges) {
      const anchor = anchors[stationId];
      const delta = state.position.map((value, axis) => value - anchor[axis]);
      const predicted = Math.hypot(...delta) || 0.001;
      const residual = distance - predicted;
      for (let axis = 0; axis < 3; axis += 1) {
        const h = delta[axis] / predicted;
        const gain = state.positionVariance[axis] * h / (h * h * state.positionVariance[axis] + 0.08);
        correction[axis] += gain * residual;
        weight[axis] += Math.abs(gain);
      }
    }
    for (let axis = 0; axis < 3; axis += 1) {
      if (weight[axis]) state.position[axis] += correction[axis] / weight[axis];
      state.positionVariance[axis] = Math.max(0.01, state.positionVariance[axis] * 0.82);
    }
  }
};

const virtualMeasurements = () => {
  const time = Date.now() / 1000;
  // Visit the four screw groups in sequence.  The simulated camera faces the
  // next corner while approaching it, so valid FOV/depth detections are produced.
  const corners = [[2, 2], [18, 2], [18, 10], [2, 10]];
  const phase = (time / 8) % corners.length;
  const index = Math.floor(phase);
  const progress = phase - index;
  const eased = progress * progress * (3 - 2 * progress);
  const from = corners[index];
  const to = corners[(index + 1) % corners.length];
  const truth = [from[0] + (to[0] - from[0]) * eased, from[1] + (to[1] - from[1]) * eased, 1.35 + Math.sin(time * 0.1) * 0.08];
  const heading = Math.atan2(to[1] - from[1], to[0] - from[0]);
  const noise = (index) => Math.sin(time * (index + 1) * 1.7) * 0.035 + (Math.random() - .5) * .012;
  return {
    acceleration: { x: .03 * Math.sin(time * .4) + (Math.random() - .5) * .006, y: .03 * Math.cos(time * .35) + (Math.random() - .5) * .006, z: -.001 * Math.sin(time * .1) + (Math.random() - .5) * .002 },
    gyroscope: { x: 1.2 * Math.cos(time * .3) + (Math.random() - .5) * .18, y: .8 * Math.sin(time * .23) + (Math.random() - .5) * .14, z: (Math.random() - .5) * .08 },
    heading,
    ranges: anchors.map((anchor, stationId) => ({ stationId, distance: Math.hypot(...truth.map((value, axis) => value - anchor[axis])) + noise(stationId) }))
  };
};

export const stepVirtual = (algorithm = "ekf") => {
  const measurement = virtualMeasurements();
  predict(measurement.acceleration, measurement.gyroscope, Date.now(), algorithm);
  updateUwb(measurement.ranges, algorithm);
  // Simulated heading reference (e.g. a calibrated IMU yaw reference).
  const target = targetFor(algorithm);
  target.quaternion = [Math.cos(measurement.heading / 2), 0, 0, Math.sin(measurement.heading / 2)];
  return measurement;
};

// A single virtual raw sample is deliberately fed to every filter so their
// historical paths can be compared fairly instead of each receiving new noise.
export const stepVirtualAll = () => {
  const measurement = virtualMeasurements();
  for (const algorithm of deviceAlgorithms) {
    predict(measurement.acceleration, measurement.gyroscope, Date.now(), algorithm);
    updateUwb(measurement.ranges, algorithm);
    const target = targetFor(algorithm);
    target.quaternion = [Math.cos(measurement.heading / 2), 0, 0, Math.sin(measurement.heading / 2)];
  }
  return measurement;
};

export const resetAllFilters = (timestamp = Date.now()) => {
  for (const target of [state, complementaryState, weightedAverageState, gwoState]) {
    resetState(target); delete target.deviceLocalization; target.lastUpdate = timestamp;
  }
};
export const setHeading = (heading, algorithm = "ekf") => {
  const target = targetFor(algorithm);
  target.quaternion = [Math.cos(heading / 2), 0, 0, Math.sin(heading / 2)];
};

export const getFilterState = (algorithm = "ekf") => {
  const target = targetFor(algorithm);
  return {
  position: Object.fromEntries(['x', 'y', 'z'].map((axis, index) => [axis, Number(target.position[index].toFixed(3))])),
  quaternion: Object.fromEntries(['w', 'x', 'y', 'z'].map((axis, index) => [axis, Number(target.quaternion[index].toFixed(5))])),
  orientation: Object.fromEntries(Object.entries(eulerFromQuaternion(target.quaternion)).map(([key, value]) => [key, Number(value.toFixed(2))])),
  anchorCount: anchors.length,
  uwbRanges: target.latestRanges,
  imu: target.latestImu,
  ...(algorithm === 'gwo4d' ? { deviceLocalization: target.deviceLocalization || {algorithm:'gwo4d',status:'awaiting_ranges'} } : {})
};
};

export const getEsEkfState = () => getFilterState("ekf");
