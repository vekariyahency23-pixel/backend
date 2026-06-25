const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { dashboard } = require("../controllers/adminController");

/* ================= ADMIN DASHBOARD ================= */

router.get(
  "/dashboard",
  authMiddleware,
  dashboard
);

module.exports = router;