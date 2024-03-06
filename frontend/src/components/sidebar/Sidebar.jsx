import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
const Sidebar= ()=>{
    return(
        <div className="flex flex-col p-4 border-r border-slate-500 w-72">
            <SearchInput/>
            <div className=" divider px-3"></div>
            <Conversations/>
            <LogoutButton/>
        </div>
    )
}
export default Sidebar;