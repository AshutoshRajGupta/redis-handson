# Redis Email Queue System

A simple Node.js + Express project demonstrating how to build a basic email queue using Redis Lists.

---

# Tech Stack

- Node.js
- Express.js
- Redis
- ioredis

---

# Features

- Add email jobs to Redis queue
- Process queued emails
- FIFO queue behavior
- Background job processing concept

---

# Redis Concepts Learned

| Data Structure | Commands    |
| -------------- | ----------- |
| List           | LPUSH, RPOP |

---

# Queue Flow

```txt
Client
  ↓
Express API
  ↓
Redis Queue
  ↓
Worker Processing
```

---

# Redis Queue Key

```txt
queue:email
```

---

# API Endpoints

## Add Email Job

```http
POST /send-email
```

### Request Body

```json
{
  "to": "test@example.com",
  "subject": "Hello",
  "body": "Welcome!"
}
```

---

## Process Email Job

```http
GET /emails/process-one
```

---

# Important Learning Concepts

- Redis Lists
- Queue systems
- FIFO processing
- Background job handling
- Asynchronous workflows
- Job enqueue/dequeue operations

---

# Limitations

- Jobs may be lost if server crashes during processing
- No retry mechanism
- No worker acknowledgment system

---

# Real World Use Cases

- Email queues
- Notification systems
- Background workers
- Async task processing
- Job scheduling

---
