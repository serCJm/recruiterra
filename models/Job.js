const mongoose = require("mongoose");
const { Schema } = mongoose;
const ApplicantSchema = require("./Applicant");

const jobSchema = new Schema({
  name: String,
  subject: String,
  description: String,
  skills: [String],
  tags: [String],
  applicants: [ApplicantSchema],
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  lastUpdated: Date,
  lastApplicant: Date
});

mongoose.model("jobs", jobSchema);
