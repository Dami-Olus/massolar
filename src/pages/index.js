import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

function index() {
  return (
    <div className=" bg-[#fafafa] h-auto">
      {/*Navbar*/}
      <Navbar />
      <Hero />
      <About />
      <Features />
      <FAQ />
      <div className="flex justify-center items-center space-x-10 rounded py-10">
        <h1 className="text-black text-xl font-bold">
          Start SAving Cost on Electricity
        </h1>
        <button className="bg-green-500 py-5 px-10">Get Started!</button>
      </div>
      {/*Footer*/}
      <Footer />
    </div>
  );
}

export default index;
