import React, { useState } from "react";

const TrackChildren = ({
  children = [],
  onDeleteChild = () => {},
  onUpdateChild = () => {},
}) => {
  // Default static data
  const defaultChildren = [
    {
      id: "CH001",
      name: "Sophia Martinez",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      age: 6,
      joinDate: "2023-02-15",
      adoptionRequests: 4,
      donationRequests: 8,
    },
    {
      id: "CH002",
      name: "James Wilson",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      age: 5,
      joinDate: "2023-01-10",
      adoptionRequests: 2,
      donationRequests: 5,
    },
  ];

  // Use props if available, otherwise use static data
  const displayChildren = children?.length ? children : defaultChildren;
  const [editingChild, setEditingChild] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    joinDate: "",
    image: null,
    video: null,
    documents: [],
  });

  const handleEditClick = (child) => {
    setEditingChild(child);
    setFormData({
      name: child.name,
      age: child.age,
      joinDate: child.joinDate,
      image: child.image,
      video: null, // Assuming video is not in the initial data
      documents: [], // Assuming documents are not in the initial data
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateChild(editingChild.id, formData);
    setEditingChild(null);
  };

  return (
    <div className="p-4">
      {/* Edit Modal */}
      {editingChild && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Edit Child Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Join Date</label>
                <input
                  type="date"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="w-full p-2 border rounded"
                  accept="image/*"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Video</label>
                <input
                  type="file"
                  name="video"
                  onChange={handleFileChange}
                  className="w-full p-2 border rounded"
                  accept="video/*"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Documents</label>
                <input
                  type="file"
                  name="documents"
                  onChange={handleFileChange}
                  className="w-full p-2 border rounded"
                  multiple
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingChild(null)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 border-orange-200">
          Children Records
        </h2>
        <p className="text-gray-600">
          Total: <span className="font-bold">{displayChildren.length}</span>{" "}
          children
        </p>
      </div>

      {displayChildren.length === 0 ? (
        <div className="bg-gray-100 rounded-xl p-8 text-center">
          <p className="text-gray-500">No children records found</p>
          <p className="text-sm text-gray-400 mt-2">
            Add a new child using the "Add Child" option
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Photo</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Age</th>
                <th className="py-3 px-4 text-left">Join Date</th>
                <th className="py-3 px-4 text-left">Adoption Requests</th>
                <th className="py-3 px-4 text-left">Donation Requests</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {displayChildren.map((child) => (
                <tr key={child.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <img
                      src={child.image}
                      alt={child.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-800">
                    {child.name}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{child.id}</td>
                  <td className="py-3 px-4 text-gray-600">{child.age}</td>
                  <td className="py-3 px-4 text-gray-600">{child.joinDate}</td>
                  <td className="py-3 px-4 text-orange-600 font-medium">
                    {child.adoptionRequests}
                  </td>
                  <td className="py-3 px-4 text-orange-600 font-medium">
                    {child.donationRequests}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditClick(child)}
                        className="py-1 px-3 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDeleteChild(child.id)}
                        className="py-1 px-3 bg-red-100 text-red-600 rounded hover:bg-red-200 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TrackChildren;
