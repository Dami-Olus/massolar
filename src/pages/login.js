import Image from "next/image";
import React from "react";
import { googleicon, installers } from "../../assets";

function login() {
  return (
    <div className="bg-white h-screen">
      {/*Header*/}
      <div className="flex justify-evenly items-center h-screen">
        <Image src={installers} alt="" />
        <div>
          <p className="text-black">Sign Up</p>
          <p className="text-[#707070]">
            It only takes a minute to create your account
          </p>
          <form action="" className="flex flex-col space-y-10">
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="border-solid border-2 border-gray-200-500 rounded mt-5 pt-2 pb-2 pl-2 pr-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border-solid border-2 border-gray-200-500 rounded mt-5 pt-2 pb-2 pl-2 pr-2"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="border-solid border-2 border-gray-200-500 rounded mt-5 pt-2 pb-2 pl-2 pr-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-solid border-2 border-gray-200-500 rounded mt-5 pt-2 pb-2 pl-2 pr-2"
            />
            <input type="checkbox" />
            <p>I agree to the Gridcrux Terms of Services and Privacy Policy </p>
            <button className="p-3 text-white bg-[#34A853] rounded">Signup</button>
            <button className="p-3 text-black border-solid border-2 border-gray-200-500 rounded">Continue with Google</button>
          </form>
          <p>Already have an account? Login</p>
        </div>
      </div>
    </div>
  );
}

export default login;
