const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

const mongoUrl = process.env.MONGO_URL || "mongodb://mongo:27017";
const client = new MongoClient(mongoUrl);

(async () => {
  await client.connect();
  console.log("✅ Connected to MongoDB");
})();

app.get("/", async (req, res) => {
  const db = client.db("devopsdb");
  const collection = db.collection("visits");

  await collection.insertOne({ date: new Date() });
  const count = await collection.countDocuments();

  res.send(`🚀 App running. Visit count = ${count}`);
});

app.listen(port, () => {
  console.log(`✅ App listening on port ${port}`);
});
