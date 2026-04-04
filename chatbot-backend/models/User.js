const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ["student", "faculty", "admin", "parent", "warden"] },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model("User", userSchema);
