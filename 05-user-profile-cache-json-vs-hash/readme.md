# Redis User Data Storage

A simple Node.js + Express project demonstrating how to store user data in Redis using:

- Redis Strings (`SET` / `GET`)
- Redis Hashes (`HSET` / `HGETALL`)

---

# Tech Stack

- Node.js
- Express.js
- Redis
- ioredis

---

# Features

- Store user data as JSON string
- Retrieve JSON user data
- Store structured user data using Redis Hash
- Retrieve hash-based user data

---

# Redis Concepts Learned

| Data Type | Commands      |
| --------- | ------------- |
| String    | SET, GET      |
| Hash      | HSET, HGETALL |

---

# Key Difference

## String Storage

```txt
user:1:json → "{name:'Ashu'}"
```

Stores complete object as string.

---

## Hash Storage

```txt
user:1:hash
   ↓
name → Ashu
age  → 22
```

Stores field-value pairs.

---

# API Endpoints

## Store User as JSON

```http
POST /user/:id/json
```

---

## Get User JSON

```http
GET /user/:id/json
```

---

## Store User as Hash

```http
POST /user/:id/hash
```

---

## Get User Hash

```http
GET /user/:id/hash
```

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

- Redis key-value storage
- JSON serialization
- Redis hashes
- Structured data storage
- Express API integration
- Redis data structures
