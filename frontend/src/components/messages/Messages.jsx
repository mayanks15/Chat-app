import useGetMessages from "../../hooks/useGetMessages";
import SingleMessage from "./SingleMessage";

const Messages = () => {
  const [loading, allMessages] = useGetMessages();
  const renderedMessages = allMessages.map((message) => {
    return <SingleMessage key={message._id} message={message} />;
  });
  return (
    <div className="flex flex-col px-1 py-4 overflow-auto ">
      {renderedMessages}
      {!loading && allMessages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};
export default Messages;
