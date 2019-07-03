const mongoose = require("mongoose");
const { Schema } = mongoose;

const resumeSchema = new Schema({
  resumeName: String,
  fullName: String,
  summary: String,
  education: [String],
  skills: [String],
  experience: [String],
  tags: [String],
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  lastUpdated: Date,
  status: { type: Boolean, default: true }
});

mongoose.model("resumes", resumeSchema);
