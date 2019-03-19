const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Job = mongoose.model("jobs");

module.exports = function jobRoutes(app) {
  app.post("/api/job", requireLogin, requireCredits, (req, res) => {
    const { name, title, description, skills, tags } = req.body;

    const job = new Job({
      name,
      title,
      description,
      skills: skills.split(",").map(skill => skill.trim()),
      tags: tags.split(",").map(tag => tag.trim()),
      _user: req.user.id,
      lastUpdated: Date.now()
    });
  });
};
