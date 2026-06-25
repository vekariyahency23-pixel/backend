const express = require("express");
const router = express.Router();

const {
  saveInquiry,
} = require("../controllers/inquiryController");

/* ================= ROUTES ================= */

router.post("/", saveInquiry);

module.exports = router;