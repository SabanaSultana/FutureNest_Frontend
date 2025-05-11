import React, { useState } from "react";
import RegisterImg from "../assets/registerImg.jpg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../Store/userSlice";
import SummaryApi from "../Common/index";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orangeCol = "#FF6600";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(SummaryApi.login.url, formData);
      dispatch(setUserDetails(res.data.user)); // Save user to Redux

      toast.success("Login successful!", { position: "top-center" });

      setTimeout(() => {
        navigate("/"); // Navigate to home page
      }, 2000);
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error("Login failed. Check credentials.", {
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
          Login
        </h2>

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
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
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full p-2 rounded bg-orange-500 text-white font-bold hover:bg-orange-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
