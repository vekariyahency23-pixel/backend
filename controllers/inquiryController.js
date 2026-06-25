const Inquiry = require("../models/Inquiry");

/* ================= SAVE INQUIRY ================= */

exports.saveInquiry = async (req, res) => {
  console.log("INQUIRY HIT:", req.body);

  try {
    const inquiry = new Inquiry(req.body);

    await inquiry.save();

    res.status(201).json({
      success: true,
      message: "Inquiry Submitted Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};