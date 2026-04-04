const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: String,
  department: String,
  category: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Notice", noticeSchema);
