# QuickPay Bank - Full Stack Auth System

This project is a full-stack banking authentication system with a React frontend and a Spring Boot backend.

## Prerequisites
- **Node.js** (v18+)
- **Java** (v17+)
- **Maven**
- **MySQL Server**

## Setup Instructions

### 1. Database Setup
1. Open your MySQL terminal/client.
2. Run the commands in `database_setup.sql`:
   ```sql
   CREATE DATABASE IF NOT EXISTS quickpay_db;
   ```

### 2. Backend Setup (Spring Boot)
1. Navigate to the `backend` folder.
2. Update `src/main/resources/application.properties` with your MySQL root password.
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```
   The backend will start on `http://localhost:8080`.

### 3. Frontend Setup (React)
1. Navigate to the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`.

## Features
- **Registration**: Full form with validation (Email, Password Match, and Required fields).
- **Security**: Password hashing using BCrypt.
- **CORS**: Configured to allow requests from the React frontend.
- **Professional UI**: Responsive design with a modern fintech aesthetic.
