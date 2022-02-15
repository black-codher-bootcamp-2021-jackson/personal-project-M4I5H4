const mongoose = require("mongoose");
const { Schema } = mongoose;

const imagesSchema = new Schema({
 filename: String
 
})

mongoose.model("images", imagesSchema, "images.files");
// mongoose.model("fs.files", imagesSchema);