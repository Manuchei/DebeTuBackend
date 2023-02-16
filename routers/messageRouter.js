import { Router } from "express";
import * as messageControllers from '../controllers/messageControllers.js'

const messageRouter = Router()

//Listar todos los mensajes
messageRouter.get('/', messageControllers.findAll)
    
//Añadir un nuevo mensaje
messageRouter.post('/', messageControllers.save)

export default messageRouter
