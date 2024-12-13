const cloudinary = require("./../config/cloudinary");

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);
    return {
      url: result.secure_url,
      publicId: result.public_d,
    };
  } catch (error) {
    console.error("Error uploading image to cloudinary", error);
    throw new Error("Error uploading image to cloudinary");
  }
};

module.exports = {
  uploadToCloudinary,
};
