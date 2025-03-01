import mongoose, { Schema } from "mongoose";

const OrderSchema = new mongoose.Schema({
    Product:[
        {
            type: Object,
            required: true
        }
    ],
    Orderd_By:{
        type:Schema.Types.ObjectId,
        ref:'User'    
    
    }
},{timestamps:true})


export const Order = mongoose.model('Order',OrderSchema)