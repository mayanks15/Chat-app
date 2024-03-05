import { IoMdSearch } from "react-icons/io";
const SearchInput = ()=>{
return(
    <div className="">
        <form className="flex items-center gap-2">
            <input type="text" placeholder="Search..." className="input input-bordered rounded-full w-full"/>
            <button className="btn btn-circle bg-sky-500 text-white ml-auto"><IoMdSearch className="h-6 w-6"/></button>
        </form>
    </div>
)
}
export default SearchInput;