import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-orange-400">
            Hope For Children Foundation
          </h3>
          <p className="mb-4">
            We are dedicated to providing loving homes, education, and
            healthcare for orphaned and vulnerable children across the country.
            Join us in making a difference.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-orange-400 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-orange-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-orange-400 text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Our Orphanages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition-colors">
                How to Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Volunteer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-400">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-orange-400" />
              <span>123 Charity Avenue, Hope City, HC 12345</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-3 text-orange-400" />
              <span>+1 (800) 123-4567</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-orange-400" />
              <span>contact@hopeforchildren.org</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white mt-8 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} FutureNest. All
          rights reserved.
        </p>
        <p className="mt-2">
          <a href="#" className="hover:text-orange-400 transition-colors mr-4">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
