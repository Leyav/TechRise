import  { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Logo from '../../Common/Logo';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const hideHomeButtonOn = ['/add-question']; // Add your own paths

  const showHomeButton = !hideHomeButtonOn.includes(location.pathname);
  const dummyUserId = 1;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 px-6 flex justify-between items-center shadow-sm ${
        sticky ? 'bg-white py-3 shadow-md' : 'bg-white py-4'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
         {/* 🆕 "Go Back Home" Button */}
        {showHomeButton && (
          <button
            onClick={() => navigate(`/user/${dummyUserId}`)}
            className="text-gray-600 hover:text-blue-600 px-3 py-1.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            <Icon icon="mdi:home" className="w-4 h-4 mr-1 inline" />
            Home
          </button>
        )}

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block border border-gray-300 rounded-lg px-4 py-1.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />

        {/* Notification Icon */}
        <button
          title="Notifications"
          className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Icon icon="mdi:bell-outline" className="w-5 h-5" />
        </button>

        {/* Settings Icon */}
        <button
          title="Settings"
          className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Icon icon="mdi:cog-outline" className="w-5 h-5" />
        </button>

        {/* User Info */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 hover:shadow transition">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-800 hidden sm:inline">
            John Doe
          </span>
        </div>

        {/* Logout */}
        <button
          title="Logout"
          onClick={() =>{navigate(`/`)}}
          className="text-gray-600 hover:text-red-500 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <Icon icon="mdi:logout" className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
