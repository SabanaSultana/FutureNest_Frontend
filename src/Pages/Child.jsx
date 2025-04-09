import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo2.png"; // Adjust path if needed
import qrCodeImage from "../assets/logo2.png"; // Adjust path if needed

const Child = () => {
  const [showModal, setShowModal] = useState(false);

  const child = {
    name: "Ravi Sharma",
    age: 12,
    gender: "Male",
    born: "10th Jan 2012",
    joined: "March 2020",
    image:
      "https://media.istockphoto.com/id/1399611777/photo/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.jpg?s=1024x1024&w=is&k=20&c=0A-h2Rnfc1Q1fVJIKGNMq5VfoVKbA1Hbn2eEI872hTE=",
    education: {
      currentClass: "6th Grade",
      school: "Sunrise Public School",
      merit: "Top 5% in class",
    },
    documents: [
      { name: "Birth Certificate", url: "#" },
      { name: "School ID", url: "#" },
      { name: "Progress Report", url: "#" },
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="flex items-center justify-between mb-10">
        <img src={logo} alt="FuturNest Logo" className="w-[150px] h-auto" />

        <div className="text-center w-full">
          <h1 className="text-5xl font-bold text-white">
            Meet the Star of FuturNest
          </h1>
          <p className="text-orange-500 font-semibold mt-2 text-lg">
            "A journey of hope and dreams begins here"
          </p>
        </div>
      </div>
      {/* About */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-12 max-w-6xl mx-auto px-6">
        <div className="flex-1 max-w-xl text-lg leading-relaxed  space-y-3">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="italic text-[20px]">
            Hii, I am <strong className="text-orange-500">{child.name}</strong>.
            I was born on{" "}
            <strong className="text-orange-500">{child.born}</strong>, and I am
            currently{" "}
            <strong className="text-orange-500">{child.age} years</strong> old.
            I joined the FuturNest family in{" "}
            <strong className="text-orange-500">{child.joined}</strong>.
          </p>
          <p className="italic text-[20px]">
            I am currently studying in{" "}
            <strong className="text-orange-500">
              {child.education.currentClass}
            </strong>{" "}
            at{" "}
            <strong className="text-orange-500">
              {child.education.school}
            </strong>
            . I love studying and recently achieved{" "}
            <strong className="text-orange-500">{child.education.merit}</strong>{" "}
            in my class.
          </p>
          <p className="italic text-[20px]">
            I enjoy drawing, playing football, and learning new things every
            day. I dream of becoming a scientist one day!
          </p>
        </div>

        {/* Child Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={child.image}
            alt={child.name}
            className="rounded-[50%] w-[400px] h-[400px] object-cover border-[6px] border-white shadow-2xl shadow-black/40"
          />
        </div>
      </div>

      {/* Documents */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
          Education Documents
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {child.documents.map((doc, index) => (
            <li key={index}>
              <a href={doc.url} className="text-orange-600 hover:underline">
                {doc.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Activity Video */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
          Activity Video
        </h3>
        <video
          controls
          className="w-full rounded-xl border border-gray-300 shadow"
        >
          <source src={child.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg"
          onClick={() => setShowModal(true)}
        >
          Donate
        </button>
        <button
          className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg"
          onClick={() => alert("Meeting request functionality goes here.")}
        >
          Book a Meeting for Adoption
        </button>
      </div>

      {/* QR Code Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl relative w-[300px] text-center">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              <FaTimes size={18} />
            </button>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Scan to Donate
            </h2>
            <img
              src={qrCodeImage}
              alt="QR Code"
              className="w-56 h-56 mx-auto rounded-lg border shadow-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Child;
