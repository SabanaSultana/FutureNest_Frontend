import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import SummaryApi from "../Common/index";
import { clearUserDetails } from "../Store/userSlice";

const Sidebar = ({ setView, activeView }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuItems = [
    { id: "add", label: "Add Child", icon: "➕" },
    { id: "track", label: "Track Children", icon: "👶" },
    { id: "analytics", label: "Analytics", icon: "📊" },
    { id: "org-info", label: "Organization Info", icon: "🏢" },
  ];

  const handleLogout = async () => {
    try {
      const res = await axios.post(SummaryApi.logout.url);
      if (res.status === 200) {
        alert("Logout successful");
        dispatch(clearUserDetails()); // Dispatching action to clear user data
        // console.log("User details after logout:", store.getState().user); // Log to check state
        navigate("/"); // Redirect to homepage
      } else {
        console.error("Logout failed with status:", res.status);
      }
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };
  
  
  return (
    <aside className="w-full md:w-64 bg-gray-900 text-white p-4 md:p-6 flex flex-col justify-between h-screen">
      <div>
        <div className="mb-8 flex flex-col items-center relative">
          <div className="relative group">
            <img
              src="https://via.placeholder.com/80"
              alt="Organization Logo"
              className="w-20 h-20 rounded-full object-cover border-2 border-orange-400 mb-3"
            />
            <button
              className="absolute bottom-4 right-0 bg-gray-700 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => console.log("Edit organization details")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </div>
          <h2 className="text-xl font-bold text-center">
            OrphanCare Foundation
          </h2>
          <p className="text-gray-400 text-sm text-center">Management System</p>
        </div>

        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setView(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeView === item.id
                      ? "bg-orange-500 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="mt-6 w-full text-left px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold"
      >
        🚪 Logout
      </button>
    </aside>
  );
};

export default Sidebar;
