const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireJobSeekerRole = require("../middlewares/requireJobSeekerRole")

module.exports = function jobSeekerRoutes(app) {
  app.post("/api/resumes/create", requireLogin, requireJobSeekerRole, (req, res) => {
    res.send(req.user);
  });
};
