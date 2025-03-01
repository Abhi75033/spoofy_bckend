import { Router } from "express";
import { jwtVerify } from "../Middleware/Auth.middleware.js";
import { GetAllOrder } from "../Controller/Product.controller.js";

const router = Router()

router.route('/').get(jwtVerify,GetAllOrder)

export default router