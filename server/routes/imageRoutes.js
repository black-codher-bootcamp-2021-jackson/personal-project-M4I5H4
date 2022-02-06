const mongoose = require("mongoose");
const Images = mongoose.model("images");

const imageRoutes = (app) => {
  //@desc GET all images
  app.get("/api/images", async (req, res) => {
    const images = await Images.find();

    return res.status(200).send(images);
  });

  //@desc GET single image by id
  app.get("/api/images/:id", async (req, res) => {
    const { id } = req.params;

    const getImagebyId = await Images.findById(
      id
    );
    return res
      .status(200)
      .send({ err: false, getImagebyId });
  });

  //@desc POST create new image profile
  app.post(
    "/api/images",
    async (req, res, next) => {
      try {
        const addImage = await Images.create(
          req.body
        );
        res
          .status(201)
          .json({
            success: true,
            data: addImage,
          });
      } catch (err) {
        res.status(400).json({ success: false });
      }
    }
  );

  //@desc modify image infomation - not working
  app.put(
    "/api/images/:id",
    async (req, res, next) => {
      try {
        const modifyImage =
          await Images.findByIdAndUpdate(
            req.params.id,
            req.body
            //  { new: true, runValidators: true}
          );
        if (!modifyImage) {
          return res.status(400)
            .json({ success: false });
        }
        res
          .status(200)
          .json({
            success: true,
            data: modifyImage,
          });
      } catch (err) {
        res.status(400).json({ success: false });
      }
    }
  );

  //@desc DELETE image using id

  app.delete('/api/images/:id', async (req, res, next) =>{
      try {
          const deleteImage = await Images.findByIdAndDelete(
              req.params.id
          );
          res.status(200).json({ success: true, data: {} })
      } catch (err) {
         res.status(400).json({ success:false }) 
      }
  })
};

module.exports = imageRoutes;
