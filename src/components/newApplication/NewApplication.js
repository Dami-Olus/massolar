import React from "react";

function newApplication() {
  return (
    <div className="m-28">
      <div className=" flex justify-between">
        <h1>New Application</h1>
        <span>X</span>
      </div>
      <div>
        <div className="flex justify-between ml-24 mt-10">
          <h4>Describe Energy Installation</h4>
          <div className="flex">
            <span>1</span>
            <p>Appliance added</p>
            <span>^</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default newApplication;
