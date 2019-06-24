const mongoose = require("mongoose");
const Job = mongoose.model("jobs");
module.exports = async function requireJobOwner(req, res, next) {
  try {
    let job = await Job.findById(req.body.id);
    if (req.user.id !== job._user.toString()) {
      return res.status(401).send({ error: "You do not own this job." });
    }
    return next();
  } catch (e) {
    return res.status(500).send({ error: "Something went wrong." });
  }
};
