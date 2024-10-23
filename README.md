# React App for Spring Boot JWT Authentication

A React frontend integrated with a Spring Boot backend that handles user authentication using JWT (JSON Web Token). This project allows users to log in to the system, receive a JWT token, and use it to access protected resources.

## Table of Contents

- [React App for Spring Boot JWT Authentication](#react-app-for-spring-boot-jwt-authentication)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
    - [API Endpoints](#api-endpoints)
    - [JWT Workflow](#jwt-workflow)
    - [Running the Application](#running-the-application)

## Features

- **JWT Authentication**: Login and receive JWT tokens.
- **Token Storage**: Store the JWT in local storage.
- **Protected Routes**: Access secure resources using JWT tokens.
- **User Login Form**: Authenticate users via a login form.
- **Logout Functionality**: Clear JWT from local storage and log the user out.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Node package manager, comes with Node.js.
- **Spring Boot Application with JWT Authentication**: Ensure the backend API is running and configured to accept JWT-based login requests.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/react-jwt-auth.git
    cd react-jwt-auth
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following:
    ```bash
    REACT_APP_API_URL=http://localhost:8005  # Spring Boot API base URL
    ```

## Project Structure

``` bash
src/
|-- components/
|   |-- Login.jsx        # Component for user login
|   |-- Dashboard.jsx        # Protected component accessible after login
|   |-- ProtectedRoute.jsx   # Higher-order component for protected routes
|-- App.js                  # Main application component
|-- index.js                # Entry point for the React app

```

### API Endpoints
- POST /auth/login: Login with email and password to receive JWT token.
- GET /api/protected: Access protected resources with JWT token.

### JWT Workflow
1. User submits login credentials through the login form.
2. The frontend sends a POST request to the /auth/login endpoint in the Spring Boot backend.
3. Upon successful authentication, the backend returns a JWT token.
4. The token is stored in local storage.
5. When accessing protected resources, the token is attached to the Authorization header of the HTTP request.

### Running the Application
1. Start the React app:
    ``` bash
    npm start
    ```
    
