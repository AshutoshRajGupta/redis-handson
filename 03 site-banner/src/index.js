import express from "express";
import Redis from "ioredis";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(cors());
app.use(express.json());

// serve frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")));

// redis
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

const BANNER_KEY = "app:banner";

// create/update banner
app.post("/banner", async (req, res) => {
  await redis.set(BANNER_KEY, req.body.message || "Welcome!");

  res.json({ success: true });
});

// get banner
app.get("/banner", async (req, res) => {
  const message = await redis.get(BANNER_KEY);

  res.json({ message });
});

// delete banner
app.delete("/banner", async (req, res) => {
  await redis.del(BANNER_KEY);

  res.json({ success: true });
});

// exists
app.get("/banner/exists", async (req, res) => {
  const exists = await redis.exists(BANNER_KEY);

  res.json({ exists });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
