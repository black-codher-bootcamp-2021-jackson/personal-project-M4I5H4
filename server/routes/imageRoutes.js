const mongoose = require("mongoose");
const Images = mongoose.model("images");

const imageRoutes = (app) => {
  //@desc GET all images
  app.get("/api/images", async (req, res) => {
    const images = await Images.find();

    return res
      .status(200)
      .send({
        total_images: images.length,
        images,
      });
  });

  //@desc GET single image by id
  app.get("/api/images/:id", async (req, res) => {
    const { id } = req.params;

    const getImagebyId = await Images.findById(
      id
    );
    return res
      .status(200)
      .send({ success: true, getImagebyId });
  });



  //@desc POST create new image profile
  app.post("/api/images", async (req, res) => {
    try {
      const addImage = await Images.create(
        req.body
      );
      res.status(201).json({
        success: true,
        addImage,
      });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  });

  //@desc modify image infomation - not working
  app.put(
    "/api/images/:id",
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
    "/api/images/:id",
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
