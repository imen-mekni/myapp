const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/configcloudinary")
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "assetsformybloggingapp",
    public_id: (req, file) => {
      file.filename + "-" + Date.now() + "-" + Math.round(Math.random() * 1e9);
    },
  },
});

const config = multer({
  storage: storage,
});

module.exports = config



