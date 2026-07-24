const anchors = [
  [0, 0, 0], [4, 0, 0], [0, 4, 0], [4, 4, 0],
  [0, 0, 2.5], [4, 0, 2.5], [0, 4, 2.5], [4, 4, 2.5]
];

const state = {
  position: [1.2, 0.8, 1.45], velocity: [0, 0, 0], quaternion: [1, 0, 0, 0],
  positionVariance: [0.4, 0.4, 0.4], lastUpdate: Date.now(), latestRanges: [], latestImu: null
};

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

export const predict = (acceleration, gyroscope, now = Date.now()) => {
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
export const updateUwb = (ranges) => {
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
  const truth = [1.8 + Math.sin(time * 0.2), 1.8 + Math.cos(time * 0.16), 1.35 + Math.sin(time * 0.1) * 0.12];
  const noise = (index) => Math.sin(time * (index + 1) * 1.7) * 0.035;
  return {
    acceleration: { x: -0.04 * Math.sin(time * 0.2), y: -0.026 * Math.cos(time * 0.16), z: -0.001 * Math.sin(time * 0.1) },
    gyroscope: { x: 1.2 * Math.cos(time * 0.3), y: 0.8 * Math.sin(time * 0.23), z: 11.5 },
    ranges: anchors.map((anchor, stationId) => ({ stationId, distance: Math.hypot(...truth.map((value, axis) => value - anchor[axis])) + noise(stationId) }))
  };
};

export const stepVirtual = () => {
  const measurement = virtualMeasurements();
  predict(measurement.acceleration, measurement.gyroscope);
  updateUwb(measurement.ranges);
};

export const getEsEkfState = () => ({
  position: Object.fromEntries(['x', 'y', 'z'].map((axis, index) => [axis, Number(state.position[index].toFixed(3))])),
  quaternion: Object.fromEntries(['w', 'x', 'y', 'z'].map((axis, index) => [axis, Number(state.quaternion[index].toFixed(5))])),
  orientation: Object.fromEntries(Object.entries(eulerFromQuaternion(state.quaternion)).map(([key, value]) => [key, Number(value.toFixed(2))])),
  anchorCount: anchors.length,
  uwbRanges: state.latestRanges,
  imu: state.latestImu
});
