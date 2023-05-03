import React from "react";
import {
  BellAlertIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import profilepic from "../../../assets/images/profilepic.jpeg";

function Header() {
  return (
    <div className="flex justify-between bg-white">
      <div>logo</div>
      <div className="flex justify-center items-center space-x-5 mr-10 p-2">
        <div className="flex space-x-5 mr-5">
          <ChatBubbleLeftIcon className="text-black h-10" />
          <BellAlertIcon className="text-black h-10" />
        </div>

        <div className="bg-black h-10 w-1"></div>

        <div>
          <p className="text-gray-500">Hello!</p>
          <p className="text-black w-44">Adedamola Olusakin</p>
        </div>
        <Image
          src={profilepic}
          alt=""
          height={40}
          width={40}
          className="rounded-full"
        />
        <ChevronDownIcon className="text-black h-10" />
      </div>
    </div>
  );
}

export default Header;
