const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");


router.get(

  "/dashboard",

  authMiddleware,

  (req, res) => {
        if (req.user.role !== "admin") {

      return res.status(403).json({
        message: "Admin Access Only",
      });

    }

    res.json({
      message: "Protected Route",
      user: req.user,
    });

  }

);


module.exports = router;
