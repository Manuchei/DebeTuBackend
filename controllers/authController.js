import * as usersServices from '../services/usersServices.js'
import jwt from 'jsonwebtoken' 


async function signIn(req, res){
    const {email, password} = req.body

    const logger = await usersServices .findByEmail(email)
    if(!logger)
    return res.status(400).json({meesage: 'Usuario o contraseña incorrectos'})

    const validPassword = await logger.comparePassword(password)
    if(!validPassword)
    return res.status(400).json({meesage: 'Usuario o contraseña incorrectos'})

    const token = jwt.sign({
        chiste: 'ultimo que se subio al arca de Noe? delfin',
        _id: logger._id,
        email: logger.email,
        name: logger.name,
        exp: Math.floor(Date.now()/1000) + 60 * 60 * 300
    }, process.env.SECRET_TOKEN)


    res.status(200).json({token})

    }

    export {signIn}

    
