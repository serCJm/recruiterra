const mongoose = require("mongoose");
const { Schema } = mongoose;

const resumeSchema = new Schema({
  resumeName: String,
  email: String,
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

resumeSchema.index({ summary: "text", skills: "text", tags: "text" });

mongoose.model("resumes", resumeSchema);
