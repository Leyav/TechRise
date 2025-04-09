import React, { useState, useRef, useEffect } from "react";

const navItems = ["Home", "About Us", "Recipe", "Gallery"];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const mobileMenuRef = useRef(null);

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
      <div className="container mx-auto px-4 max-w-screen-xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/images/logo/mLogo.svg" alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-semibold text-gray-800">TechRise</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-600 font-medium text-base">
          {navItems.map((item) => (
            <span
              key={item}
              className="cursor-pointer hover:text-red-500 transition-colors"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Contact + Buttons */}
        <div className="flex items-center gap-4">
          <span className="text-black font-medium hidden lg:flex items-center gap-2">
            <span className="text-red-500 text-xl">📞</span>
            +1(909) 235–9814
          </span>
          <button className="hidden lg:block px-5 py-2 rounded-full bg-red-100 text-red-500 font-medium hover:bg-red-200 transition">
            Sign In
          </button>
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
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
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
    </header>
  );
};

export default Header;
