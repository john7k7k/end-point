import mongoose from "mongoose";

const databaseUri = "mongodb://127.0.0.1:27017/vision_system";
const preservedCollections = new Set(["users"]);

try {
  await mongoose.connect(databaseUri);
  const collections = await mongoose.connection.db.listCollections().toArray();
  let clearedDocuments = 0;

  for (const { name } of collections) {
    if (preservedCollections.has(name)) continue;
    const result = await mongoose.connection.db.collection(name).deleteMany({});
    clearedDocuments += result.deletedCount;
    console.log(`Cleared ${name}: ${result.deletedCount} document(s)`);
  }

  console.log(`Database refresh complete. Preserved users; removed ${clearedDocuments} document(s).`);
} catch (error) {
  console.error("Database refresh failed:", error.message);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect().catch(() => undefined);
}
