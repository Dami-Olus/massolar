
import React, { useState } from "react";
import Accordion from "./Accordion";



function FAQ() {
  const [isActive, setIsActive] = useState("false");

  

  const faqData = [
    {
      question: "What is MasSolar?",
      answer: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      question: "How do I apply for financing?",
      answer: "lorem ipsum dolor sit amet, consectetur",
    },
    {
      question: "How long is the payback period?",
      answer: "lorem ipsum dolor sit amet, consectetur",
    },
  ];

  return (
    <div className="text-black text-center mt-10 py-16">
      <h1 style={{fontWeight:'700', fontSize: '25px'}}>FREQUENTLY ASKED QUESTIONS</h1>
      {faqData.map(({ question, answer }) => (
        <Accordion question={question} answer={answer} />
      ))}
    </div>
  );
}

export default FAQ;
