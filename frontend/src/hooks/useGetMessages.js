import { useEffect, useState,useCallback } from "react";
import toast from "react-hot-toast";
import { useConversationContext } from "../context/ConversationContext";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation,allMessages,setAllMessages } = useConversationContext();
  
  const getMessages = useCallback(
      async () => {
          setLoading(true);
          try {
              const response = await fetch(`/api/messages/${selectedConversation._id}`);
              const data = await response.json();
              if (data.error) {
                  throw new Error(data.error);
                }
                setAllMessages(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        },[selectedConversation._id,setAllMessages]);
    
    useEffect(()=>{
        if(selectedConversation?._id) getMessages();
    },[getMessages, selectedConversation?._id])
    
    return [loading, allMessages];
};
export default useGetMessages;
