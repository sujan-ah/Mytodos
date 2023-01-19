const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  newProject: {
    type: String,
  },
  oldProject: {
    type: String,
  },
  javaVedio: {
    type: String,
  },
  engSpoken: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
