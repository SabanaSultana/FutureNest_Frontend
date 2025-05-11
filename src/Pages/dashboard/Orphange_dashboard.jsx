import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import AddChildForm from "../../Components/AddChildrenForm";
import TrackChildren from "../../Components/TrackChildren";
import Analytics from "../../Components/Analytics"; // Create this component
import OrganizationInfo from "../../Components/OrganizationInfo"; // Create this component

const OrphanageDashboard = () => {
  const [view, setView] = useState("add");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user || user.accountType !== "Orphanage") {
      navigate("/"); // Redirect to home if not Orphanage user
    }
  }, [user, navigate]);

  const renderView = () => {
    switch (view) {
      case "add":
        return <AddChildForm />;
      case "track":
        return <TrackChildren />;
      case "analytics":
        return <Analytics />;
      case "org-info":
        return <OrganizationInfo />;
      default:
        return <AddChildForm />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4">
      <Sidebar setView={setView} activeView={view} />
      <div className="flex-1 bg-white p-4 rounded-2xl shadow-md mt-4 md:mt-0 md:ml-4 overflow-y-auto">
        {renderView()}
      </div>
    </div>
  );
};

export default OrphanageDashboard;
