const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  subject: { type: String, required: true },
  examType: { type: String, enum: ["internal", "midterm", "final"], required: true },
  marks: { type: Number, required: true },
  totalMarks: { type: Number, default: 100 },
  grade: { type: String, default: "" },
  semester: { type: Number, required: true }
});

module.exports = mongoose.model("Result", resultSchema);
