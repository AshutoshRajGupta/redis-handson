# Redis OTP Authentication System

A simple backend project demonstrating OTP generation and verification using Redis with automatic expiration (TTL).

---

# Tech Stack

- Node.js
- Express.js
- Redis
- ioredis

---

# Project Architecture

```txt
Client
  ↓
Express Backend
  ↓
Redis
```

---

# Features

- Generate 6-digit OTP
- Store OTP in Redis
- OTP auto expires using TTL
- Verify OTP
- Delete OTP after successful verification
- Check remaining OTP expiry time

---

# Redis Key Structure

```txt
otp:<phone-number>
```

Example:

```txt
otp:9876543210 → 483920
```

---

# API Endpoints

## Generate OTP

```http
POST /otp
```

### Request Body

```json
{
  "phone": "9876543210"
}
```

---

## Verify OTP

```http
POST /otp/verify
```

### Request Body

```json
{
  "phone": "9876543210",
  "otp": "483920"
}
```

---

## Check OTP TTL

```http
GET /otp/:phone/ttl
```

---

# Important Redis Commands Used

| Command | Purpose                       |
| ------- | ----------------------------- |
| SET EX  | Store OTP with expiration     |
| GET     | Fetch OTP                     |
| DEL     | Delete OTP after verification |
| TTL     | Check remaining expiry time   |

---

# Run Project

## Install Dependencies

```bash
npm install
```

---

## Start Redis

```bash
redis-server
```

---

## Start Server

```bash
node index.js
```

---

# Important Learning Concepts

- Redis TTL (Time To Live)
- Temporary authentication systems
- OTP verification flow
- Redis key-value storage
- Backend API development
- One-time token validation

---

# Real World Use Cases

- Login OTP systems
- Password reset flows
- Two-factor authentication
- Phone number verification
- Banking authentication systems
