import React, { useState } from "react";
import { FaSearch, FaBirthdayCake, FaVenusMars } from "react-icons/fa";
import logo from "../assets/logo_black.png";
import { Link } from "react-router-dom";


const ChildrenList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data of children
  const children = [
    {
      id: 101,
      name: "Emma Johnson",
      age: 8,
      gender: "Female",
      joined: "2020-05-15",
      image: "https://randomuser.me/api/portraits/med/women/1.jpg",
    },
    {
      id: 102,
      name: "Liam Smith",
      age: 10,
      gender: "Male",
      joined: "2019-11-22",
      image: "https://randomuser.me/api/portraits/med/men/1.jpg",
    },
    {
      id: 103,
      name: "Sophia Davis",
      age: 7,
      gender: "Female",
      joined: "2021-03-10",
      image: "https://randomuser.me/api/portraits/med/women/2.jpg",
    },
    {
      id: 104,
      name: "Noah Wilson",
      age: 9,
      gender: "Male",
      joined: "2018-09-05",
      image: "https://randomuser.me/api/portraits/med/men/2.jpg",
    },
    // More children...
  ];

  // Filter children based on search term
  const filteredChildren = children.filter(
    (child) =>
      child.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      child.gender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-6 flex items-start gap-3">
      <div className="w-[150px] flex-shrink-0">
        <img
          src={logo}
          alt="error loading logo image"
          className="w-full object-contain"
        />
      </div>
      <div className="flex-1 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center  mb-8">Children List</h1>
        <div className="mb-6">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or gender..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Display List of Children */}
        <div className="space-y-10">
          {filteredChildren.length > 0 ? (
            filteredChildren.map((child, index) => (
              <div
                key={child.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } bg-white shadow-lg rounded-2xl overflow-hidden p-6 items-center gap-8`}
              >
                {/* Child Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src={child.image}
                    alt={child.name}
                    className="w-60 h-60 object-cover rounded-xl shadow-md"
                  />
                </div>

                {/* Child Details */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {child.name}
                  </h2>
                  <div className="text-lg text-gray-700 flex items-center">
                    <FaBirthdayCake className="mr-3 text-orange-500 text-2xl" />
                    <span>{child.age} years old</span>
                  </div>
                  <div className="text-lg text-gray-700 flex items-center">
                    <FaVenusMars className="mr-3 text-purple-500 text-2xl" />
                    <span>{child.gender}</span>
                  </div>
                  <p className="text-md text-gray-600">
                    <span className="font-semibold">Joined:</span>{" "}
                    {child.joined}
                  </p>
                  <Link to="/child">
                    <span className="inline-block mt-4 text-lg text-orangeCol font-semibold hover:underline">
                      Know more about this child →
                    </span>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-xl">
              No children found.
            </p>
          )}
        </div>

        {/* Show count of results */}
        <p className="mt-6 text-center text-gray-600">
          Showing {filteredChildren.length} of {children.length} children
        </p>
      </div>
    </div>
  );
};

export default ChildrenList;
