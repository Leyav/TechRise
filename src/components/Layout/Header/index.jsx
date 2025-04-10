import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import HeaderLink from './Navigation/HeaderLink';
import { headerData } from "./Navigation/MenuData";

const navItems = ["Home", "About Us", "Recipe", "Gallery"];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const signInRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 z-40 w-full transition-all duration-300 bg-white shadow-md py-4">
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className='flex items-center text-black dark:text-white text-2xl font-semibold gap-4'>
            <img
              src="/images/logo/mLogo.svg"
              alt="logo"
              width={160}
              height={50}
              style={{ width: 'auto', height: 'auto' }}
            />
            TechRise
          </Link>

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
            <button
        className="hidden lg:block text-primary bg-primary/15 hover:text-white hover:bg-primary font-medium text-lg py-4 px-8 rounded-full"
        onClick={() => setIsSignInOpen(true)}
      >
        Sign In
      </button>

      {isSignInOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={signInRef}
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-white dark:bg-gray-600 bg-opacity-90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Sign In Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-black hover:text-primary text-24 inline-block me-2"
              />
            </button>

            {/* <Signin /> */}
          </div>
        </div>
      )}
            <button className="hidden lg:block px-5 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition">
              Sign Up
            </button>

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
                className="cursor-pointer text-gray-700 hover:text-red-500"
              >
                {item}
              </span>
            ))}
            <button
              className="w-full px-4 py-2 rounded-lg bg-red-100 text-red-500 font-medium hover:bg-red-200 transition"
              onClick={() => setNavbarOpen(false)}
            >
              Sign In
            </button>
            <button
              className="w-full px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
              onClick={() => setNavbarOpen(false)}
            >
              Sign Up
            </button>
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
