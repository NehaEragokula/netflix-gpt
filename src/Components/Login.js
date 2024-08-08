import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleHandleEvent = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div style={{ position: "relative" }}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg"
          alt="bg_image"
          style={{ width: "100%" }}
        />
        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 bg-opacity-80 bg-black p-12">
          <h1 className="text-white mb-4 font-bold text-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="mb-4">
            {!isSignInForm && (
              <input
                type="text"
                className="w-full bg-gray-700 hover:border-none p-2 mb-2 opacity-100"
                placeholder="Full Name"
              />
            )}
            <input
              type="email"
              className="w-full bg-gray-700 hover:border-none p-2 mb-2 opacity-100"
              placeholder="Email or phone number"
            />
            <input
              type="password"
              className="w-full bg-gray-700 hover:border-none p-2 opacity-100"
              placeholder="Password"
            />
          </div>
          <button className="w-full bg-red-700 text-white py-2 rounded cursor-pointer">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-white">
                Remember me
              </label>
            </div>
            <p className="text-white">Need help?</p>
          </div>
          <div className="mt-12">
            <p className="text-white mb-2 text-xs">
              {isSignInForm ? "New to Netflix? " : "Already a user? "}
              <span className="font-bold" onClick={toggleHandleEvent}>
                {isSignInForm ? "Sign up now" : "Sign In"}
              </span>
            </p>
            <p className="text-white text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span className="text-blue-700 font-bold">Learn more</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
