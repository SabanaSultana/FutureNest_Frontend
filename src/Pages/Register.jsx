import React, { useState } from "react";
import RegisterImg from "../assets/registerImg.jpg";

const Register = () => {
  const [userType, setUserType] = useState("user");
  const orangeCol = "#FF6600";

  return (
    <div
      className="min-h-screen flex justify-center items-center text-white"
      style={{
        backgroundImage: `url(${RegisterImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg">
        <h2
          className="text-2xl font-bold text-center"
          style={{ color: orangeCol }}
        >
          Register
        </h2>
        <div className="flex justify-center my-4">
          <button
            className={`px-4 py-2 mx-2 rounded ${
              userType === "user" ? "bg-orange-500" : "bg-gray-700"
            }`}
            onClick={() => setUserType("user")}
          >
            User
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded ${
              userType === "orphanage" ? "bg-orange-500" : "bg-gray-700"
            }`}
            onClick={() => setUserType("orphanage")}
          >
            Orphanage
          </button>
        </div>
        <form className="space-y-4">
          {userType === "user" ? (
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            />
          ) : (
            <input
              type="text"
              placeholder="Name of the Orphanage"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
          {userType === "user" ? (
            <input
              type="text"
              placeholder="Purpose for Registering"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            />
          ) : (
            <textarea
              placeholder="Additional Details "
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            ></textarea>
          )}
          <button
            type="submit"
            className="w-full p-2 rounded bg-orange-500 text-white font-bold hover:bg-orange-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
