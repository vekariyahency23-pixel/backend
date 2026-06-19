const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({

  name: String,

  email: String,

  description: String,

});

module.exports = mongoose.model(
  "Inquiry",
  inquirySchema
);