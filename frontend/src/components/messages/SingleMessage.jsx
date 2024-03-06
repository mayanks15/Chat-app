import { useAuthContext } from "../../context/AuthContext";
import { useConversationContext } from "../../context/ConversationContext";
import extractTime from "../../utils/extractTime";

const SingleMessage = ({ message }) => {
  const formattedTime = extractTime(message.createdAt);

  const { selectedConversation } = useConversationContext();
  const {authUser} = useAuthContext();

  const fromMe = selectedConversation._id !== message.senderId;
  return (
    <div>
      <div className={` chat ${fromMe ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-8 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={fromMe ? authUser.profilePic : selectedConversation?.profilePic}
            />
          </div>
        </div>
        <div
          className={`chat-bubble text-white  ${fromMe ? "bg-blue-500" : ""} `}
        >
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {formattedTime}
        </div>
      </div>
    </div>
  );
};
export default SingleMessage;
