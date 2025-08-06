const Sample = require("../models/sample.model");
const Agent = require("../models/agent.model");

// Add a new sample
exports.addSample = async (req, res) => {
  try {
    const { sampleType, hospitalId, agentId, scheduledAt } = req.body;
    const sample = await Sample.create({
      sampleType,
      hospitalId,
      agentId,
      scheduledAt,
      status: "Pending"
    });
    res.status(201).json(sample);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark a sample as collected
exports.markCollected = async (req, res) => {
  try {
    const { id } = req.params;
    const sample = await Sample.findByIdAndUpdate(
      id,
      { status: "Collected", collectedAt: new Date() },
      { new: true }
    );
    if (!sample) return res.status(404).json({ msg: "Sample not found" });
    res.json(sample);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch all samples for an agent
exports.getSamplesByAgent = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.query;
    const filter = { agentId: id };
    if (status) filter.status = status;

    const samples = await Sample.find(filter)
      .populate("hospitalId", "name address")
      .sort({ scheduledAt: 1 });
    res.json(samples);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Report delay (Add-on feature)
exports.reportDelay = async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    const sample = await Sample.findByIdAndUpdate(
      id,
      {
        delayReported: {
          reason,
          reportedAt: new Date()
        }
      },
      { new: true }
    );
    if (!sample) return res.status(404).json({ msg: "Sample not found" });
    res.json({ msg: "Delay reported", sample });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
