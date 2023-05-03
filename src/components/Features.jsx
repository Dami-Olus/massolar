import Image from "next/image";
import React from "react";
import application1 from "../../assets/images/application1.png";

function Features() {
  return (
    <div className="mt-16">
      <h1 className="text-black text-3xl font-thin text-center mb-10">
        WHAT WE OFFER YOU
      </h1>
      

      <div className="flex justify-center items-center">
        <Image src={application1} alt="" />
        <div className="ml-10 w-[700px]">
          <h1 className="text-black text-3xl font-extrabold mb-8">
            Easy and Quick Selection
          </h1>
          <p className="text-black mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            aliquam soluta nulla commodi. Ex sint voluptatum fugiat assumenda
            corporis repellendus exercitationem ad, atque doloribus voluptates
            nobis, culpa voluptatibus aliquam magni.
          </p>
          <button className="bg-green-500 py-4 px-16">
            Start Your Application
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
        
        <div className="ml-10 w-[700px]">
          <h1 className="text-black text-3xl font-extrabold mb-8">
            Easy and Quick Selection
          </h1>
          <p className="text-black mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            aliquam soluta nulla commodi. Ex sint voluptatum fugiat assumenda
            corporis repellendus exercitationem ad, atque doloribus voluptates
            nobis, culpa voluptatibus aliquam magni.
          </p>
          <button className="bg-green-500 py-4 px-16">
            Start Your Application
          </button>
        </div>
        <Image src={application1} alt="" />
      </div>

      <div className="flex justify-center items-center mt-20">
        <Image src={application1} alt="" />
        <div className="ml-10 w-[700px]">
          <h1 className="text-black text-3xl font-extrabold mb-8">
            Easy and Quick Selection
          </h1>
          <p className="text-black mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            aliquam soluta nulla commodi. Ex sint voluptatum fugiat assumenda
            corporis repellendus exercitationem ad, atque doloribus voluptates
            nobis, culpa voluptatibus aliquam magni.
          </p>
          <button className="bg-green-500 py-4 px-16">
            Start Your Application
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
        
        <div className="ml-10 w-[700px]">
          <h1 className="text-black text-3xl font-extrabold mb-8">
            Easy and Quick Selection
          </h1>
          <p className="text-black mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            aliquam soluta nulla commodi. Ex sint voluptatum fugiat assumenda
            corporis repellendus exercitationem ad, atque doloribus voluptates
            nobis, culpa voluptatibus aliquam magni.
          </p>
          <button className="bg-green-500 py-4 px-16">
            Start Your Application
          </button>
        </div>
        <Image src={application1} alt="" />
      </div>

      
    </div>
  );
}

export default Features;
