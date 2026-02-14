const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

// Import Routes
const authRoutes = require("../routes/index");
// const registrationRoutes = require("./routes/");
const userRoutes = require("../routes/user.routes"); // This contains the Manage User Action

// Initialize the Express application
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev")); 
app.use(cors());

/**
 * Standard CORS and Header management.
 * Note: Since you're using 'cors()' above, some of this is redundant, 
 * but keeping the header overrides for specific Hasura compatibility.
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// --- API Routes ---

// Public & Session Routes (Login, Refresh, etc.)
app.use("/api/v1/auth", authRoutes);

// Registration Routes (School Onboarding)
// app.use("/api/v1/registration", registrationRoutes);

// Manage User Routes (Hasura Actions & User CRUD)
// This is where 'manage-user/action' will live
app.use("/api/v1/users", userRoutes);

// --- Default Routes ---

app.get("/", (req, res) => {
  res.send("School Management System API is running!");
});

// Handle invalid routes
app.all("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

module.exports = app;