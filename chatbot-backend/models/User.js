const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ["student", "faculty", "admin", "parent", "warden"] },
  department: { type: String },
  semester: { type: Number },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model("User", userSchema);
