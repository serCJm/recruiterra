const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireJobSeekerRole = require("../middlewares/requireJobSeekerRole");

const Resume = mongoose.model("resumes");

module.exports = function jobSeekerRoutes(app) {
  app.post(
    "/api/resumes/create",
    requireLogin,
    requireJobSeekerRole,
    async (req, res) => {
      const {
        resumeName,
        fullName,
        summary,
        education,
        skills,
        experience,
        tags
      } = req.body;

      const resume = new Resume({
        resumeName,
        fullName,
        summary,
        education: splitAndTrim(education),
        skills: splitAndTrim(skills),
        experience: splitAndTrim(experience),
        tags: splitAndTrim(tags),
        _user: req.user.id,
        lastUpdated: Date.now()
      });
      try {
        await resume.save();
        res.send(req.user);
      } catch (err) {
        res.status(500).send(err);
      }
    }
  );
};

// HELPERS
function splitAndTrim(arrOfStrgs) {
  return arrOfStrgs
    .split(/[,;]+/)
    .map(string => string.trim())
    .filter(Boolean);
}
