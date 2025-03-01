import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        
    },
    Gender:{
        type:String
       
    },
    Stock:{
        type:Boolean,
        
    },
    Size:{
        type:[
            {type:String}
        ],
    },
    Color:{
        type:[
            {type:String}
        ]
    },
    Discounted_Price:{
        type:Number
    },
    Price:{
        type:Number,
       
    },
    Cloth_Type:{
        type:String
    },
    image:{
        type:[
            {type:String}
          ]
       
    },
    Owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'    
    
    }
},{timestamps:true})


export const Product = mongoose.model('Product',ProductSchema)