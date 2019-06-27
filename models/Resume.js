const mongoose = require("mongoose");
const { Schema } = mongoose;

const resumeSchema = new Schema({
  resumeName: String,
  fullName: String,
  summary: String,
  education: [{ place: String, period: String }],
  skills: [String],
  experience: [{ place: String, period: String }],
  tags: [String]
});

mongoose.model("resumes", resumeSchema);
