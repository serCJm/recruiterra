const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");

const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const requireEmployerRole = require("../middlewares/requireEmployerRole");
const requireJobOwner = require("../middlewares/requireJobOwner");
const Mailer = require("../services/Mailer");
const jobPostTemplate = require("../services/emailTemplates/jobPostTemplate");

const Job = mongoose.model("jobs");

module.exports = function employerRoutes(app) {
  app.get(
    "/api/job-postings",
    requireLogin,
    requireEmployerRole,
    async (req, res) => {
      const jobs = await Job.find({ _user: req.user.id }).select({
        applicants: 0
      });
      res.send(jobs);
    }
  );

  app.get("/api/jobs/:jobId/:choice", (req, res) => {
    res.send("Thank you for clicking");
  });

  app.post("/api/jobs/webhooks", (req, res) => {
    const p = new Path("/api/jobs/:jobId/:choice");
    _.chain(req.body)
      .map(({ url, email }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, ...match };
        }
      })
      .compact()
      .uniqBy("email", "jobId")
      .each(({ jobId, email }) => {
        Job.updateOne(
          {
            _id: jobId,
            applicants: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $set: { "applicants.$.responded": true },
            lastApplicant: new Date()
          }
        )
          .exec()
          .catch(err => console.log(err));
      })
      .value();
    res.send({});
  });

  app.post(
    "/api/job",
    requireLogin,
    requireEmployerRole,
    requireCredits,
    async (req, res) => {
      const { name, title, description, skills, tags } = req.body;

      const job = new Job({
        name,
        subject: title,
        description,
        skills: skills.split(",").map(skill => skill.trim()),
        tags: tags.split(",").map(tag => tag.trim()),
        applicants: [{ email: "nassdropp@gmail.com", responded: false }],
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
    }
  );

  app.post(
    "/api/delete-job",
    requireLogin,
    requireEmployerRole,
    requireJobOwner,
    async (req, res) => {
      await Job.deleteOne({ _id: req.body.id });
      const jobs = await Job.find({ _user: req.user.id }).select({
        applicants: 0
      });
      res.send(jobs);
    }
  );
};
