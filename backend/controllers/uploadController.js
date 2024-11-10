import multer from "multer";
import cloudinary from "../config/cloudinaryConfig";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: { folder: "entertainment_platform", allowed_formats: ["jpg", "png"] },
});

const upload = multer({ storage });
export default { upload };
