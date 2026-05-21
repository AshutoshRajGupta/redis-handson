# Redis Site Banner System

A simple full-stack project demonstrating how Redis can be used as a fast in-memory data store for managing dynamic website banners like:

- `20% OFF Today`
- `🔥 Flash Sale`
- `🚧 Maintenance Notice`
- `🎉 New Feature Released`

This project uses:

- Node.js
- Express.js
- Redis
- ioredis
- HTML/CSS/JavaScript frontend

---

# Project Architecture

```txt
Frontend (HTML/JS)
        ↓
Express Backend API
        ↓
Redis (In-Memory Database)
```

---

# Folder Structure

```txt
03-site-banner
│
├── node_modules
│
├── public
│   └── index.html
│
├── src
│   └── index.js
│
├── package.json
└── package-lock.json
```

---

# Features

- Create/update banner message
- Fetch banner from Redis
- Delete banner
- Check if banner exists
- Full frontend + backend integration
- Redis GET/SET/DEL/EXISTS operations

---

# Technologies Used

| Technology  | Purpose              |
| ----------- | -------------------- |
| Node.js     | Runtime              |
| Express.js  | Backend framework    |
| Redis       | In-memory data store |
| ioredis     | Redis client         |
| HTML/CSS/JS | Frontend             |

---

# Redis Concepts Used

## Redis Key

```txt
app:banner
```

This acts as the Redis key.

Example:

```txt
app:banner → "20% OFF Today"
```

Where:

- `app:banner` = key
- `"20% OFF Today"` = value

---

# API Endpoints

## Create / Update Banner

```http
POST /banner
```

### Request Body

```json
{
  "message": "20% OFF Today"
}
```

### Redis Command

```txt
SET app:banner "20% OFF Today"
```

---

## Get Banner

```http
GET /banner
```

### Redis Command

```txt
GET app:banner
```

---

## Delete Banner

```http
DELETE /banner
```

### Redis Command

```txt
DEL app:banner
```

---

## Check Banner Exists

```http
GET /banner/exists
```

### Redis Command

```txt
EXISTS app:banner
```

---

# Installation

## 1. Clone Repository

```bash
git clone <your-repo-url>
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Redis Server

```bash
redis-server
```

---

## 4. Run Backend Server

```bash
node src/index.js
```

or

```bash
npm run dev
```

---

# Open Application

Visit:

```txt
http://localhost:3000
```

---

# Example Workflow

## Admin Updates Banner

Frontend sends:

```http
POST /banner
```

Backend stores banner in Redis:

```txt
app:banner → "Black Friday Sale"
```

---

## User Opens Website

Frontend requests:

```http
GET /banner
```

Backend fetches banner from Redis and returns response instantly.

---

# Why Redis Is Used

Redis is ideal because:

- extremely fast
- stores data in memory
- perfect for temporary dynamic content
- reduces database load
- supports caching patterns

---

# Real World Use Cases

Redis is commonly used for:

- Website banners
- OTP storage
- Session management
- Rate limiting
- Feature flags
- Notifications
- Shopping carts
- Caching APIs

---

# Important Learning Concepts

This project demonstrates:

- REST APIs
- Redis GET/SET operations
- Express routing
- Frontend API integration
- Caching concepts
- Full-stack communication
- Dynamic UI rendering

---

# Future Improvements

Possible upgrades:

- Add MongoDB/PostgreSQL fallback
- Add banner expiration using TTL
- Multiple banners
- Admin dashboard
- Real-time updates using Socket.IO
- Authentication
- Scheduled banners

---

# Cache Aside Pattern (Industry Concept)

Large production systems commonly use:

```txt
Frontend
   ↓
Backend
   ↓
Redis Cache
   ↓ (cache miss)
Database
```

Redis improves performance while database acts as permanent storage.

---

# Author

Built for learning Redis caching and full-stack architecture concepts using Node.js and Express.
