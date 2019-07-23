const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const helmet = require("helmet");
const compression = require("compression");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);
// DEV DB DEBUG
if (process.env.NODE_ENV === "production") {
  mongoose.set("debug", true);
}
require("./models/User");
require("./models/Job");
require("./models/Resume");

require("./services/passport");

const app = express();
app.use(compression());
app.use(helmet());
// NOTE: remember to remove secure and change domain for development
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
    secure: process.env.NODE_ENV === "production" ? true : false,
    domain:
      process.env.NODE_ENV === "production"
        ? "https://protected-escarpment-75476.herokuapp.com"
        : null
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/employerRoutes")(app);
require("./routes/jobSeekerRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
