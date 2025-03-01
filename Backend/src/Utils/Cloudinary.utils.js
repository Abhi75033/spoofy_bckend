import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import { ApiError } from "./ApiError.utils.js";
import { ApiResPonse } from "./ApiResponse.utils.js";
// import exp from "constants";


cloudinary.config({
    cloud_name:'docipx6d7',
    api_key:634473276878828,
    api_secret:'IF3--vZSaLkd51nU0HAZhOByD9w'
})

const UploadOnCloudinary = async(localpath)=>{
try {
     if(!localpath) return null
    
     const response = await cloudinary.uploader.upload(localpath,{
        resource_type:'auto'
     })
     fs.unlinkSync(localpath)
     return response
} catch (error) {
    throw (error)
}

}
const DeleteOnCloudinary = async(Public_id)=>{
   try {
     if(!Public_id){
         throw new ApiError(404,'Public_id is invalid')
     }
     

     const response = await cloudinary.uploader.destroy(Public_id)

     return response.status(200).json(
        new ApiResPonse(200,response,'Data has been deleted successFully')
     )
     
   } catch (error) {
    return new ApiError(500,'Internal Server Error while deleting the data')
   }
}

export {UploadOnCloudinary,DeleteOnCloudinary}