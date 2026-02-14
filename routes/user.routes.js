// src/routes/user.routes.js
const express = require("express");
const router = express.Router();
const manageUserController = require("../controllers/manageUser.controller");
const authMiddleware = require("../middleware/authMiddleware");

// Hasura Action Endpoint
// Note: Hasura calls are POST requests
router.post("/action", manageUserController.handleHasuraAction);

// Standard CRUD via Express if needed
// router.get("/", authMiddleware, manageUserController.someOtherFunction);

module.exports = router; // <--- MUST BE THIS