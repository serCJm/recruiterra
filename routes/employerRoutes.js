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
const splitAndTrim = require("../services/helpers/splitAndTrim");

const Job = mongoose.model("jobs");
const Resume = mongoose.model("resumes");

Resume.on("index", function(err) {
  if (err) {
    console.error("User index error: %s", err);
  } else {
    console.info("User indexing complete");
  }
});

module.exports = function employerRoutes(app) {
  app.get(
    "/api/jobs/job-postings",
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
    "/api/jobs/create",
    requireLogin,
    requireEmployerRole,
    requireCredits,
    async (req, res) => {
      let { name, title, description, skills, tags } = req.body;
      skills = splitAndTrim(skills);
      tags = splitAndTrim(tags);

      let matches;

      matches = await Resume.find(
        {
          $text: {
            $search: skills.concat(tags, splitAndTrim(description)).join(" ")
          }
        },
        { score: { $meta: "textScore" } }
      ).sort({ score: { $meta: "textScore" } });

      console.log(matches);

      const job = new Job({
        name,
        title,
        description,
        skills,
        tags,
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
    "/api/jobs/delete",
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

  app.post(
    "/api/jobs/update",
    requireLogin,
    requireEmployerRole,
    requireJobOwner,
    async (req, res) => {
      const { name, title, description, skills, tags } = req.body.values;
      const updatedValues = {
        name,
        title,
        description,
        skills: skills.split(",").map(skill => skill.trim()),
        tags: tags.split(",").map(tag => tag.trim()),
        lastUpdated: Date.now()
      };
      try {
        await Job.findOneAndUpdate({ _id: req.body.id }, updatedValues, {
          new: true
        });
        res.send(req.user);
      } catch (e) {
        console.log(e);
      }
    }
  );
};
