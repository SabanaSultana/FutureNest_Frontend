import React, { useState, useEffect } from "react";
import backgroundImg1 from "../assets/boy-1139042_1280.jpg";
import backgroundImg2 from "../assets/children2.jpg";
import backgroundImg3 from "../assets/children3.jpg";
import logo from "../assets/logo2.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const images = [backgroundImg1, backgroundImg2, backgroundImg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      className="relative bg-cover bg-center h-[80vh] transition-all duration-1000"
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 flex flex-row justify-between items-center w-[90vw] mx-auto p-4">
        <img
          src={logo}
          alt="error loading logo image"
          className="w-[150px] sm:w-[120px] md:w-[100px]"
        />
        <button className="bg-orangeCol text-white/80 text-lg sm:text-xl rounded-md px-4 py-2">
          Register
        </button>
      </div>

      <div className="relative z-10 text-white/95 flex flex-col items-center justify-center mt-6 gap-6 w-[60%] mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          A Home for Every Heart
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Join The Journey...
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold ">
          Every child deserves a loving home. Together, we can make that dream a
          reality.
        </p>
      </div>

      <Link to="/register">
        <div className="relative z-10 text-orange-500 flex flex-row justify-center items-center mt-10 font-semibold text-lg sm:text-xl md:text-2xl w-[60%] mx-auto text-center">
          <p>Please register yourself to join our community </p>
          <MdOutlineArrowOutward />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
