import React, { useState } from "react";
import NewApplication from "../newApplication/NewApplication";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div style={{ fontWeight: "700" }} className="text-black p-10 flex-1  ">
      <button
        className="bg-green-500 text-white rounded-md py-5 px-10 text-xl"
        onClick={handleShowModal}
      >
        Start Application
      </button>

      
            <NewApplication />
          
    </div>
  );
}

export default Dashboard;
