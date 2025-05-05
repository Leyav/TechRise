import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import HeaderLink from '../../Layout/Header/Navigation/HeaderLink';
import { headerData } from "./Navigation/MenuData";
import Logo from '../../Common/Logo'

const navItems = ["Home", "About Us", "Categories", "Courses"];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setNavbarOpen(false);
    }
  
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target)
    ) {
      setProfileOpen(false);
    }
  };
  

  const handleScroll = () => {
    setSticky(window.scrollY >= 20);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  return (
    <header className={`fixed top-0 z-40 w-full transition-all duration-300 ${sticky ? " shadow-lg bg-white dark:bg-gray-600 py-4" : "shadow-none py-8"
    }`}>
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          {/* Logo */}
          <Logo/>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* Contact + Buttons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-lg font-medium hover:text-primary">
              <Icon
                icon="solar:phone-bold"
                className="text-primary text-3xl inline-block me-2"
              />
              +1(909) 235-9814
            </Link>
 

      

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden p-2 rounded-md"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
            </button>
          </div>

          <div className="relative" ref={profileRef}>
  <button
    onClick={() => setProfileOpen(!profileOpen)}
    className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
  >
    <Icon icon="mdi:account-circle" className="text-3xl text-gray-700" />
  </button>

  {profileOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      <Link
        to="/edit-profile"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        ✏️ Edit Profile
      </Link>
      <Link
        to="/settings"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        ⚙️ Settings
      </Link>
      <button
        onClick={() => {
          console.log("Sign out clicked");
        }}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-600"
      >
        🚪 Sign Out
      </button>
    </div>
  )}
</div>

        </div>

        {/* Mobile Nav */}
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-lg transform transition-transform duration-300 z-50 ${navbarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          ref={mobileMenuRef}
        >
          <div className="flex items-center justify-between p-4">
            <span className="text-xl font-bold">TechRise</span>
            <button
              onClick={() => setNavbarOpen(false)}
              className="w-6 h-6 bg-[url('/images/closed.svg')] bg-contain bg-no-repeat"
            ></button>
          </div>
          <nav className="flex flex-col items-start p-4 gap-4">
            {navItems.map((item) => (
              <span
                key={item}
                className="cursor-pointer text-gray-700 hover:text-primaryPurple"
              >
                {item}
              </span>
            ))}       
          </nav>
        </div>

        {/* Background Overlay */}
        {navbarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setNavbarOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
