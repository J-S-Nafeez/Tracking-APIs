const Agent = require("../models/agent.model");

exports.getAgentById = async (req, res) => {
  try {
    const agent = await Agent.findById(req.params.id).select("-password");
    if (!agent) return res.status(404).json({ msg: "Agent not found" });
    res.json(agent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
