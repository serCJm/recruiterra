const mongoose = require("mongoose");
const Resume = mongoose.model("resumes");
module.exports = async function requireResumeOwner(req, res, next) {
  try {
    let resume = await Resume.findById(req.body.resumeId);
    if (req.user.id !== resume._user.toString()) {
      return res.status(401).send({ error: "You do not own this resume." });
    }
    return next();
  } catch (e) {
    return res.status(500).send({ error: "Something went wrong." });
  }
};
