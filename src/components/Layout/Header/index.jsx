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
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const signUpRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setNavbarOpen(false);
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
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  return (
    <header className={`fixed top-0 z-40 w-full transition-all duration-300 ${sticky ? " shadow-lg bg-white dark:bg-gray-600 py-4" : "shadow-none py-8"
    }`}>
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
        className="hidden lg:block text-red-500 bg-red-100 hover:text-white hover:bg-red-500 font-medium text-lg py-4 px-8 rounded-full"
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
                <button
        className="hidden lg:block bg-red-500 text-white hover:bg-red-100 hover:text-red-500 font-medium text-lg py-4 px-8 rounded-full"
        onClick={() => setIsSignUpOpen(true)}
      >
        Sign Up
      </button>

      {isSignUpOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={signUpRef}
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-dark_grey bg-opacity-90 backdrop-blur-md px-8 pt-14 pb-8 text-center"
          >
            <button
              onClick={() => setIsSignUpOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Sign Up Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>

            {/* <SignUp /> */}
          </div>
        </div>
      )}


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
