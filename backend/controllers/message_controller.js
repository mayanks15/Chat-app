import Conversation from "../models/conversation_model.js"
import Message from "../models/message_model.js"

export const sendMessage = async(req,res)=>{
    try {
        const {message} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id;

        // Conversation
        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })
        if(!conversation){
            conversation= await Conversation.create({
                participants:[senderId,receiverId]
            })
        }

        // Message
        const newMessage = await  Message.create({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        
        // save data in database
        await Promise.all([conversation.save(), newMessage.save()]);

        //response
        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessage Controller", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};