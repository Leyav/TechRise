import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/logo/mLogo.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-lg">TechRise</span>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Open an account in minutes, get full financial control for much longer.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
              <FaXTwitter />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
            <li>Blog</li>
            <li>How we work?</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
            <li>Partners</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">More</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Categories</li>
            <li>Courses</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>
          ©2025 - TechRise. Distributed and Developed By LeyTech
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span>Privacy policy</span>
          <span>Terms & conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
