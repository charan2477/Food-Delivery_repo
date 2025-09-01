# Delivery Food App

A full-stack web application for online food delivery, featuring user authentication, food browsing, cart management, order placement, and an admin panel for managing the platform.

## Features

- **User Features**:
  - User registration and login
  - Browse food items by category
  - Add items to cart
  - Place orders with payment integration (Stripe)
  - View order history

- **Admin Features**:
  - Add, edit, and remove food items
  - Manage orders
  - View user data

- **Backend Features**:
  - RESTful API for food, user, cart, and order management
  - JWT-based authentication
  - Image upload for food items
  - MongoDB database integration

## Tech Stack

- **Frontend**: React, Vite, React Router, Axios
- **Admin Panel**: React, Vite, React Router, Axios, React Toastify
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Multer, Stripe
- **Database**: MongoDB Atlas

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn
- MongoDB (local or Atlas account)
- Git

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/delivery-food-app.git
   cd delivery-food-app
   ```

2. **Backend Setup**:
   - Navigate to the Backend directory:
     ```bash
     cd Backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the Backend directory and add your environment variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```
     **Important**: Replace `your_mongodb_connection_string` with your actual MongoDB URI. Do not hardcode credentials in the code.
   - Start the backend server:
     ```bash
     npm run server
     ```
     The server will run on `http://localhost:1000`.

3. **Frontend Setup**:
   - Open a new terminal and navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```
     The frontend will run on `http://localhost:5173`.

4. **Admin Panel Setup**:
   - Open another terminal and navigate to the admin directory:
     ```bash
     cd admin
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the admin development server:
     ```bash
     npm run dev
     ```
     The admin panel will run on `http://localhost:5174` (or next available port).

## Usage

1. Ensure the backend server is running.
2. Access the user frontend at `http://localhost:5173` to browse food, register/login, add to cart, and place orders.
3. Access the admin panel at `http://localhost:5174` to manage food items and orders.
4. Use tools like Postman to test API endpoints directly.

## API Endpoints

- **Food**: `/api/food` (GET, POST for adding food)
- **User**: `/api/user` (POST for register/login)
- **Cart**: `/api/cart` (GET, POST for cart operations)
- **Order**: `/api/order` (GET, POST for orders)
- **Images**: `/images` (static files for uploaded images)

## Privacy and Security Notes

- **Database Credentials**: Ensure your MongoDB URI and other secrets are stored in `.env` and not committed to the repository. Add `.env` to your `.gitignore`.
- **Uploaded Files**: Review the `Backend/uploads/` directory for any sensitive content before uploading to GitHub.
- **Repository Visibility**: Consider making the repository private if it contains proprietary code or sensitive data.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.

## License

This project is licensed under the ISC License.
