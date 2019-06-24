module.exports = function requireEmployerRole(req, res, next) {
  if (req.user.usertype !== "employer") {
    return res.status(401).send({ error: "Invalid User Type For This Route" });
  }
  return next();
};
