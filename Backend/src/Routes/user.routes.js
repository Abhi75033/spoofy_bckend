import { Router } from "express";
import { registerUser,Login, Logout, Authme } from "../Controller/User.controller.js";
import {jwtVerify} from '../Middleware/Auth.middleware.js'

const router = Router()

router.route('/ragister').post(registerUser)

router.route('/login').post(Login)

router.route('/logout').post(jwtVerify,Logout)

router.route('/checkauth').post(jwtVerify,Authme)

export default router