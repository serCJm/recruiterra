// keys.js - keys to return depending on environment
if (process.env.NODE_ENV === "production") {
  // in production - return prod set of keys
  module.exports = require("./prod");
} else {
  // in dev - return dev set of keys
  module.exports = require("./dev");
}
