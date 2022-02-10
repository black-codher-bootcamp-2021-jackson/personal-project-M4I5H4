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
      bucketName: 'images',
    };
  },
});
const upload = multer({ storage: dataStorage });

const imageRoutes = (app) => {
  //@desc GET all images
  app.get('/api/images', async (req, res) => {
    const images = await Images.find();
    console.log(images)
    
    return res.status(200).send({
      total_images: images.length,
      images,
    });
  });


  //@desc GET single image by id
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
        console.log(req.body);
        // const addImage = await Images.create(
        //   req.body
        // );
        //delete 80/81 later - metadata needs to be part of the image object
        // const results = await Images.find();
        // const lastItemInArray = results[results.length -1]
        // const itemWithData = {...lastItemInArray, _doc:{metadata: {
        //   description: req.body.description,
        //   loaction: req.body.location,
        //   theme: req.body.theme}}}
        //   console.log(itemWithData)
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
      const id = req.params.id;

      const modifyImageData =
        await Images.findByIdAndUpdate(
          id,
          req.body
        );

      return res
        .status(202)
        .send({ success: true, modifyImageData });
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
        err: false,
        deleteImageById,
      });
    }
  );
};

module.exports = imageRoutes;
