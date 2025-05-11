import React, { useState } from "react";
import RegisterImg from "../assets/registerImg.jpg";
import axios from "axios";
import SummaryApi from "../Common/index";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setFlag } from "../Store/userSlice";
// import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("Donor");
  const dispatch = useDispatch();
  const orangeCol = "#FF6600";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    password: "",
    confirmPassword: "",
    purpose: "",
    // photo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let payload;
      let config = {};

      if (userType === "Orphanage") {
        payload = new FormData();
        payload.append("name", formData.name);
        payload.append("email", formData.email);
        payload.append("phoneNumber", formData.phoneNumber);
        payload.append("location", formData.location);
        payload.append("password", formData.password);
        payload.append("confirmPassword", formData.confirmPassword);
        payload.append("purpose", formData.purpose);
        payload.append("accountType", userType);
        // payload.append("photo", formData.photo);

        config.headers = { "Content-Type": "multipart/form-data" };
      } else {
        payload = {
          ...formData,
          accountType: userType,
        };
      }

      const res = await axios.post(SummaryApi.signUp.url, payload, config);

      if (res){
        toast.success("Registration successful! Please login.", {
          position: "top-center",
        });
        dispatch(setFlag(true));
        setTimeout(() => {
          navigate("/login");
        }, 2000);

      } else {
        toast.error("Registration failed. Check console for details.", {
          position: "top-center",
        });   
      }

      
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error("Registration failed. Check console for details.", {
        position: "top-center",
      });
    }
  };

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
      <ToastContainer />
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
              userType === "Donor" ? "bg-orange-500" : "bg-gray-700"
            }`}
            onClick={() => setUserType("Donor")}
          >
            Donor
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded ${
              userType === "Orphanage" ? "bg-orange-500" : "bg-gray-700"
            }`}
            onClick={() => setUserType("Orphanage")}
          >
            Orphanage
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={
              userType === "Donor" ? "Name" : "Name of the Orphanage"
            }
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {userType === "Donor" ? (
            <input
              type="text"
              name="purpose"
              placeholder="Purpose for Registering"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
              value={formData.purpose}
              onChange={handleChange}
              required
            />
          ) : (
            <textarea
              name="purpose"
              placeholder="Additional Details"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
              value={formData.purpose}
              onChange={handleChange}
              required
            />
          )}

          {/* {userType === "Orphanage" && (
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
              onChange={handleFileChange}
              required
            />
          )} */}

          <button
            type="submit"
            className="w-full p-2 rounded bg-orange-500 text-white font-bold hover:bg-orange-600"
          >
            Register
          </button>

          <p className="text-center">
            Already have an account ?{" "}
            <Link to='/login'>
              {" "}
              <span className="text-orange-500 font-bold">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
