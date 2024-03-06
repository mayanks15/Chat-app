import { IoMdSearch } from "react-icons/io";
import toast from "react-hot-toast";
import useGetConversations from "../../hooks/useGetConversations";
import { useConversationContext } from "../../context/ConversationContext";
import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [, conversations] = useGetConversations();
  const { setSelectedConversation } = useConversationContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <div className="">
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full w-full"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-circle bg-sky-500 text-white ml-auto">
          <IoMdSearch className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};
export default SearchInput;
