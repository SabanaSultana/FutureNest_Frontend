import React, { useState } from "react";
import {Sidebar} from "../../Components/Sidebar";
import AddChildForm from "../../Components/AddChildrenForm";
import TrackChildren from "../../Components/TrackChildren";

const OrphanageDashboard = () => {
  const [view, setView] = useState("add");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4">
      <Sidebar setView={setView} />
      <div className="flex-1 bg-white p-4 rounded-2xl shadow-md mt-4 md:mt-0 md:ml-4 overflow-y-auto">
        {view === "add" ? <AddChildForm /> : <TrackChildren />}
      </div>
    </div>
  );
};

export default OrphanageDashboard;
