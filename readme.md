# Redis Learning Projects with Node.js & Express.js

A collection of practical Redis backend use cases built using **Node.js** , **Express.js** , and **Redis** to understand real-world Redis architecture patterns and data structures.

This repository focuses on learning Redis through hands-on backend projects instead of only theory.

---

# Tech Stack

- Node.js
- Express.js
- Redis
- ioredis
- BullMQ

---

# What I Learned

Through these projects, I explored:

- Redis caching concepts
- TTL-based temporary storage
- Redis Strings
- Redis Hashes
- Redis Lists
- Queue systems
- Background job processing
- API integration with Redis
- Redis key design
- Real-world Redis use cases

---

# Redis Concepts Covered

| Redis Feature | Commands Used         |
| ------------- | --------------------- |
| Strings       | SET, GET, DEL, EXISTS |
| TTL           | EX, TTL               |
| Hashes        | HSET, HGETALL         |
| Lists         | LPUSH, RPOP           |
| Queue Systems | Redis Lists + BullMQ  |

---

# Use Cases Implemented

---

# 1. Dynamic Site Banner System

A simple banner management system where website banners are stored and fetched dynamically using Redis.

## Features

- Create/update banner
- Fetch live banner
- Delete banner
- Check banner existence

## Redis Commands Used

```txt
SET
GET
DEL
EXISTS
```

## Real World Use Cases

- Promotional banners
- Maintenance notices
- Feature announcements
- Dynamic website messages

---

# 2. OTP Authentication System

Implemented OTP generation and verification using Redis with TTL expiration.

## Features

- Generate OTP
- Store OTP with expiration
- Verify OTP
- Delete OTP after successful verification
- Check OTP remaining expiry time

## Redis Commands Used

```txt
SET EX
GET
TTL
DEL
```

## Real World Use Cases

- Login OTP systems
- Password reset flows
- Two-factor authentication
- Phone verification systems

---

# 3. User Data Storage using Redis Strings & Hashes

Explored different Redis data structures for storing user data.

## Features

- Store user as JSON string
- Store user using Redis Hashes
- Retrieve structured user data
- Compare String vs Hash storage

## Redis Commands Used

```txt
SET
GET
HSET
HGETALL
```

## Concepts Learned

- JSON serialization
- Redis Hashes
- Structured data storage
- Field-level updates

---

# 4. Email Queue using Redis Lists

Built a simple asynchronous email queue system using Redis Lists.

## Features

- Add email jobs to queue
- Process queued jobs
- FIFO queue behavior
- Background job processing

## Redis Commands Used

```txt
LPUSH
RPOP
```

## Concepts Learned

- Queue systems
- Background workers
- Asynchronous processing
- FIFO queues

## Limitations

- Possible job loss on crash
- No retry mechanism
- No worker acknowledgment

---

# 5. BullMQ Queue System (Learning)

Exploring production-grade Redis job queues using BullMQ.

## Topics Exploring

- Delayed jobs
- Retry mechanisms
- Concurrency
- Worker management
- Queue monitoring
- Reliable background processing

---

# Redis Data Structures Learned

| Data Structure | Example Use Case      |
| -------------- | --------------------- |
| String         | Banner storage        |
| String + TTL   | OTP authentication    |
| Hash           | User profile storage  |
| List           | Email queues          |
| BullMQ         | Production job queues |

---

# Project Architecture

```txt
Client / Frontend
        ↓
Express.js API
        ↓
Redis
        ↓
(Optional Database Layer)
```

---

# Why Redis?

Redis is widely used because it is:

- Extremely fast (in-memory)
- Great for caching
- Supports TTL expiration
- Supports multiple data structures
- Perfect for temporary and real-time data
- Commonly used in scalable backend systems

---

# Real World Redis Use Cases

- Caching
- OTP systems
- Session management
- Feature flags
- Queues & background jobs
- Notifications
- Rate limiting
- Real-time analytics
- Leaderboards

---

# Installation

## Install Dependencies

```bash
npm install
```

---

## Start Redis Server

```bash
redis-server
```

---

## Run Project

```bash
node index.js
```

or

```bash
npm run dev
```

---

# Key Learning Takeaway

Redis is not just a simple key-value store.

It is a powerful in-memory data platform that helps solve real-world backend problems involving:

- caching
- temporary data
- queues
- background jobs
- fast-access systems
- scalable architectures

---

# Learning Resources

Special thanks to Hitesh Choudhary for the amazing Redis tutorial series.

[Redis Playlist by Hitesh Choudhary](https://www.youtube.com/playlist?list=PLYGqyJDm8HNPCGfwtxPIWreK0acZO8FdX&utm_source=chatgpt.com)

---

# Author

Built while learning Redis, backend architecture, and system design concepts using Node.js and Express.js.
