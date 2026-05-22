import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

// redis
const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

// request OTP for a phone number
function otpKey(phone) {
  return `otp:${phone}`;
}

app.post("/otp", async (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // generate a 6-digit OTP
  // store OTP in Redis with a TTL of 5 minutes
  await redis.set(otpKey(phone), otp, "EX", 30); // EX sets the expiration time in seconds
  res.json({ message: "OTP sent successfully", otp }); // In production, you would send the OTP via SMS instead of returning it in the response
});

// verify OTP for a phone number coming from the client and check if it matches the one stored in Redis

app.post("/otp/verify", async (req, res) => {
  const { phone, otp } = req.body;
  const storedOtp = await redis.get(otpKey(phone));
  if (!storedOtp) {
    return res.status(400).json({ message: "OTP expired or not found" });
  }
  if (storedOtp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }
  await redis.del(otpKey(phone)); // delete OTP after successful verification
  res.json({ message: "OTP verified successfully" });
});

app.get("/otp/:phone/ttl", async (req, res) => {
  const ttl = await redis.ttl(otpKey(req.params.phone));
  res.json({ ttl });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
