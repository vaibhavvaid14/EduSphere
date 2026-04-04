const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  subject: String,
  date: Date,
  time: String,
  type: String,
});

module.exports = mongoose.model("Exam", examSchema);
