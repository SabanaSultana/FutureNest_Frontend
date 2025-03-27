import React, { useState } from "react";
import { FaSearch, FaBirthdayCake, FaVenusMars } from "react-icons/fa";

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
    <div className="min-h-screen bg-gray-100 py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Children List
        </h1>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or gender..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Display List of Children */}
        <div className="space-y-4">
          {filteredChildren.length > 0 ? (
            filteredChildren.map((child) => (
              <div
                key={child.id}
                className="flex bg-white shadow-md rounded-lg p-4 items-center"
              >
                {/* Child Image */}
                <img
                  src={child.image}
                  alt={child.name}
                  className="w-20 h-20 rounded-full object-cover border"
                />

                {/* Child Details */}
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {child.name}
                  </h2>
                  <div className="text-gray-600 flex items-center">
                    <FaBirthdayCake className="mr-2 text-orange-500" />
                    <span>{child.age} years old</span>
                  </div>
                  <div className="text-gray-600 flex items-center">
                    <FaVenusMars className="mr-2 text-purple-500" />
                    <span>{child.gender}</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Joined: {child.joined}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No children found.</p>
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
