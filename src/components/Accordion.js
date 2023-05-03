import React, { useState } from "react";

function Accordion({ answer, question }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
    <div className="flex justify-center">
      <div
        onClick={() => setIsActive(!isActive)}
        className="w-2/4 flex justify-between px-5"
      >
        <h1 className="text-center">{question}</h1>
        <div>{isActive ? "-" : "+"}</div>
      </div>
    </div>
    {isActive && <p>{answer}</p>}
    </div>
  );
}

export default Accordion;
