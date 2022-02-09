require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require('multer');


// IMPORT YOUR SCHEMAS HERE
require("./models/Images"); //This is just an example. Don't forget to delete this

const app = express();

// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) =>{
//     cb(null, 'location of file it is going to')
//   },
//    filename: (req, file, cb) => {
//      cb(null, Date.now() + '--' + file.originalname);};
// });

// const upload = multer({storage: fileStorageEngine });

// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());

// IMPORT YOUR API ROUTES HERE
// Below is just an example. Don't forget to delete it. 
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
const imageRoutes = require("./routes/imageRoutes"); 
imageRoutes(app)
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
