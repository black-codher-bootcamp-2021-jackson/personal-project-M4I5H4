const mongoose = require("mongoose");
const { Schema } = mongoose;

const imagesSchema = new Schema({
 filename: String, 
//  metadata: Object,
//      decscription: String,
//      location: String,
//      theme: String
 
 
})

mongoose.model("images", imagesSchema, "images.files");
