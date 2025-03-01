import mongoose, { Schema } from "mongoose";
import { mongo } from "mongoose";

const AddressSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Mobile_No:{
        type:String,
        required:true
    },
    Pincode:{
        type:String,
        
    },
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Street_Address:{
        type:String,
        required:true
    },
    Area:{
        type:String,
        required:true
    },
    Landmark:{
        type:'String',
        required:true
    },
    Address_Type:{
        type:'String'
        
    },
    Owner:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})


export const Address = mongoose.model('Address',AddressSchema)