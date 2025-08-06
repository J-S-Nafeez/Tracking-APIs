// routes/sample.routes.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  addSample,
  markCollected,
  getSamplesByAgent,
  reportDelay
} = require("../controllers/sample.controller");

router.post("/", auth, addSample);
router.patch("/:id/collect", auth, markCollected);
router.get("/agent/:id", auth, getSamplesByAgent);
router.post("/:id/report-delay", auth, reportDelay);

module.exports = router;
