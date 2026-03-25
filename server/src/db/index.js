import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connecDb = async () => {
    try {
        const connection_instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`database connected successfully, DB HOST: ${connection_instance.connection.host}`); //just to know the host 
    } catch (error) {
        console.error("Error while connecting to database", error);
    }
}

export default connecDb;
