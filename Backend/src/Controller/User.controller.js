import {User} from '../Models/User.model.js'
import jwt from 'jsonwebtoken'
import {asyncHandler} from '../Utils/AsyncHandler.utils.js'
import {ApiError} from '../Utils/ApiError.utils.js'
import {ApiResPonse} from '../Utils/ApiResponse.utils.js'
import {UploadOnCloudinary} from '../Utils/Cloudinary.utils.js'

const genrateAccessToken =async(UserId)=>{
    try {
        const user = await User.findById(UserId)
        const accessToken = await user.genrateAccessToken()
        const data = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRECT)
        return accessToken
    } catch (error) {
        throw error
    }
}


const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,Username,Password}=req.body

    if (!name || !email || !Username || !Password) {

        throw new ApiError(401,'All feilds are mandateory')
    }

    const ExistedUserName = await User.findOne({Username})

    if(ExistedUserName){
        throw new ApiError(403,'UserName is already taken by someOne')
    }

    const ExistedUser = await User.findOne({email})

    if(ExistedUser){
        throw new ApiError(403,'Email is already ragisterd with us')
    }

    let avatarLoacalpath;

    if(req.files && Array.isArray(req.files.avatar) && req.files.avatar.length > 0){
        avatarLoacalpath = req.files.avatar[0]?.path
    }

    const avatar = await UploadOnCloudinary(avatarLoacalpath)

    const user = await User.create({
        name,
        email,
        Username,
        Password,
        avatar: avatar?.url || ""
    })

    return res.status(201).json(
        new ApiResPonse(201,{user},'User ragisterd')
    )
})





const Login = asyncHandler(async(req,res)=>{
    const {Username,Password}= req.body
    
    console.log(Username,Password);

    if(!Username || !Password){
        throw new ApiError(404,'All feilds are mandatory')
    }

    const user = await User.findOne({Username})

    if(!user){
        throw new ApiError(404,'Username is invalid')
    }

    const isPasswordCorrect = await user.isPasswordCorrect(Password)

    if(!isPasswordCorrect){
        throw new ApiError(401,'Invalid Password')
    }

    const accessToken = await genrateAccessToken(user._id)

    const Option= {
        httpOnly:true,
        secure:true
    }

    return res.cookie('accessToken',accessToken,Option)
    .json(
        new ApiResPonse(200,{user},'user LogedIn Successfully')
    )
})


const Logout = asyncHandler(async(req,res)=>{
    const Option ={
        httpOnly:true,
        secure:true
    }
   return res.clearCookie('accessToken',Option).json(
    new ApiResPonse(200,{},'User Logout SuccessFully')
   )
})

const Authme = asyncHandler(async(req,res)=>{
    
    return res.status(200).json(
        new ApiResPonse('User is logedIn')
    )
})


export {registerUser,Login,Logout,Authme}