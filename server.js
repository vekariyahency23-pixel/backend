const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(cors({
    origin:"*"
}
    
));
app.use(express.json());

/* ================= DATABASE CONNECTION ================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Database Error:", err);
  });

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

/* ================= ROUTES ================= */
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const inquiryRoutes = require("./routes/inquiryRoutes");

app.use("/api/inquiry", inquiryRoutes);

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});