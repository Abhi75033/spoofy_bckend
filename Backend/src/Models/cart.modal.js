import mongoose, { Schema } from "mongoose";

const CartSchema = new mongoose.Schema({
    size:{
        type:String,
        required:true
    },
    ProductId:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    },
    Added_By:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

export const Cart = mongoose.model('Cart',CartSchema)