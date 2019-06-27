module.exports = function requireJobSeekerRole(req, res, next) {
  if (req.user.usertype !== "job seeker") {
    return res.status(401).send({ error: "Invalid User Type For This Route" });
  }
  return next();
};