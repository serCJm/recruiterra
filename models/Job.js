const mongoose = require("mongoose");
const { Schema } = mongoose;
const ApplicantSchema = require("./Applicant");

const jobSchema = new Schema({
  name: String,
  title: String,
  description: String,
  skills: [String],
  tag: [String],
  applicants: [ApplicantSchema],
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  lastUpdated: Date,
  lastApplicant: Date
});

mongoose.model("jobs", jobSchema);
