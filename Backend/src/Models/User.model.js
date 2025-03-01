import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const UserShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    },
    Password:{
        type:String,
        required:true
    },
},{timestamps:true})

// Before saving the password
UserShema.pre('save',async function(){
if(!this.isModified('Password')) return
    this.Password = await bcrypt.hash(this.Password,10)
})

// Checking the password 
UserShema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.Password)
}

UserShema.methods.genrateAccessToken = async function(){
    return jwt.sign({
        _id : this._id
    },
    process.env.ACCESS_TOKEN_SECRECT,
    {
      expiresIn: process.env.ACCESS_TOKEN_SECRECT_EXPIRY 
    }
)
}

export const User = mongoose.model('User',UserShema)

 