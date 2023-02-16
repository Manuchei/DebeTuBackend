import { Message } from "../models/message.js"

const findAll = async () => Message.find().limit(10)

const save = async (data) => {
    const newMessage = new Message(data)
    return await newMessage.save()
}
export {findAll, save}