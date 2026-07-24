import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const videoDirectory = path.resolve(__dirname, "../../../AI/video");
const operationIdPattern = /^[a-fA-F0-9]{24}$/;

const getVideoFiles = async (operationId) => {
  if (!operationIdPattern.test(operationId)) return [];
  const files = await readdir(videoDirectory);
  return files
    .filter((file) => [
      `detect_${operationId}_`,
      `color_detect_${operationId}_`,
      `depth_detect_${operationId}_`
    ].some((prefix) => file.startsWith(prefix)) && file.endsWith(".mp4"))
    .sort((a, b) => b.localeCompare(a));
};

const getVideoKind = (filename) => {
  if (filename.startsWith("color_detect_")) return "color";
  if (filename.startsWith("depth_detect_")) return "depth";
  return "combined";
};

export const getOperationVideos = async (req, res) => {
  try {
    const files = await getVideoFiles(req.params.operationId);
    res.json(files.map((filename) => ({
      filename,
      kind: getVideoKind(filename),
      startedAt: Number(filename.match(/_(\d+)\.mp4$/)?.[1]) || null,
      url: `/api/videos/${req.params.operationId}/${encodeURIComponent(filename)}`
    })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const streamOperationVideo = async (req, res) => {
  try {
    const { operationId, filename } = req.params;
    const files = await getVideoFiles(operationId);
    if (!files.includes(filename)) return res.status(404).json({ error: "Video not found" });
    res.sendFile(path.join(videoDirectory, filename));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
