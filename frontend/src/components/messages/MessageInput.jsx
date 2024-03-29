import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [loading, sendMessage] = useSendMessage();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 mt-auto mb-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {!loading ? <BsSend /> : <span className="loading loading-spinner" />}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
