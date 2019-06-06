module.exports = function requireLogin(req, res, next) {
  if (!req.user) {
    return res.status(401).send({ error: "You Must Log In!" });
  }
  next();
};
