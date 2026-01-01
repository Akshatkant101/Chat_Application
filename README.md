# Quick Chat - Real-Time Chat Application

A scalable, real-time chat application built with Next.js, Express.js, Socket.io, Kafka, Redis, and PostgreSQL. This application demonstrates modern microservices architecture patterns with asynchronous message processing and horizontal scaling capabilities.

## 🏗️ Architecture

### System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Next.js Frontend (React + TypeScript)                    │  │
│  │  - User Interface                                         │  │
│  │  - Socket.io Client                                       │  │
│  │  - NextAuth for Authentication                            │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                            │
                            │ WebSocket / HTTP
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                      SERVER LAYER                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Express.js Backend (TypeScript)                         │  │
│  │  ┌────────────────────────────────────────────────────┐  │  │
│  │  │  Socket.io Server                                   │  │  │
│  │  │  - Real-time message broadcasting                   │  │  │
│  │  │  - Room-based chat groups                           │  │  │
│  │  └────────────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────────────┐  │  │
│  │  │  REST API Endpoints                                 │  │  │
│  │  │  - Authentication                                   │  │  │
│  │  │  - Chat Group Management                            │  │  │
│  │  │  - Chat History                                     │  │  │
│  │  └────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
         │                    │                    │
         │                    │                    │
    ┌────▼────┐         ┌────▼────┐         ┌────▼────┐
    │  Redis  │         │  Kafka  │         │PostgreSQL│
    │         │         │         │         │          │
    │ Socket  │         │ Message │         │  Prisma  │
    │ Adapter │         │  Queue  │         │   ORM    │
    └─────────┘         └─────────┘         └──────────┘
```

### Message Flow Architecture

```
User sends message
    │
    ▼
Socket.io Server receives message
    │
    ├──► Broadcast to room (real-time delivery)
    │
    └──► Kafka Producer ──► Kafka Topic ("chats")
                              │
                              ▼
                         Kafka Consumer
                              │
                              ▼
                         Save to PostgreSQL
                              │
                              ▼
                         Message persisted
```

## 🚀 Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Socket.io Client** - Real-time WebSocket communication
- **NextAuth** - Authentication system
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **Zod** - Schema validation

### Backend
- **Express.js** - RESTful API server
- **TypeScript** - Type-safe development
- **Socket.io** - Real-time bidirectional communication
- **Prisma** - Database ORM
- **PostgreSQL** - Relational database
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing

### Infrastructure
- **Apache Kafka** - Message queue and event streaming
- **Redis** - Socket.io adapter for horizontal scaling
- **Docker** - Containerization (recommended)

## 📦 Key Components

### 1. Kafka Integration

#### Purpose
Kafka is used for **asynchronous message processing** and **decoupling** the real-time message delivery from database persistence. This ensures:
- High throughput for message handling
- Fault tolerance and message durability
- Scalability for handling large message volumes
- Non-blocking database operations

#### Implementation

**Kafka Producer** (`server/src/config/kafka.config.ts`)
```typescript
// Produces messages to Kafka topic when users send chat messages
export const producer = kafka.producer();
```

**Message Production** (`server/src/socket.ts`)
- When a user sends a message via Socket.io, it's immediately broadcast to the room
- Simultaneously, the message is sent to Kafka topic for async processing

**Kafka Consumer** (`server/src/helper.ts`)
- Consumes messages from Kafka topic
- Persists messages to PostgreSQL database
- Ensures message durability and history

#### Kafka Flow
1. **User sends message** → Socket.io receives it
2. **Real-time broadcast** → Message sent to all users in the room
3. **Kafka Producer** → Message queued in Kafka topic
4. **Kafka Consumer** → Message consumed and saved to database
5. **Database** → Message persisted for chat history

### 2. Redis Integration

#### Purpose
Redis is used as a **Socket.io adapter** to enable **horizontal scaling** of the application. This allows:
- Multiple server instances to share socket connections
- Load balancing across multiple servers
- Consistent message delivery across all instances
- Session management and state sharing

#### Implementation

**Redis Configuration** (`server/src/config/redis.ts`)
```typescript
// Redis connection for Socket.io adapter
redis = new Redis(process.env.REDIS_URL);
```

**Socket.io Adapter** (`server/src/index.ts`)
```typescript
import { createAdapter } from "@socket.io/redis-streams-adapter";
const io = new Server(server, {
  adapter: createAdapter(redis), // Redis adapter for scaling
});
```

#### Redis Benefits
- **Horizontal Scaling**: Run multiple server instances behind a load balancer
- **Shared State**: All instances share the same socket connection state
- **High Availability**: Redis ensures message delivery even if one instance fails
- **Performance**: Redis Streams provide efficient pub/sub mechanism

### 3. Docker Integration

#### Purpose
Docker enables **containerization** of the application for:
- Consistent development and production environments
- Easy deployment and scaling
- Dependency management
- Isolation of services

#### Recommended Docker Setup

**docker-compose.yml** (Recommended structure)
```yaml
version: '3.8'

