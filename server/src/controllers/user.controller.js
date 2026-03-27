import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler( async(req, res) => {
    /*
        destructure req to get data
        validate data
        check if already registerd
        if yes -- redirect to login else continue
        check for image/videos 
        validate for required and format
        upload on cloudinary
        create user object
        put object in database 
        check for response
        return response -- remove refresh token and password from response
    */
   const { username, email, fullName, password } = req.body;
   console.log("data from req: ", username);
   
} )

export { registerUser };