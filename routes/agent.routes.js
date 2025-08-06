// routes/agent.routes.js
const express = require("express");
const router = express.Router();
const { getAgentById } = require("../controllers/agent.controller");
const auth = require("../middleware/auth.middleware");

router.get("/:id", auth, getAgentById);

module.exports = router;


