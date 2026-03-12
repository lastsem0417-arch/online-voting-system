# 🗳 Universal Voting Platform (MERN Stack)

A **full-stack voting platform** built using the **MERN stack (MongoDB, Express, React, Node.js)**.
The system allows users to participate in **elections and polls**, while admins can create elections, add candidates, and manage polls.

This platform supports:

* Multiple elections
* Multiple polls
* One vote per election
* Poll voting system
* Real-time results visualization
* Admin dashboard for management

---

# 🚀 Features

### 👤 User Features

* User registration and login
* Participate in **elections**
* Participate in **polls**
* View **live results and charts**
* Secure voting system

### ⚡ Admin Features

* Create elections
* Add candidates to elections
* Create polls with multiple options
* Manage voting system

### 📊 Results Dashboard

* Election result charts
* Poll result charts
* Winner highlighting
* Voting analytics

---

# 🛠 Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Recharts (charts & analytics)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Other Tools

* JWT Authentication
* REST API

---

# 📁 Project Structure

```
voting-system
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/voting-platform.git
```

```bash
cd voting-platform
```

---

# 📦 Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file in backend:

```
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend server:

```bash
node server.js
```

Backend will run on:

```
http://localhost:4000
```

---

# 💻 Frontend Setup

Open new terminal and go to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

# 🔐 Environment Variables

Create a `.env` file in backend directory:

```
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# 🧪 Usage

1. Register a new user
2. Login to the system
3. Vote in elections
4. Participate in polls
5. View results dashboard

Admins can:

* Create elections
* Add candidates
* Create polls

---

# 📊 Example Elections

```
College President Election
Vice President Election
Best Singer Poll
Best Rapper Poll
```

Each election allows **only one vote per user**.

---

# 📈 Results Dashboard

The platform provides:

* Bar charts for election results
* Pie charts for poll results
* Winner highlighting
* Vote analytics

---

# 🔒 Security

* JWT authentication
* Protected routes
* One vote per election enforcement

---

# 🚀 Future Improvements

Possible upgrades:

* Real-time voting using Socket.io
* Admin analytics dashboard
* Poll timer
* Leaderboards
* Mobile responsive UI
* Email verification

---

# 👨‍💻 Author

**Aryan Singh**

BCA Student
Full Stack Developer (MERN)

---

# ⭐ If you like this project

Give it a **star ⭐ on GitHub** and feel free to contribute!
