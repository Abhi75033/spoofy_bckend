import { ApiError } from '../Utils/ApiError.utils.js'
import { ApiResPonse } from '../Utils/ApiResponse.utils.js'
import {asyncHandler} from '../Utils/AsyncHandler.utils.js'
import {UploadOnCloudinary} from '../Utils/Cloudinary.utils.js'
import {Product} from '../Models/Product.model.js'
import { Cart } from '../Models/cart.modal.js'
import { Address } from '../Models/Address.model.js'
import { Order } from '../Models/Order.model.js'
import Stripe from 'stripe'

const stripe = new Stripe('sk_test_51PXj5VEr6OXv0wrzsmpUfUafNPOdRIwUDbX11tUvOSLA6ozV6DlLzeQqr1DByejVFeILXe5qV77y5OdzGaYYyE3K00u0nmjlNG')

const AddProduct = asyncHandler(async(req,res)=>{
    const {name,Description,Category,Gender,Discounted_Price,Price,Color,Size,Stock,Cloth_Type} = req.body


    if (!name && !Description  && !Gender && !Discounted_Price && !Price) {
        return res.status(500).json(
            {message:'All Feilds are required'}
        )
    }

    const imageLocalPath = req.files.map((file)=>file.path)


    if(!imageLocalPath){
        throw new ApiError(404,'Please Provide atleat one image')
    }

    const resp = imageLocalPath.map(async(image)=>{
        return await UploadOnCloudinary(image)
    })
    

    const images = await Promise.all(resp)


    if (!resp) {
        throw new ApiError(500,'Image upload failed')
    }

const Products = await Product.create({
    name,
    Description,
    Category,
    Gender,
    Stock,
    Size,
    Color,
    Discounted_Price,
    Price,
    Cloth_Type,
    image:images.map((image)=>image.url),
    Owner:req.user._id
})

    return res.status(201).json(
        new ApiResPonse(201,{Products},'Product Created SuccessFully')
    )

})

const getProduct = asyncHandler(async(req,res)=>{
    const limit = 10
    const resp = await Product.find().limit(limit)

    return res.status(200).json(
       {data:resp}
    )
})


const getProduct2 = asyncHandler(async(req,res)=>{
    const limit = 20
    const resp = await Product.find().limit(limit)

    return res.status(200).json(
       {data:resp}
    )
})

const getProduct3 = asyncHandler(async(req,res)=>{
    const limit = 2
    const resp = await Product.find().limit(limit)

    return res.status(200).json(
       {data:resp}
    )
})

const getProductById=asyncHandler(async(req,res)=>{
    const {id} = req.params

    if(!id){
        throw new ApiError(404,'Id not found')
    }

    const product = await Product.findById(id)

    if(!product){
        throw new ApiError(404,'product not found')
    }

    return res.status(200).json(
        {data:product}
    )
})

const Carts = asyncHandler(async(req,res)=>{
    const{size} =req.body
    const {id} = req.params

   

    if(!size){
        throw new ApiError(404,'size is missing')
    }

    const queryvalues = {ProductId:id}
    const queryvalues1 = {Added_By:req.user._id}

    const AlredyInCartProduct = await Cart.findOne(queryvalues)

    const AlredyInCartUser = await Cart.find(queryvalues1)
  
   if (AlredyInCartProduct && AlredyInCartUser) {
    throw new ApiError(403,'Item is already in your Cart')
   }
    
    

    const Carts = await Cart.create({
        size,
        ProductId:id,
        Added_By:req.user._id
    })

    if(!Carts){
        throw new ApiError(500,'Error Occoured While createing the cart')
    }

    console.log(Carts);


    return res.status(201).json(
        new ApiResPonse(201,{Carts},'cart Created')
    )
})

const ItemsInCart = asyncHandler(async(req,res)=>{
    
    const query = {Added_By:req.user._id}

    const hasItem = await Cart.find(query)

    if(!hasItem){
        throw new ApiError(404,'Zero Item in cart')
    }
    

    return res.status(200).json(
        {message:hasItem}
    )
})


const DeletefromCart = asyncHandler(async(req,res)=>{
    const {id} = req.params

    
  
const deleted = await Cart.findOneAndDelete({ProductId:id})
console.log(deleted);
    return res.status(200).json(
        new ApiResPonse(200,{deleted},'Item delted')
    )
})




// Address Controller


const userAddres= asyncHandler(async(req,res)=>{

    const {name,Mobile_No,Pincode,City,State,Street_Address,Area,Landmark} = req.body
   

    if(!name || !Mobile_No || !Pincode || !City || !State || !Street_Address || !Landmark){
        throw new ApiError(404,'All feilds are mandateory')
    }
    
    const Addresses = await Address.create({
        name,
        Mobile_No,
        City,
        State,
        Street_Address,
        Landmark,
        Area,
        Pincode,
        Owner: req.user._id
    })

    if(!Addresses){
        throw new ApiError(500,'Someing went wrong while saving user Address')
    }

    return res.status(200).json(
        new ApiResPonse(201,{Address},'Address saved successfully')
    )

})

const CurrentUserAddress = asyncHandler(async(req,res)=>{
    const Query = {Owner:req.user._id}

    const address = await Address.find(Query)

    return res.status(200).json(
        new ApiResPonse(200,{address},"Address founded SuccessFully")
    )
})


// Payment

const HandlePayment = asyncHandler(async(req,res)=>{
    const cart = req.body

    const lineItem = cart.Products.map((item)=>({
        price_data:{
            currency:'inr',
            product_data:{
                name:item.name,
                description:item.Description,
                images:[item.image[0]]
            },
            unit_amount:item.Price*100
        },
        quantity:1
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItem,
        mode:'payment',
        success_url:"http://localhost:5173/payment/success",
        cancel_url:"http://localhost:5173/payment/failure"

    }) 

   
    
    return res.json({id:session.id})
})

const CreateOrder = asyncHandler(async(req,res)=>{
    
    const Query = {Added_By:req.user._id}

    const cartItem = await Cart.find(Query)

    const CreateOrders = await Order.create({
        Product:cartItem,
        Orderd_By:req.user._id
    })
   

return res.status(201).json(
    new ApiResPonse(201,{CreateOrder},'Order Created successFully')
)

})
const Claercart = asyncHandler(async(req,res)=>{
    
    const Query = {Added_By:req.user._id}

    const deleted = await Cart.deleteMany(Query)

return res.status(201).json(
    new ApiResPonse(201,{deleted},'cart is cleard')
)

})


const GetAllAddress = asyncHandler(async(req,res)=>{

    const address = await Address.find()

    return res.status(200).json(
        new ApiResPonse(200,{address},'Address found successfully')
    )
})


const GetAllOrder = asyncHandler(async(req,res)=>{
    const Query = {Orderd_By:req.user._id}

    const orders = await Order.findOne(Query)

    return res.status(200).json(
        {data:orders}
    )
})






export {
    AddProduct
    ,getProduct
    ,getProduct2
    ,getProductById
    ,Carts,ItemsInCart,
    DeletefromCart
    ,getProduct3,
    userAddres,
    CurrentUserAddress,
    HandlePayment,
    CreateOrder,
    Claercart,
    GetAllAddress,
    GetAllOrder
}