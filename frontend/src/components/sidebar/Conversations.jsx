import SingleConversation from "./SingleConversation";

const Conversations=()=>{
    return(
        <div className="flex flex-col px-4 overflow-auto">
            <SingleConversation/>
            <SingleConversation/>
            <SingleConversation/>

        </div>
    )
}
export default Conversations;