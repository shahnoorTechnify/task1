import React, { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
const Login = () => {
  const [forget, setforget] = useState(false);
  return (
    <div className=" w-full min-h-screen items-center flex flex-col justify-center bg-[#0E959E]">
      <div className="m-auto flex rounded-xl gap-5 w-[90vw] p-5 md:h-[80vh] bg-gray-200 justify-start shadow-2xl ">
        <div className=" max-sm:hidden w-1/2 items-center justify-start">
          <img
            src="./logoW.png"
            alt="image"
            className=" object-contain w-full h-full rounded-3xl"
          />
        </div>
        <div className="  p-5 max-sm:p-1 items-center flex flex-col gap-2 max-sm:w-full w-1/2">
          <div className=" flex flex-col gap-2 md:mt-5 p-5 items-center">
            <img
              src="./logoW.png"
              width={200}
              className=" hidden max-sm:block"
            />
            <h1 className=" font-bold text-center text-3xl text-black">
              Welcome Back
            </h1>
            <p className=" text-black font-semibold text-lg text-center">
              Please Log in to begin using TechnifyWorld Management System for
              <span className=" font-bold "> TWMSPART001</span>, or you can
              <a href="#" className=" ml-1 underline hover:text-blue-800">
                enter a different company ID.
              </a>{" "}
              <br></br> Both your username and password are{" "}
              <span className=" font-bold">case-sensitive</span>.
            </p>
          </div>

          <form className=" w-full flex flex-col gap-5">
            <div className=" flex flex-col gap-2">
              <label className=" font-bold text-black">Username</label>
              <div className=" flex gap-2 items-center">
                <input
                  type="text"
                  className=" w-full md:h-12 rounded-xl p-2"
                  placeholder=" Enter Username"
                />
                <FaRegQuestionCircle className=" text-black text-xl" />
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <label className=" font-bold text-black">Password</label>
              <div className=" flex gap-2 items-center">
                <input
                  type="password"
                  className=" w-full md:h-12 rounded-xl p-2"
                  placeholder=" Enter Password"
                />
                <FaRegQuestionCircle className=" text-black text-xl" />
              </div>
            </div>
            <a className=" flex justify-end" href="/forgetpass">
              <span className="md:font-semibold underline font-medium hover:underline max-sm:font-light hover:text-blue-800  text-black">
                Forget Password?
              </span>
            </a>
            <button className=" shadow-2xl  relative hover:bg-[#0E959E] inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-white">
              <span className="relative font-bold hover:bg-black hover:text-white w-full px-5 py-2.5 transition-all ease-in duration-75 text-black  dark:bg-[#0E959E] rounded-md">
                Login
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
