import { useConversationContext } from "../../context/ConversationContext";

const SingleConversation = ({conversation,lastIdx}) => {

  const {selectedConversation,setSelectedConversation} = useConversationContext();
  const isSelected = selectedConversation?._id===conversation._id;
  return (
    <>
    <div className={`flex hover:bg-sky-500 p-2 items-center ${isSelected ? "bg-sky-500" : ""}`} onClick={()=>{setSelectedConversation(conversation)}}>
      <div className="avatar online ">
        <div className="w-10 rounded-full">
          <img src={conversation.profilePic} alt="user avatar"/>
        </div>
      </div>
      <div className="font-bold text-gray-300 ml-3">{conversation.fullName}</div>
    </div>
    {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  );
};
export default SingleConversation;
