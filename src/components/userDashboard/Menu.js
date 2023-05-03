import { HomeIcon } from "@heroicons/react/24/outline";
import React from "react";

function Menu() {
  return (
    <div style={{fontWeight:"700"}}className="text-black px-10 py-5 bg-white h-screen">
      <ul className="space-y-8">
        <li className="flex items-center">
          <span className="mr-2">
            <HomeIcon className="h-6 w-6" />
          </span>
          Home
        </li>
        <li className="flex items-center">
          <span className="mr-2">
            <HomeIcon className="h-6 w-6" />
          </span>
          My Applications
        </li>
        <li className="flex items-center">
          <span className="mr-2">
            <HomeIcon className="h-6 w-6" />
          </span>
          Financing
        </li>
        <li className="flex items-center">
          <span className="mr-2">
            <HomeIcon className="h-6 w-6" />
          </span>
          Installation
        </li>
        <li className="flex items-center">
          <span className="mr-2">
            <HomeIcon className="h-6 w-6" />
          </span>
          Referrals
        </li>
        <li className="flex items-center">
          <span className="mr-2">
            <HomeIcon className="h-6 w-6" />
          </span>
          Profile settings
        </li>
        <li className="flex items-center">
          <span className="mr-2">
            <HomeIcon className="h-6 w-6" />
          </span>
          Help & Support
        </li>
        <li className="flex items-center">
          <span className="mr-2">
            <HomeIcon className="h-6 w-6" />
          </span>
          Dashboard
        </li>
      </ul>
    </div>
  );
}

export default Menu;
