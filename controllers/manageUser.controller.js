// src/controllers/manageUser.controller.js
const manageUserService = require("../services/manageUser.service");

exports.handleHasuraAction = async (req, res) => {
  try {
    // 1. Get arguments from Hasura Action
    const { input } = req.body; 
    
    // 2. Get Hasura Session Variables (Multi-tenant context)
    const sessionVars = req.body.session_variables || {};
    
    const actorInfo = {
      schoolId: sessionVars["x-hasura-school-id"],
      actorRole: sessionVars["x-hasura-role"]
    };

    if (!actorInfo.schoolId) {
      return res.status(400).json({ message: "Missing school context from Hasura" });
    }

    const result = await manageUserService.manageUserActionService(input, actorInfo);
    
    // 3. Return the exact shape defined in your Hasura Action Output
    return res.json(result); 
  } catch (error) {
    // Hasura expects a 400 error for business logic failures
    return res.status(400).json({ message: error.message });
  }
};