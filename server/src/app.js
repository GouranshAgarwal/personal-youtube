import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN, // do not use wildcard(*) with credentails=true as it will fail due to browser security rules.
    credentials:true, //very important for systems with auth and logins allows cookies and headers in the request (must allow at frontend too)
}));

app.use(express.json({ // express provides many features
    limit: "16kb" //limits the max size of json
}));

app.use(express.urlencoded({ // handles the url encoded form data like space = %20 etc
    extended: true,  // nested objects and arrays in form data in url
    limit: "16kb",
}));

app.use(express.static("public")); // serves static files like images, css, js etc from the dir specified relative to root, automatically handles content type detection and caching

app.use(cookieParser()); // handles cookies safely with encreption only server can add or remove

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).json({
        success: false,
        message: err.message || "something went wrong",
    });
})


// import routers 

import userRouter from "./routes/user.routes.js";


// routes declaration
app.use("/api/v1/users", userRouter);

export { app }