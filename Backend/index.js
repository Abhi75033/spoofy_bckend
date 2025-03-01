import app from './app.js'
import connctectDB from './src/DB/Database.js'
import dotenv from 'dotenv'

dotenv.config({
    path:'./.env'
})

connctectDB()
.then(()=>{
app.listen(process.env.PORT||5000,()=>console.log(`Server started at PORT ${process.env.PORT}`))
}).catch((error)=>{
    console.log(error);
})