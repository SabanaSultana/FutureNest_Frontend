import React from 'react'
import Navbar from '../Components/Navbar'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import OrphanageDetails from '../Components/OrphanageDetails';

const Home = () => {
  return (
    <div >
      <Navbar />
      <div className="mt-20 p-8 ">
        <h1 className="text-4xl text-center w-full font-bold">
          <span className="block w-full">
            Each day, an estimated 734 children
          </span>
          <span className="block w-full">become orphans</span>
        </h1>
        <div className="mt-20 flex flex-col gap-7">
          <p className="w-[78%] mx-auto text-center text-[1.17rem]">
            FutureNest is a platform designed to connect adopters with
            orphanages, making the adoption process more accessible and
            streamlined. It allows users to browse orphanages, view details
            about children, and request meetings with orphanage representatives
            through a simple form. By bridging the gap between adopters and
            orphanages, FuturNest aims to create meaningful connections and
            improve the adoption experience for everyone involved.
          </p>
          <p className="w-[78%] mx-auto text-center text-[1.17rem] text-orangeCol">
            " Join us in our mission to provide loving homes for children in
            need. Your support can make a difference in the lives of many
            orphans. Together, we can create brighter futures for these
            deserving children."
          </p>
          <h1 className="text-3xl  mx-auto font-semibold border-b-4 border-orange-500 p-4 w-[15%]">
            OUR MOTIVE
          </h1>
          <p className="w-[78%] mx-auto text-center text-[1.17rem]">
            "Our mission is to connect users with orphanages. You can register
            yourself as a user to explore adoption opportunities or register
            your orphanage to reach potential adopters."
          </p>
          <Link to="/register">
            <p className="text-1xl  w-full font-bold text-orangeCol cursor-pointer flex flex-row items-center justify-center gap-2">
              <span>To Join Us, Click Here</span> <FaArrowRight />
            </p>
          </Link>
        </div>
      </div>
      <OrphanageDetails/>
    </div>
  );
}

export default Home
