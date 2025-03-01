import mongoose from "mongoose"
import DB_NAME from '../Utils/Constant.utils.js'

const  connctectDB = async()=>{
try {
    const Connection = await mongoose.connect(`${process.env.MONGO_URI}${DB_NAME}`)
    console.log(`MongoDB Connected ${Connection.connection.host}`)
} catch (error) {
    console.log(`MongoDB Connction Failed ${error}`)
    process.exit(1)
}
}

export default connctectDB