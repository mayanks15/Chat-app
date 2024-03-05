const SingleConversation = () => {
  return (
    <>
    <div className="flex hover:bg-sky-500 p-2 items-center ">
      <div className="avatar online ">
        <div className="w-10 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="font-bold text-gray-300 ml-3">John Doe</div>
      <div className=" ml-auto">😂</div>
    </div>
    <div className='divider my-0 py-0 h-1' />
    </>
  );
};
export default SingleConversation;
