import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express()

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))


app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(cookieParser())



// Imports

import UserRoutes from './src/Routes/user.routes.js'
import ProductRoutes from './src/Routes/Product.routes.js'
import cartRoutes from './src/Routes/carts.routes.js'
import OrdersRoutes from './src/Routes/order.routes.js'
// Setting the path
app.use('/api/v1/users',UserRoutes)
app.use('/api/v1/product',ProductRoutes)
app.use('/api/v1/cart',cartRoutes)
app.use('/api/v1/orders',OrdersRoutes)

export default app