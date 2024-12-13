const Image = require("../models/Image");
const { uploadToCloudinary } = require("../helpers/cloudinaryHelper");
const uploadImageController = async (req, res) => {
  try {
    // check if image is uploaded

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image.",
      });
    }
    // upload image to cloudinary
    const { url, public_Id } = await uploadToCloudinary(req.filePath);

    // save image to database
    const newlyUploadedImage = new Image({
      url,
      public_Id,
      uploadedBy: req.userInfo.userId,
    });

    await newlyUploadedImage.save();

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully.",
      image: newlyUploadedImage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
};

module.exports = { uploadImageController };
