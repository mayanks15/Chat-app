import { createContext, useContext, useState } from "react";

const ConversationContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useConversationContext = () => {
  return useContext(ConversationContext);
};

export function ConversationContextProvider({ children }) {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [allMessages,setAllMessages]=useState([]);
  return (
    <ConversationContext.Provider value={{selectedConversation,setSelectedConversation,allMessages,setAllMessages}}>{children}</ConversationContext.Provider>
  );
}
