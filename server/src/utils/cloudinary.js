import {v2 as cloudinary} from "cloudinary";
import fs from "fs/promises";
import { ApiError } from "./apiError";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async(localFilePath) => {
    try {
        if(!localFilePath) throw new ApiError(400, "File path missing"); // returning null might not be the best option

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            folder: "videoTube",
        })

        console.log("file uploaded successfully", response.url);

        // File uploaded so cleanup;
        try {
            await fs.unlink(localFilePath);
            console.log("cleanup successful");
        } catch {
            console.log("cleanup failed");
        }

        return response; // better to send just the url -- sending full response for dev purposes only

    } catch (error) {
        // cleanup on failure
        if (localFilePath) {
            try {
                await fs.unlink(localFilePath);
            } catch {
                console.log("cleanup failed");
            }
        }
        throw error; // managed by global error handler middleware 
    }
}

export { uploadOnCloudinary }