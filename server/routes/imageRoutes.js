const { query } = require('express');
const mongoose = require('mongoose');
const Images = mongoose.model('images');
const multer = require('multer');
const {
  GridFsStorage,
} = require('multer-gridfs-storage');

// multer file upload
const dataStorage = new GridFsStorage({
  url: process.env.DATABASE_CONNECTION_STRING,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg'];
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}--${
        file.originalname
      }`;
      return filename;
    }
    return {
      filename: `${Date.now()}--${
        file.originalname
      }`,
      metadata: req.body,
      bucketName: 'images',
      
    };
  },
});
const upload = multer({ storage: dataStorage });

const imageRoutes = (app) => {
  //@desc GET all images
  app.get('/api/images', async (req, res) => {
    const images = await Images.find();
    
    return res.status(200).send({
      total_images: images.length,
      images,
    });
  });

app.get('/api/images/search', async (req, res) => {
const keyword = req.query.keyword
const matchKeyword = new RegExp(keyword)
 const findImg = await Images.find({ metadata: { description: { $regex: matchKeyword }}})
console.log(matchKeyword)
console.log(findImg)

res.status(200).json(findImg)

// const keyword = req.query.keyword
// const query = Images.find({ description: 'warm'})
//  const doc = await query.exec()
//  doc.description
// query.getFilter()


// return res.send({
  
  // keyword
// })

})


  //@desc GET image by file
  app.get('/api/images/:filename', async (req, res) => {
    const { filename } = req.params;

    const gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: 'images'
   });
   let downloadStream = gridFSBucket.openDownloadStreamByName(filename);
    downloadStream.on("data", function (data) {
      return res.status(200).write(data);
    });
    downloadStream.on("error", function (err) {
      return res.status(404).send({ message: "Cannot download the Image!" });
    });
    downloadStream.on("end", () => {
      return res.end();
    });
  });

  //@desc POST create new image profile
  app.post(
    '/api/images',
    upload.single('image'),
    async (req, res) => {
      try {
        // console.log(req.file);
        // console.log('this is the body', req.body)
        const { filename } = req.file
       
        await Images.updateMany({filename}, {$set: {metadata: req.body}}, {upsert: true, new: true} );
        const results = await Images.findOne({filename})
      
          console.log('we found the image', results)
        res.status(201).json({
          success: true,
        });
      } catch (err) {
        res.status(400).json({ success: false });
      }
    }
  );

  //@desc modify image infomation - not working
  app.put(
    '/api/images/:id', 
    async (req, res, next) => {

      try{
      const id = req.params.id;

      const updateById = 
      await Images.findByIdAndUpdate(id, {$set: {metadata: req.body}});
     console.log({metadata: req.body})
      return res
        .status(202)
        .json({ success: true, updateById, });
      } catch (err) {
        res.status(400).json({ success: false })
      }
    }
  );


  //@desc DELETE image using id

  app.delete(
    '/api/images/:id',
    async (req, res, next) => {
      const id = req.params.id;

      const deleteImageById =
        await Images.findByIdAndDelete(id);

      return res.status(202).send({
        success: true,
        deleteImageById,
      });
    }
  );
};

module.exports = imageRoutes;
