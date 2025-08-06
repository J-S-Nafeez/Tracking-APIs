// models/sample.model.js
const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema({
  sampleType: { type: String, required: true, enum: ["Blood", "Urine", "Swab"] },
  hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital", required: true },
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: "Agent", required: true },
  status: { type: String, default: "Pending", enum: ["Pending", "Collected"] },
  scheduledAt: { type: Date, required: true },
  collectedAt: { type: Date },
  delayReported: {
    reason: { type: String },
    reportedAt: { type: Date }
  }
}, { timestamps: true });

module.exports = mongoose.model("Sample", sampleSchema);
