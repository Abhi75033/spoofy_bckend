import { Router } from "express";
import { jwtVerify } from "../Middleware/Auth.middleware.js";
import { AddProduct, Carts, CreateOrder, CurrentUserAddress, DeletefromCart,
     HandlePayment,
     ItemsInCart, getProduct, getProduct2, getProduct3,
      getProductById, userAddres } from "../Controller/Product.controller.js";
import { uplod } from "../Middleware/Multer.middleware.js";

const router = Router()

router.route('/addproduct').post(jwtVerify,uplod.array('image',10), AddProduct)

router.route('/getlimiPro').get(getProduct)
router.route('/getlimiPro2').get(getProduct2)
router.route('/getlimiPro3').get(getProduct3)

// Cart routes



router.route('/:id').get(getProductById)
router.route('/addtocart/:id').post(jwtVerify,Carts)

router.route('/remove/:id').delete(DeletefromCart)


// Address routes


router.route('/saveaddress').post(jwtVerify,userAddres)
router.route('/').get(jwtVerify,CurrentUserAddress)


// Payment

router.route('/checkout-payment-page').post(HandlePayment)




export default router