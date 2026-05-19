import express from "express";
import Redis from "ioredis";
import mongoose from "mongoose";

const app = express();

// creating redis client now

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

// redis ko ek ping karte hai
app.get("/redis", async (req, res) => {
  const reply = await redis.ping();
  res.json({ message: `redis replied with : ${reply}` });
});

// mongo end point
app.get("/mongo", async (req, res) => {
  const url =
    process.env.MONGO_URL || "mongodb://localhost:27017/chai_aur_redis";
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    res.json({
      mongo: "connected to mongo",
      database: mongoose.connection.name,
    });
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
