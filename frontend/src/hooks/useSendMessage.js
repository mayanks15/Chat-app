import { useState } from "react";
import { useConversationContext } from "../context/ConversationContext";
import toast from "react-hot-toast";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation,allMessages,setAllMessages } = useConversationContext();
  const SendMessage = async (message) => {
    setLoading(true);
    try {
      const response = await fetch(`api/messages/send/${selectedConversation._id}`,{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({message:message})
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setAllMessages([...allMessages,data]);
    } catch (error) {
      toast.error(error.message);
    } finally{
        setLoading(false);
    }
  };

  return [loading,SendMessage];
};
export default useSendMessage;
