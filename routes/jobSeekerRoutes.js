const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireJobSeekerRole = require("../middlewares/requireJobSeekerRole");
const requireResumeOwner = require("../middlewares/requireResumeOwner");

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
        await Resume.updateMany({ _user: req.user.id }, { status: false });
        await resume.save();
        res.send(req.user);
      } catch (err) {
        res.status(500).send(err);
      }
    }
  );
  app.get(
    "/api/resumes/resume-list",
    requireLogin,
    requireJobSeekerRole,
    async (req, res) => {
      const resumes = await Resume.find({ _user: req.user.id });
      // .select({
      //   applicants: 0
      // });
      res.send(resumes);
    }
  );

  app.post(
    "/api/resumes/delete",
    requireLogin,
    requireJobSeekerRole,
    requireResumeOwner,
    async (req, res) => {
      await Resume.deleteOne({ _id: req.body.resumeId });
      const resumes = await Resume.find({ _user: req.user.id });
      res.send(resumes);
    }
  );

  app.post(
    "/api/resumes/update",
    requireLogin,
    requireJobSeekerRole,
    requireResumeOwner,
    async (req, res) => {
      const {
        resumeName,
        fullName,
        summary,
        education,
        skills,
        experience,
        tags
      } = req.body.values;
      const updatedValues = {
        resumeName,
        fullName,
        summary,
        education: splitAndTrim(education),
        skills: splitAndTrim(skills),
        experience: splitAndTrim(experience),
        tags: splitAndTrim(tags),
        lastUpdated: Date.now(),
        status: true
      };
      try {
        await Resume.updateMany({ _user: req.user.id }, { status: false });
        await Resume.findOneAndUpdate(
          { _id: req.body.resumeId },
          updatedValues,
          {
            new: true
          }
        );
        res.send(req.user);
      } catch (e) {
        console.log(e);
      }
    }
  );

  app.post(
    "/api/resumes/update-status",
    requireLogin,
    requireJobSeekerRole,
    requireResumeOwner,
    async (req, res) => {
      try {
        await Resume.updateMany({ _user: req.user.id }, { status: false });
        await Resume.findByIdAndUpdate(req.body.resumeId, { status: true });
        const resumes = await Resume.find({ _user: req.user.id });
        // .select({
        //   applicants: 0
        // });
        res.send(resumes);
      } catch (e) {
        console.log(e);
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
