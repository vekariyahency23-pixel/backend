const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Inquiry received" });
});

module.exports = router;