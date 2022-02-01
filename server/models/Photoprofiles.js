const mongoose = require("mongoose");
const { Schema } = mongoose;

const photoProfilesSchema = new Schema({
  id: String,
  title: String,
  image: { data: Buffer, contentType: String },
  description: String,
  location: String,
  tags: String,
});

mongoose.model("photoProfiles", photoProfilesSchema);