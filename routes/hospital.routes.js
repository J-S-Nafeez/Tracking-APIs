const express = require("express");
const router = express.Router();
const { getAllHospitals } = require("../controllers/hospital.controller");
const Hospital = require("../models/hospital.model");
const auth = require("../middleware/auth.middleware");

// GET all hospitals (protected)
router.get("/", auth, getAllHospitals);

// ✅ NEW: POST /api/hospitals - Add new hospital (protected)
router.post("/", auth, async (req, res) => {
  try {
    const { name, address, contact } = req.body;
    const newHospital = new Hospital({ name, address, contact });
    await newHospital.save();
    res.status(201).json(newHospital);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
