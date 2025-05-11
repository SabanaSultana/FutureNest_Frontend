import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const OrganizationInfo = () => {
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    QRCode: null,
    description: "",
    photo: null,
  });

  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [previewQR, setPreviewQR] = useState(null);

  // Fetch organization info on mount
  useEffect(() => {
    const fetchOrgInfo = async () => {
      try {
        const res = await axios.get(`/api/additional-info/${user._id}`);
        if (res.data) {
          const {
            phoneNumber,
            address,
            city,
            state,
            country,
            QRCode,
            description,
            photo,
          } = res.data;
          setFormData((prev) => ({
            ...prev,
            phoneNumber,
            address,
            city,
            state,
            country,
            QRCode,
            description,
            photo,
          }));
          setPreviewPhoto(photo);
          setPreviewQR(QRCode);
        }
      } catch (err) {
        console.log("No existing organization info or error:", err.message);
      }
    };
    fetchOrgInfo();
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      if (name === "photo") setPreviewPhoto(URL.createObjectURL(files[0]));
      if (name === "QRCode") setPreviewQR(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });
    data.append("user", user._id);

    try {
      const res = await axios.post("/api/additional-info", data);
      alert("Organization Info Updated Successfully");
    } catch (err) {
      console.error("Error submitting organization info:", err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-orange-500 text-center">
        Organization Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />
        <input
          type="file"
          name="QRCode"
          accept="image/*"
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-3 rounded-lg col-span-1 md:col-span-2"
          rows={4}
          required
        />

        {previewPhoto && (
          <div className="col-span-1">
            <label className="block text-sm mb-1 text-orange-500 font-semibold">
              Photo Preview
            </label>
            <img
              src={previewPhoto}
              alt="Preview"
              className="h-32 w-32 object-cover rounded-lg border"
            />
          </div>
        )}
        {previewQR && (
          <div className="col-span-1">
            <label className="block text-sm mb-1 text-orange-500 font-semibold">
              QR Code Preview
            </label>
            <img
              src={previewQR}
              alt="Preview"
              className="h-32 w-32 object-cover rounded-lg border"
            />
          </div>
        )}

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg mt-4"
        >
          Save Information
        </button>
      </form>
    </div>
  );
};

export default OrganizationInfo;
