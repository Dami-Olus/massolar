import Image from "next/image";
import React from "react";
import installers from "../../assets/images/installers.png";
import pebble from "../../assets/images/Ellipse 3.png";

function About() {
  return (
    <div className="flex text-slate-500 mt-24">
      <Image src={installers} alt="" height="auto" width={800} />
      <div className="w-[800px]">
        <h1 className="text-green-500 font-extrabold text-xl mb-8">
          ABOUT MasSolar
        </h1>
        <p className="mb-12">
          We want to ensure that everyone gets a chance to have a solar inverter
          without worrying about the huge capital investment. In fact our
          estimate and plan is that it wwould cost you next to nothing
        </p>

        <h4 className="font-extrabold text-green-500 text-xl mb-8">
          Our approach
        </h4>

        <div className="flex mb-5 text-lg">
          <span className="mr-5">
            <Image src={pebble} alt="" />
          </span>
          <p>Intuitive selection process to design your ideal system.</p>
        </div>

        <div className="flex mb-5 text-lg">
          <span className="mr-5">
            <Image src={pebble} alt="" />
          </span>
          <p>
            Accessible and user friendly financing specific to your budget. With
            0% downpayment and monthly payment over a desired period.
          </p>
        </div>

        <div className="flex mb-5 text-lg">
          <span className="mr-5">
            <Image src={pebble} alt="" />
          </span>
          <p>
            Sit back and relax while we hanle the logistics and installation
          </p>
        </div>

        <div className="flex mb-5 text-lg">
          <span className="mr-5">
            <Image src={pebble} alt="" />
          </span>
          <p>
            You get updates and notifications through your unique web portal
          </p>
        </div>

        <div className="flex mb-5 text-lg">
          <span className="mr-5">
            <Image src={pebble} alt="" />
          </span>
          <p>
            By Using solar energy, your monthly electricity bill will be
            reduced, these savings a=can be used to offset the monthly payment
            for the solar inverter
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
