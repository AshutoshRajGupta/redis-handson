import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

// redis
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
const EMAIL_QUEUE_KEY = "queue:email";

app.post("/send-email", async (req, res) => {
  const job = {
    to: req.body.to,
    subject: req.body.subject || "No subject",
    body: req.body.body || "No content",
    createdAt: new Date().toISOString(),
  };
  await redis.lpush(EMAIL_QUEUE_KEY, JSON.stringify(job));
  res.json({ queued: true, job });
});

app.get("/emails/prcess-one", async (req, res) => {
  const rawJob = await redis.rpop(EMAIL_QUEUE_KEY);
  if (!rawJob) {
    return res.json({ message: "No email to process" });
  }
  const job = JSON.parse(rawJob);
  res.json({ message: "Email processed", job });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
