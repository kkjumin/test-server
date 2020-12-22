const { text } = require("express");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const imageSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Images", imageSchema);
