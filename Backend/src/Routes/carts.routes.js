import { Router } from "express";
import { jwtVerify } from "../Middleware/Auth.middleware.js";
import { Claercart, CreateOrder, GetAllAddress, GetAllOrder, ItemsInCart, getProductById } from "../Controller/Product.controller.js";

const router = Router()

router.route('/cart').get(jwtVerify,ItemsInCart)
router.route('/:id').get(getProductById)

router.route('/createorder').post(jwtVerify,CreateOrder)

router.route('/').delete(jwtVerify,Claercart).get(GetAllAddress)

// router.report('/orders').get(jwtVerify,GetAllOrder)




export default router