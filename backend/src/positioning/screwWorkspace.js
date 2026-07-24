// Fixed reference layout for the simulated 20 m × 12 m work area.
// Each corner contains a two-screw group; each screw type occurs four times.
export const workspaceScrews = [
  { id: 'A-1', type: 'M4 hex screw', x: 1.2, y: 1.2, z: 1.1 }, { id: 'A-2', type: 'M4 hex screw', x: 2.0, y: 1.2, z: 1.1 },
  { id: 'B-1', type: 'M6 socket screw', x: 18.0, y: 1.2, z: 1.1 }, { id: 'B-2', type: 'M6 socket screw', x: 18.8, y: 1.2, z: 1.1 },
  { id: 'B-3', type: 'M6 socket screw', x: 1.2, y: 10.8, z: 1.1 }, { id: 'B-4', type: 'M6 socket screw', x: 2.0, y: 10.8, z: 1.1 },
  { id: 'A-3', type: 'M4 hex screw', x: 18.0, y: 10.8, z: 1.1 }, { id: 'A-4', type: 'M4 hex screw', x: 18.8, y: 10.8, z: 1.1 }
];

const degrees = (value) => value * 180 / Math.PI;

export const getVisibleScrews = (telemetry, { minDepth = 0.35, maxDepth = 5, horizontalFov = 70, verticalFov = 52 } = {}) => {
  const { position, orientation } = telemetry;
  const yaw = (orientation.yaw || 0) * Math.PI / 180;
  const pitch = (orientation.pitch || 0) * Math.PI / 180;
  const forward = { x: Math.cos(yaw), y: Math.sin(yaw) };
  const right = { x: -Math.sin(yaw), y: Math.cos(yaw) };
  return workspaceScrews.map((screw) => {
    const dx = screw.x - position.x, dy = screw.y - position.y, dz = screw.z - position.z;
    const forwardDistance = dx * forward.x + dy * forward.y;
    const lateralDistance = dx * right.x + dy * right.y;
    const depth = Math.hypot(forwardDistance, lateralDistance, dz);
    const horizontalAngle = degrees(Math.atan2(lateralDistance, Math.max(forwardDistance, .001)));
    const verticalAngle = degrees(Math.atan2(dz, Math.max(Math.hypot(forwardDistance, lateralDistance), .001))) - degrees(pitch);
    const visible = forwardDistance > 0 && depth >= minDepth && depth <= maxDepth && Math.abs(horizontalAngle) <= horizontalFov / 2 && Math.abs(verticalAngle) <= verticalFov / 2;
    return { ...screw, visible, depth: Number(depth.toFixed(3)), cameraPosition: { x: Number(lateralDistance.toFixed(3)), y: Number(dz.toFixed(3)), z: Number(forwardDistance.toFixed(3)) } };
  });
};

export const getWorkspaceState = (telemetry) => {
  const screws = getVisibleScrews(telemetry);
  // Proximity alert is intentionally independent of camera direction / FOV.
  const nearby = workspaceScrews.map((screw) => ({ ...screw, distance: Math.hypot(screw.x - telemetry.position.x, screw.y - telemetry.position.y, screw.z - telemetry.position.z) })).filter((screw) => screw.distance <= 3).sort((a, b) => a.distance - b.distance)[0] || null;
  return {
    screws,
    visibleScrews: screws.filter((screw) => screw.visible),
    notification: nearby ? `附近有 ${nearby.type}（${nearby.id}），距離 ${nearby.distance.toFixed(2)} m。` : ''
  };
};
