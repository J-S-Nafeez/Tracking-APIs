const jwt = require("jsonwebtoken");
const Agent = require("../models/agent.model");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const existing = await Agent.findOne({ email });
    if (existing) return res.status(400).json({ msg: "Agent already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const agent = await Agent.create({ name, email, password: hashedPassword, phone });

    const token = jwt.sign({ id: agent._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(201).json({ token, agent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const agent = await Agent.findOne({ email });
    if (!agent) return res.status(400).json({ msg: "Agent not found" });

    const isMatch = await bcrypt.compare(password, agent.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: agent._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(200).json({ token, agent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
