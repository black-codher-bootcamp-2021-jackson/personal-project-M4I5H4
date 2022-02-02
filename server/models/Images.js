const mongoose = require("mongoose");
const { Schema } = mongoose;

const imagesSchema = new Schema({
  title: String,
  description: String,
  location: String,
});

mongoose.model("images", imagesSchema);