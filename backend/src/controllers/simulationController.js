import { deviceAlgorithms as allowedFusionAlgorithms } from '../positioning/deviceAlgorithms.js';
const allowedScrewFusionAlgorithms = ["average", "ekf", "es_ekf", "rmv_fgo"];

let simulationConfig = {
  // UWB + IMU operator-pose fusion (a separate subsystem).
  fusionAlgorithm: "ekf",
  // RGB-D / camera-to-world multi-view screw-localization fusion.
  screwFusionAlgorithm: "average"
};

export const getSimulationConfigValue = () => simulationConfig;

export const getSimulationConfig = (_req, res) => {
  res.json(simulationConfig);
};

export const updateSimulationConfig = async (req, res) => {
  const fusionAlgorithm = req.body.fusionAlgorithm ?? simulationConfig.fusionAlgorithm;
  const screwFusionAlgorithm = req.body.screwFusionAlgorithm ?? simulationConfig.screwFusionAlgorithm;
  if (!allowedFusionAlgorithms.includes(fusionAlgorithm)) {
    return res.status(400).json({ error: "Unsupported simulation algorithm" });
  }
  if (!allowedScrewFusionAlgorithms.includes(screwFusionAlgorithm)) {
    return res.status(400).json({ error: "Unsupported screw localization algorithm" });
  }

  simulationConfig = { fusionAlgorithm, screwFusionAlgorithm };
  try {
    const aiResponse = await fetch("http://127.0.0.1:8000/api/simulation-config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(simulationConfig),
      signal: AbortSignal.timeout(3000)
    });
    if (!aiResponse.ok) throw new Error(`AI service responded with ${aiResponse.status}`);
    res.json({ ...simulationConfig, aiSynced: true });
  } catch (error) {
    res.status(503).json({
      ...simulationConfig,
      aiSynced: false,
      error: `Configuration saved in backend, but AI service is unavailable: ${error.message}`
    });
  }
};
