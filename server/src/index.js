import dotenv from "dotenv";
import connecDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connecDb()
.then(()=>{
    app.on("error", ()=>{
        console.log("db connected but error while communicating with db", error);
    });

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server started at port ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("connection with db failed", err);
})

/*
import express from "express"
const app = express()

;( async()=>{ // this is an iffy format--> executes the code immideately
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", ()=>{ // on error if database connected yet application unable to communicate
            console.log("application unable to communicate to db");
            throw error; // throwing exits the process can use process.exit() too
        })
    } catch (error) {
        console.log("error in database connection: ", error);
        throw error 
    }
})()
*/