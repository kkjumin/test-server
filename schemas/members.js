const { text } = require("express");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  birth: {
    type: String,
    required: true,
  },
  body: { height: String, weight: String },
  homeTown: { type: String },
  nickName: { type: Array },
});

module.exports = mongoose.model("Members", memberSchema);
