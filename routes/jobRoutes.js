const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const jobPostTemplate = require("../services/emailTemplates/jobPostTemplate");

const Job = mongoose.model("jobs");

module.exports = function jobRoutes(app) {
  app.get("/api/jobs/thanks", (req, res) => {
    res.send("Thank you for clicking");
  });

  app.post("/api/job", requireLogin, requireCredits, async (req, res) => {
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
    try {
      await mailer.send();
      await job.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
