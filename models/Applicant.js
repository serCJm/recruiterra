const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicantSchema = new Schema({
  email: { type: String, default: "" },
  responded: { type: Boolean, default: false }
});

module.exports = applicantSchema;
