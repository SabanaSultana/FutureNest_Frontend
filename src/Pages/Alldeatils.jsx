import React, { useState } from "react";
import {
  FaSearch,
  FaPhone,
  FaMapMarkerAlt,
  FaInfoCircle,
} from "react-icons/fa";

import Footer from "../Components/Footer";
const AllDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for 20 orphanages
  const orphanages = [
    {
      id: 1,
      name: "Hope Shelter",
      location: "New York, USA",
      contact: "+1 234 567 890",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
      description:
        "Providing care for children since 2005 with education programs.",
    },
    {
      id: 2,
      name: "Bright Future Home",
      location: "Los Angeles, USA",
      contact: "+1 987 654 321",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
      description: "Specializing in trauma recovery and family services.",
    },
    // Add more orphanages as needed...
  ];

  // Filter orphanages based on search term
  const filteredOrphanages = orphanages.filter((orphanage) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      orphanage.name.toLowerCase().includes(searchLower) ||
      orphanage.location.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <div className="min-h-screen bg-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Find the Orphanages here
          </h1>
          <p className="text-center text-gray-700 mb-6 text-lg font-semibold">
            We have listed genuine and trusted orphanages to help you connect
            with children and give them the love of a family. Your support can
            make a real difference.
          </p>

          {/* Search Area */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Single Column Layout - One Orphanage per Column */}
          <div className="space-y-8">
            {filteredOrphanages.length > 0 ? (
              filteredOrphanages.map((orphanage) => (
                <div
                  key={orphanage.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full md:w-3/4 lg:w-3/4 mx-auto"
                >
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    {/* Image Section */}
                    <div className="w-full md:w-1/5">
                      <img
                        src={orphanage.image}
                        alt={orphanage.name}
                        className="w-full h-80 object-cover rounded-md"
                      />
                    </div>

                    {/* Details Section */}
                    <div className="p-4 md:w-4/5">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {orphanage.name}
                      </h2>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <FaMapMarkerAlt className="mt-0.5 mr-2 text-blue-800" />
                          <div>
                            <h3 className="font-medium text-gray-700">
                              Location
                            </h3>
                            <p className="text-gray-600">
                              {orphanage.location}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <FaPhone className="mt-0.5 mr-2 text-blue-800" />
                          <div>
                            <h3 className="font-medium text-gray-700">
                              Contact
                            </h3>
                            <p className="text-gray-600">{orphanage.contact}</p>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium text-gray-700">About</h3>
                          <p className="text-gray-600">
                            {orphanage.description}
                          </p>
                        </div>
                        <div>
                          
                          <p className="text-gray-600 font-bold ">
                            *We have 300 children in our organization.
                          </p>
                        </div>
                      </div>

                      <button className="mt-4 bg-blue-800 hover:bg-blue-700 text-white py-1.5 px-4 rounded-md text-sm flex items-center transition-colors">
                        <FaInfoCircle className="mr-1.5" />
                        Learn more about this Orphanage
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No orphanages found matching your search.
                </p>
              </div>
            )}
          </div>

          {/* Show count of results */}
          <div className="mt-8 text-center text-gray-600">
            Showing {filteredOrphanages.length} of {orphanages.length}{" "}
            orphanages
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllDetails;
