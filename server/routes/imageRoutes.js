const mongoose = require("mongoose");
const Images = mongoose.model("images");

const imageRoutes = (app) => {
    app.get('/api/image', async (req, res) =>{
        const images = await Images.find();

        return res.status(200).send(images)
    })
}

module.exports = imageRoutes;