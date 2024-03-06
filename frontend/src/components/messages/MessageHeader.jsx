import { useConversationContext } from "../../context/ConversationContext";

const MessageHeader = ()=>{
    const {selectedConversation}= useConversationContext();
    return (
        <div className="flex bg-gray-600 pl-4 h-10 items-center">
            <div className="text-sm text-gray-400">To:</div>
            <div className="ml-2 text-black font-semibold">{selectedConversation.fullName}</div>
        </div>
    )
}
export default MessageHeader;