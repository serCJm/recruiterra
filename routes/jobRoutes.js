const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const jobPostTemplate = require("../services/emailTemplates/jobPostTemplate");

const Job = mongoose.model("jobs");

module.exports = function jobRoutes(app) {
  app.post("/api/job", requireLogin, requireCredits, (req, res) => {
    const { name, title, description, skills, tags } = req.body;

    const job = new Job({
      name,
      subject: title,
      description,
      skills: skills.split(",").map(skill => skill.trim()),
      tags: tags.split(",").map(tag => tag.trim()),
      _user: req.user.id,
      lastUpdated: Date.now()
    });
    const applicants = [{ email: "nassdropp@gmail.com", responded: false }];
    const mailer = new Mailer(job, applicants, jobPostTemplate(job));
    mailer.send();
  });
};
