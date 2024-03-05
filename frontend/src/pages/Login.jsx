// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-96 flex flex-col backdrop-blur-lg rounded-lg">
      <div className=" flex justify-center p-4 text-3xl font-bold space-x-2">
        <span>Login</span>
        <span className="text-blue-600">ChatApp</span>
      </div>
      <form className="px-8 pt-2 pb-8">
        <div className="flex flex-col">
          <label className="mb-1">Username</label>
          <input placeholder="Enter username" className="input input-bordered h-10"/>
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-1">Password</label>
          <input placeholder="Enter Password" className="input input-bordered h-10"/>
        </div>
        <div className="mt-4 mb-1 text-sm">
          <div>Dont have an account?</div>
          {/* <Link to="/log-in">Signup</Link> */}
        </div>
        <button className="btn btn-sm w-full ">Login</button>
      </form>
    </div>
  );
};
export default Login;
