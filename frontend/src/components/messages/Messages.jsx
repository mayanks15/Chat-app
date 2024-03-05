import SingleMessage from "./SingleMessage";

const Messages= ()=>{
    return(
        <div className="flex flex-col px-1 py-4 overflow-auto ">
            <SingleMessage/>
            <SingleMessage/>
            <SingleMessage/>
            <SingleMessage/>
        </div>
    )
}
export default Messages;