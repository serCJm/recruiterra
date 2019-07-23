const passport = require("passport");
const qs = require("querystring");

module.exports = function authRoutes(app) {
  app.get("/auth/google", function(req, res, next) {
    passport.authenticate("google", {
      scope: ["profile", "email"],
      state: req.query.type
    })(req, res, next);
  });

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: `/sign-up?${qs.stringify({
        err: "something went wrong please try again"
      })}`
    }),
    function(err, req, res, next) {
      console.log(err);
      if (err) {
        const encodedErr = qs.stringify({
          err: "please provide your user type"
        });

        return res.status(400).redirect(`/sign-up?${encodedErr}`);
      }
      return next();
    },
    (req, res) => {
      if (req.user.usertype === "employer") {
        res.redirect("/job-postings");
      } else if (req.user.usertype === "job seeker") {
        res.redirect("/my-resumes");
      }
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
