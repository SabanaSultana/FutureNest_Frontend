import React, { useState } from "react";

const AddChildForm = ({ onAddChild }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    joinDate: "",
    image: null,
    video: null,
    documents: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChild = {
      id: `C${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name,
      age: formData.age,
      joinDate: formData.joinDate,
      image: formData.image
        ? URL.createObjectURL(formData.image)
        : "https://via.placeholder.com/150",
      adoptionRequests: 0,
      donationRequests: 0,
    };
    onAddChild(newChild);
    // Reset form
    setFormData({
      name: "",
      age: "",
      joinDate: "",
      image: null,
      video: null,
      documents: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 border-orange-200">
        Add New Child
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2">Child's Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Join Date</label>
          <input
            type="date"
            name="joinDate"
            value={formData.joinDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Profile Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-orange-500 file:text-white hover:file:bg-orange-600"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Video (Optional)</label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2">Documents</label>
          <input
            type="file"
            name="documents"
            multiple
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
          />
        </div>
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors shadow-md"
      >
        Add Child Record
      </button>
    </form>
  );
};

export default AddChildForm;
