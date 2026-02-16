# Full Stack Web Application

A production-ready full stack web application built using **Vite + React, Spring Boot, Java 21, and MySQL**, featuring secure authentication, role-based access control, and a scalable backend architecture. The system includes an admin dashboard and core business workflows, designed for performance, security, and maintainability.

---

## 🚀 Features

* Secure **JWT-based authentication**
* **Role-Based Access Control (RBAC)**
* Full **CRUD operations** across modules
* Admin dashboard for system management
* RESTful API architecture
* Optimized database queries for improved performance
* Docker-based containerized backend deployment

---

## 🛠 Tech Stack

**Frontend**

* Vite
* React.js
* JavaScript
* HTML5, CSS3

**Backend**

* Java 21
* Spring Boot
* Spring Security
* REST APIs

**Database**

* MySQL
* Normalized relational schema design

**DevOps & Deployment**

* Docker
* AWS EC2
* Environment-based configurations

---

## 🏗 Architecture

The backend follows a **layered architecture**:

Controller → Service → Repository → Database

* **Controller Layer**: Handles HTTP requests
* **Service Layer**: Business logic
* **Repository Layer**: Database operations

---

## ⚙️ Key Implementations

* JWT-based secure authentication
* Role-based authorization
* Optimized SQL queries (~40% API performance improvement)
* Reduced redundant API calls on frontend
* Dockerized backend
* Deployed on AWS EC2

---

## 📦 Installation & Setup

### Prerequisites

* **Java 21**
* Node.js 18+
* MySQL
* Docker (optional)

---

## Backend Setup

```bash
cd backend
./mvnw spring-boot:run
```

Or using Docker:

```bash
docker build -t app-backend .
docker run -p 8080:8080 app-backend
```

---

## Frontend Setup (Vite + React)

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔐 Environment Variables

Create a `.env` file for backend configuration:

```
DB_URL=your_database_url
DB_USERNAME=your_username
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
```

---

## 📈 Performance Improvements

* Optimized database queries and indexing
* Reduced unnecessary frontend re-renders
* Efficient API response handling

**Result:** ~40% improvement in API performance

---

## 🧪 Testing

* API testing with Postman
* Manual UI testing
* Role-based access verification

---

## 📌 Responsibilities

* Requirement analysis
* UI/UX decisions
* Backend development
* API design
* Database schema design
* Testing and deployment
* Ongoing maintenance

---

## 🌐 Live Demo

**Website:** https://steadwin.in

This is the production deployment of the application, built and maintained as part of a real startup environment.


## 📄 License

This project is for demonstration and portfolio purposes.
