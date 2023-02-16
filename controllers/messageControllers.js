import * as messageService from "../services/messagesService.js"

const findAll = async (req, res) =>{
    try {
        const messages = await messageService.findAll ()
        res.status(200).json(messages)
        
    } catch (error) {
        res.status(500).json({message: 'error al obtener los mensajes'+error})
        
    }
}

const save = async(req, res) => {
    try{

        const data = req.body

        const messageSave = await messageService.save(data)
        res.status(200).json(messageSave)
    }catch(err){
        res.status(500).json({message: 'error al obtener el nuevo mensaje'+err})
    
    }

}

export {findAll, save}

