import {v2 as cloudinary} from "cloudinary"
import { config } from "dotenv";

  config()
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_PRIVACY_DB,
    api_key:process.env.CLOUDINARY_PRIVACY_API_KEY,
    api_secret: process.env.CLOUDINARY_PRIVACY_PRIVAT_KEY
})



export default cloudinary;