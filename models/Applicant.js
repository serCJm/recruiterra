const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicantSchema = new Schema({
  email: { type: String, default: "" },
  apply: { type: Boolean, default: false }
});

module.exports = applicantSchema;
