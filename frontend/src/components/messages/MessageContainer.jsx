import { useEffect } from "react";
import { useConversationContext } from "../../context/ConversationContext";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
const MessageContainer = () => {
  const { selectedConversation,setSelectedConversation } = useConversationContext();

  useEffect(()=>{
    //clean up fnc
    return ()=>setSelectedConversation(null);
  },[setSelectedConversation])
  return (
    <div className="flex flex-col 'md:min-w-[450px] w-96">
      {selectedConversation ? (
        <>
          <MessageHeader />
          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 user ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
