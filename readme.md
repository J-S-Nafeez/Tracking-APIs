# 🧪 MEDOC Health - Backend (Node.js + Express + MongoDB)

A backend server for MEDOC Health – a healthcare platform for managing users (Admins, Agents, Hospitals), Samples, and Test Bookings. Built with Node.js, Express, and MongoDB.

---

## 🚀 Project Structure

```
MEDOC-Health/
├── config/
│   └── db.js                # MongoDB connection config
├── controllers/             # Controller logic for routes
├── middlewares/            # Auth middlewares
├── models/                 # Mongoose models
├── routes/                 # Express routes
├── utils/                  # Utility functions (e.g., token generation)
├── .env                    # Environment variables
├── server.js               # Main entry point
```

---

## 📦 API Routes Summary

```js
app.use('/api/auth', require('./routes/auth.routes'));         // Auth routes (login/register)
app.use('/api/agents', require('./routes/agent.routes'));      // Agent CRUD & data
app.use('/api/samples', require('./routes/sample.routes'));    // Sample management
app.use('/api/hospitals', require('./routes/hospital.routes'));// Hospital-related routes
```

---

## 🌐 API Endpoints

### 🔐 Auth (`/api/auth`)
| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| POST   | /register      | Register a new user     |
| POST   | /login         | Login existing user     |

---

### 👤 Agents (`/api/agents`)
| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | /                  | Get all agents               |
| GET    | /:id               | Get agent by ID              |
| POST   | /                  | Create new agent             |
| PUT    | /:id               | Update agent details         |
| DELETE | /:id               | Delete agent                 |

---

### 🧪 Samples (`/api/samples`)
| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | /                  | Get all samples                 |
| GET    | /:id               | Get sample by ID                |
| POST   | /                  | Create new sample               |
| PUT    | /:id               | Update sample details           |
| DELETE | /:id               | Delete sample                   |

---

### 🏥 Hospitals (`/api/hospitals`)
| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | /                  | Get all hospitals               |
| GET    | /:id               | Get hospital by ID              |
| POST   | /                  | Create new hospital             |
| PUT    | /:id               | Update hospital details         |
| DELETE | /:id               | Delete hospital                 |

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/MEDOC-Health.git
cd MEDOC-Health
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### 4. Start the server
```bash
npm run dev
```

Server will start on `http://localhost:5000`

---

## 🧠 Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- dotenv
- nodemon

---

## 📬 Contact
For queries or issues, please reach out to [ahamednafeez70@gmail.com](mailto:ahamednafeez70@gmail.com.com)
