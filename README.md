# 🎓 EduSphere: Unified University Management & Student Support Platform

![React](https://img.shields.io/badge/Frontend-React.js%20(Vite)-blue)
![Node](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green)
![Database](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Auth](https://img.shields.io/badge/Auth-JWT%20%7C%20RBAC-orange)
![Deployment](https://img.shields.io/badge/Deployment-Vercel%20%7C%20Render-blueviolet)
![Status](https://img.shields.io/badge/Project-Production%20Ready-success)

---

## 📘 Overview

**EduSphere** is a centralized web-based platform designed to simplify and digitize university academic management and student support services. It integrates academic records, administrative workflows, communication channels, and student services into a single, secure, and role-based system.

The platform improves transparency, reduces manual workload, and enhances the overall experience for students, faculty, and administrators.

---

## ❗ Problem Statement

Most universities rely on multiple disconnected systems and informal communication methods for managing attendance, exams, results, scholarships, and mentoring. This fragmented approach results in delayed responses, lack of transparency, and inefficient administrative operations.

---

## 🧩 Key Features

### 👨‍🎓 Student Module
- **Secure Dashboard**: Profile management and academic overview.
- **Academic Tracking**: Subject-wise attendance, schedules, and result declaration.
- **Portals**: Access to internal marks, scholarship info, and internship opportunities.
- **Support**: Online grievance submission and academic guidance.

### 👩‍🏫 Faculty Module
- **Management Tools**: Attendance marking, internal marks uploading, and record management.
- **Analytics**: Student performance insights and academic advising tools.
- **Interaction**: Directly respond to student queries and mentorship requests.

### 🧑‍💼 Admin Module
- **RBAC**: Advanced user and role-based access control.
- **Communication**: Academic calendar and global notice board management.
- **Operations**: Workflow-based handling of student requests and system monitoring.

### 🤖 AI Chatbot
- **Instant Assistance**: Built-in AI assistant to help students with common queries, powered by OpenRouter.

---

## 🏗️ System Architecture

- **Frontend:** Role-based responsive dashboards built with **React** and **Vite**.
- **Backend:** Scalable RESTful APIs built with **Express (Node.js)**.
- **Database:** **MongoDB** for secure academic and administrative data storage.
- **Security:** **JWT**-based authentication with role-based logic.

---

## ⚙️ Technology Stack

- **Frontend**: React.js, Vite, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **AI Integration**: OpenRouter API
- **Authentication**: JsonWebToken (JWT), BcryptJS

---

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/vaibhavvaid14/EduSphere.git
   cd EduSphere
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Create a .env file with MONGO_URI, JWT_SECRET, and PORT
   npm start
   ```

3. **Chatbot Setup**
   ```bash
   cd ../chatbot-backend
   npm install
   # Create a .env file with OPENROUTER_API_KEY
   npm start
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   # Create a .env file with VITE_API_BASE_URL
   npm run dev
   ```

---

## 🌐 Deployment

The project is structured for seamless deployment across multiple platforms:

- **Frontend**: Optimized for [Vercel](https://vercel.com).
- **Backends**: Optimized for [Render](https://render.com) using the provided `render.yaml` blueprint.

For detailed instructions, see the [Deployment Guide](.gemini/antigravity/brain/a0fae8a9-5c36-4710-be29-0ae7a28d079c/deployment_guide.md).

---

## 👥 Team Members

| Name | Enrollment No. |
|------|----------------|
| Adeela Azeez | 2301010282 |
| Vaibhav Vaid | 2301010289 |
| Ashutosh Singh | 2301010293 |
| Satdev | 2301010298 |
| Himani Tyagi | 2301010300 |

---

## 📄 License

This project is developed for **academic purposes** and is intended for **educational use only**.

