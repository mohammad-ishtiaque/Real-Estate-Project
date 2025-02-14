# Real Estate Project: Full-Stack Web Application

This project is a full-stack web application for real estate management, built using the MERN stack (MongoDB, Express.js, React, and Node.js). It provides user authentication, property listings, and profile management functionalities.

The application is divided into two main parts: a client-side React application and a server-side Express.js API. The client-side application handles the user interface and interactions, while the server-side API manages data persistence and business logic.

Key features of this project include:
- User authentication (sign up and sign in)
- Property listings and search functionality
- User profile management
- Responsive design using Tailwind CSS
- RESTful API for data management

## Repository Structure

```
.
├── api/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── Pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
└── package.json
```

### Key Files:
- `api/index.js`: Entry point for the Express.js server
- `client/src/main.jsx`: Entry point for the React application
- `client/src/App.jsx`: Main React component defining routes
- `package.json`: Project configuration and dependencies for the server
- `client/package.json`: Project configuration and dependencies for the client

### Important Integration Points:
- `api/routes/`: API endpoints for user and authentication operations
- `client/src/Pages/`: React components for different pages/routes
- `api/models/user.model.js`: Mongoose schema for user data

## Usage Instructions

### Installation

Prerequisites:
- Node.js (v14 or later)
- MongoDB (v4 or later)

Steps:
1. Clone the repository
2. Install server dependencies:
   ```
   npm install
   ```
3. Install client dependencies:
   ```
   cd client
   npm install
   ```
4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGO=your_mongodb_connection_string
   ```

### Getting Started

1. Start the server:
   ```
   npm run dev
   ```
2. In a separate terminal, start the client:
   ```
   cd client
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173`

### Configuration Options

- Server port: The server runs on port 3000 by default. You can change this in `api/index.js`.
- Database: Configure your MongoDB connection string in the `.env` file.
- Client proxy: The development server proxies API requests to `http://localhost:3000`. You can modify this in `client/vite.config.js`.

### Common Use Cases

1. User Registration:
   - Navigate to the Sign Up page
   - Fill in the required fields (username, email, password)
   - Submit the form to create a new account

2. User Authentication:
   - Navigate to the Sign In page
   - Enter your credentials
   - Upon successful authentication, you'll be redirected to your profile page

3. Viewing Property Listings:
   - Navigate to the Home page to see available property listings

### Testing & Quality

To run tests (when implemented):
```
npm test
```

### Troubleshooting

1. MongoDB Connection Issues:
   - Problem: Server fails to start with a MongoDB connection error
   - Solution: 
     1. Check that MongoDB is running on your system
     2. Verify the connection string in your `.env` file
     3. Ensure your IP address is whitelisted if using Atlas

2. Client-side API Calls Failing:
   - Problem: React app cannot communicate with the API
   - Solution:
     1. Check that both client and server are running
     2. Verify the proxy settings in `client/vite.config.js`
     3. Check browser console for CORS errors

3. Debugging Server:
   - Enable verbose logging by setting `DEBUG=express:*` environment variable before starting the server
   - Check `api/index.js` for the location of error handling middleware

4. Performance Optimization:
   - Monitor API response times and database query performance
   - Use React DevTools to identify unnecessary re-renders in the client application

## Data Flow

The application follows a typical client-server architecture for data flow:

1. User interacts with the React frontend
2. React components make API calls to the Express.js backend
3. Express routes handle the requests and interact with the MongoDB database via Mongoose models
4. The server processes the data and sends a response back to the client
5. React updates the UI based on the received data

```
[User] <-> [React Frontend] <-> [Express.js API] <-> [MongoDB]
```

Important technical considerations:
- API requests are proxied in development to avoid CORS issues
- User authentication state should be managed carefully between client and server
- Sensitive operations should always be validated on the server-side