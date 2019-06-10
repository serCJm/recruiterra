const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  usertype: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["employer", "job seeker"]
  },
  googleId: String,
  credits: {
    type: Number,
    default: function() {
      return this.usertype === "employer" ? 3 : undefined;
    }
  }
});

mongoose.model("users", userSchema);
