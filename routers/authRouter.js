import { Router } from "express";
import * as authController from '../controllers/authController.js'

const authRouter = Router()
authRouter.post('/signIn', authController.signIn)

export default authRouter
