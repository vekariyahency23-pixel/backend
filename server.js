const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const adminRoutes = require("./routes/adminRoutes");

app.use("/api/admin", adminRoutes);
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database Error:", err);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/inquiry", require("./routes/inquiryRoutes"));