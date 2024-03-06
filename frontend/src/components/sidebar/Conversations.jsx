import useGetConversations from "../../hooks/useGetConversations";
import SingleConversation from "./SingleConversation";

const Conversations = () => {
  const [loading, conversations] = useGetConversations();
  return (
    <div className="flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
				<SingleConversation
					key={conversation._id}
					conversation={conversation}
					lastIdx={idx === conversations.length - 1}
				/>
			))}
      {loading && <span className='loading loading-spinner mx-auto'></span>}
    </div>
  );
};
export default Conversations;
