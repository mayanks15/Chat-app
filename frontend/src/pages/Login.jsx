import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [loading,login]=useLogin();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const handleSubmit= async(event)=>{
    event.preventDefault();
    await login(inputs);
  }
  return (
    <div className="w-96 flex flex-col backdrop-blur-lg rounded-lg">
      <div className=" flex justify-center p-4 text-3xl font-bold space-x-2">
        <span>Login</span>
        <span className="text-blue-600">ChatApp</span>
      </div>
      <form className="px-8 pt-2 pb-8" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="mb-1">Username</label>
          <input
            placeholder="Enter username"
            className="input input-bordered h-10"
            onChange={(e) => {
              setInputs({ ...inputs, username: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-1">Password</label>
          <input
          type="password"
            placeholder="Enter Password"
            className="input input-bordered h-10"
            onChange={(e) => {
              setInputs({ ...inputs, password: e.target.value });
            }}
          />
        </div>
        <div className="flex mt-4 mb-1 text-sm space-x-2">
          <div>Dont have an account?</div>
          <Link to="/signup" className="text-blue-700 underline">
            Signup
          </Link>
        </div>
        <button className="btn btn-sm w-full">{loading? <span className=" loading loading-spinner"/> : "Login"}</button>
      </form>
    </div>
  );
};
export default Login;
