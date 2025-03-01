import { ApiError } from "../Utils/Apierror.utils.js";
import { asyncHandler } from "../Utils/AsyncHandler.utils.js";
import jwt from 'jsonwebtoken'
import {User} from '../Models/User.model.js'

const jwtVerify = asyncHandler(async(req,res,next)=>{
    try {
        const Token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

       

        if(!Token){
            throw new ApiError(401,"unAuthorized Access")
        }

        const decode = jwt.verify(Token,process.env.ACCESS_TOKEN_SECRECT)

        const user = await User.findById(decode._id).select('-Password')

        if (!user) {
            throw new ApiError(404,'Invalid AccessToken')
        }

        req.user = user
        next()

    } catch (error) {
        throw error
    }
})

export {jwtVerify}