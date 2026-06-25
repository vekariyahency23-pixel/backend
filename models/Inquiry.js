const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({

   productName: String,
   
  name: String,

  email: String,

  description: String,

});

module.exports = mongoose.model(
  "Inquiry",
  inquirySchema
);