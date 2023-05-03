import React from "react";

function Footer() {
  return (
    <div className="flex bg-green-500 py-10 px-10">
      <div className="w-72">
        <h1 className="mb-5 font-black text-3xl">MasSolar</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit
          eaque officia sint. Nostrum dolorum enim assumenda error ipsum quidem
          explicabo qui dolorem laboriosam quaerat. Nostrum ut quisquam dolorem
          adipisci.
        </p>
      </div>

      <div className="ml-28 font-semibold">
        <ul className="space-y-5">
          <li>Explore</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Benefits</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="ml-28 font-semibold">
        <ul className="space-y-5">
          <li>Contact Us</li>
          <li>www.massolar.io</li>
          <li>+234-81 234 34 443</li>
          <li>+1 990 377 8484</li>
        </ul>
      </div>

      <div className="ml-28 font-semibold">
        <ul className="space-y-5">
          <li>Where we are</li>
          <li>About Us</li>
          <li>Service</li>
          
        </ul>
      </div>
    </div>
  );
}

export default Footer;
