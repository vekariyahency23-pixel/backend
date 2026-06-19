const express = require("express");

const router = express.Router();

const Inquiry = require("../models/Inquiry");

/* ================= SAVE INQUIRY ================= */

router.post("/", async (req, res) => {

  try {

    const inquiry = new Inquiry(req.body);

    await inquiry.save();

    res.status(201).json({
      success: true,
      message: "Inquiry Submitted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

module.exports = router;