services:
  # PostgreSQL Database
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  # Redis
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  # Kafka (using Confluent Platform)
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

  # Backend Server
  backend:
    build:
      context: ./server
      dockerfile: Dockerfile
    ports:
      - "7000:7000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=redis://redis:6379
      - KAFKA_BROKER=kafka:9092
    depends_on:
      - postgres
      - redis
      - kafka

  # Frontend
  frontend:
    build:
      context: ./front
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_BACKEND_URL=http://backend:7000
    depends_on:
      - backend
```

**Backend Dockerfile** (`server/Dockerfile`)
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 7000

CMD ["npm", "start"]
```

**Frontend Dockerfile** (`front/Dockerfile`)
```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
```

## 📁 Project Structure

```
quick_chat/
├── front/                    # Next.js Frontend
│   ├── src/
│   │   ├── app/             # Next.js App Router
│   │   ├── components/      # React components
│   │   ├── lib/             # Utilities and configs
│   │   └── fetch/           # API client functions
│   └── package.json
│
├── server/                   # Express.js Backend
│   ├── src/
│   │   ├── config/          # Configuration files
│   │   │   ├── kafka.config.ts
│   │   │   ├── redis.ts
│   │   │   └── db.config.ts
│   │   ├── controllers/     # Route controllers
│   │   ├── middleware/      # Express middleware
│   │   ├── routes/          # API routes
│   │   ├── socket.ts        # Socket.io setup
│   │   ├── helper.ts        # Kafka producer/consumer
│   │   └── index.ts         # Server entry point
│   ├── prisma/              # Database schema and migrations
│   └── package.json
│
└── README.md
```

## 🔧 Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database
- Redis server
- Kafka broker (or use Upstash Kafka)
- Docker and Docker Compose (optional)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd quick_chat
```

2. **Backend Setup**
```bash
cd server
npm install
```

3. **Database Setup**
```bash
# Create .env file with database URL
npx prisma generate
npx prisma migrate dev
```

4. **Frontend Setup**
```bash
cd ../front
npm install
```

### Environment Variables

**Backend** (`server/.env`)
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/quick_chat"

# Server
PORT=7000
NODE_ENV=development
CLIENT_APP_URL=http://localhost:3000

# Redis
REDIS_URL=redis://localhost:6379

# Kafka
KAFKA_BROKER=your-kafka-broker-url
KAFKA_USERNAME=your-kafka-username
KAFKA_PASSWORD=your-kafka-password
KAFKA_TOPIC=chats

# JWT
JWT_SECRET=your-jwt-secret-key
```

**Frontend** (`front/.env.local`)
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:7000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
```

### Running the Application

**Development Mode**

1. **Start Backend**
```bash
cd server
npm run dev
```

2. **Start Frontend**
```bash
cd front
npm run dev
```

**Docker Mode**

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🔄 Data Flow

### Chat Message Flow

1. **User sends message** via frontend
2. **Socket.io client** sends message to server
3. **Socket.io server** receives message:
   - Immediately broadcasts to all users in the room (real-time)
   - Produces message to Kafka topic (async)
4. **Kafka Consumer** processes message:
   - Consumes from Kafka topic
   - Saves message to PostgreSQL database
5. **Chat history** is available via REST API

### Benefits of This Architecture

- **Real-time Delivery**: Messages appear instantly via Socket.io
- **Reliability**: Kafka ensures message persistence even if database is temporarily unavailable
- **Scalability**: Redis adapter allows horizontal scaling
- **Performance**: Non-blocking database operations
- **Fault Tolerance**: Messages are queued and processed asynchronously

## 🎯 Features

- ✅ Real-time chat messaging
- ✅ Group chat rooms with passcode protection
- ✅ User authentication (OAuth support)
- ✅ Chat history persistence
- ✅ Horizontal scaling support
- ✅ Asynchronous message processing
- ✅ Modern, responsive UI

## 📝 API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### Chat Groups
- `GET /api/chat-group` - List user's chat groups
- `GET /api/chat-group/:id` - Get chat group details
- `POST /api/chat-group` - Create new chat group
- `PUT /api/chat-group/:id` - Update chat group
- `DELETE /api/chat-group/:id` - Delete chat group

### Chat Messages
- `GET /api/chats/:groupId` - Get chat history for a group

## 🚀 Deployment

### Production Considerations

1. **Environment Variables**: Use secure secret management
2. **Database**: Use managed PostgreSQL service
3. **Redis**: Use managed Redis service (e.g., Redis Cloud, Upstash)
4. **Kafka**: Use managed Kafka service (e.g., Upstash Kafka, Confluent Cloud)
5. **Docker**: Use Docker Compose or Kubernetes for orchestration
6. **Load Balancing**: Use nginx or cloud load balancer
7. **SSL/TLS**: Enable HTTPS for all connections

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

---

Built with ❤️ using Next.js, Express.js, Socket.io, Kafka, Redis, and Docker

