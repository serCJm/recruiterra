const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicantSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = applicantSchema;
