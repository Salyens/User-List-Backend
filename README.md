# User List Management System - Backend

## Introduction
This is the backend for the User List Management System, built to support a comprehensive interface for user management, including authentication, registration, and user status updates. It is designed to handle complex operations like user blocking, unblocking, deletion, and more.

## Features
- **User Authentication**: Secure user login process with JWT token generation and bcrypt for password hashing.
- **Registration**: New user registration with validation checks for name, email, and password.
- **User List Management**: Fetch all users with sorting, update user status (block/unblock), and delete users.
- **Error Handling**: Consistent error handling across different endpoints to ensure a smooth user experience.

## Technologies
- Node.js with Express
- MongoDB with Mongoose for database management
- Bcrypt for password encryption
- JSON Web Tokens (JWT) for secure authentication
- Cors for handling cross-origin requests

