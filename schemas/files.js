const { text } = require("express");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const imageSchema = new Schema({
  imgName: {
    type: String,
    required: true,
  },
  imgFile: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Images", imageSchema);
