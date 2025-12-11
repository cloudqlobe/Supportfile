import { useState } from 'react';
import { Linkedin, Instagram, Facebook, MessageCircle, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-indigo-900 backdrop-blur-md px-4 sm:px-6 py-4">
        <div className="max-w-9xl mx-auto flex items-center justify-between">

          {/* LEFT — LOGO */}
          <div className="text-lg sm:text-xl">
            <Link to="/" style={{display:"flex", alignItems:"center"}}>
              <img
                src="/assets/logo2.png" // Replace with your logo path
                alt="Logo"
                className="h-8 w-auto sm:h-10" // Adjust the height as needed
                style={{width:"56px",height:"50px", marginLeft:"10px"}}
              />
              <div className='flex'>
              <span className="text-[25px] text-gray-400">MARIYAAM</span>
               <span className='text-[25px] text-yellow-400 ml-2'>TELECOM</span>
              </div>
            </Link>
          </div>


          {/* CENTER — DESKTOP MENU */}
          <ul className="hidden md:flex items-center space-x-8 lg:space-x-10 text-white font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-gray-300 transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300 transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/faq"
                className="hover:text-gray-300 transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
          </ul>

          {/* RIGHT — DESKTOP SOCIAL ICONS */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <a href="#" className="transform hover:-translate-y-1 transition-transform duration-200 group">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <MessageCircle className="text-white w-5 h-5" />
              </div>
            </a>

            <a href="#" className="transform hover:-translate-y-1 transition-transform duration-200 group">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <Linkedin className="text-white w-5 h-5" />
              </div>
            </a>

            <a href="#" className="transform hover:-translate-y-1 transition-transform duration-200 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <Instagram className="text-white w-5 h-5" />
              </div>
            </a>

            <a href="#" className="transform hover:-translate-y-1 transition-transform duration-200 group">
              <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <Facebook className="text-white w-5 h-5" />
              </div>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-blue-900 to-indigo-900 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="text-xl font-bold text-white">
            Menu
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex-1 flex flex-col p-4 pt-6 overflow-y-auto">
          {/* Mobile Navigation Links */}
          <nav className="space-y-4 mb-8">
            <Link
              to="/"
              className="block py-3 px-4 text-white font-medium text-lg rounded-lg hover:bg-white/10 transition-colors duration-200 border-l-4 border-transparent hover:border-emerald-400"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block py-3 px-4 text-white font-medium text-lg rounded-lg hover:bg-white/10 transition-colors duration-200 border-l-4 border-transparent hover:border-emerald-400"
              onClick={closeMobileMenu}
            >
              About
            </Link>

            <Link
              to="/services"
              className="block py-3 px-4 text-white font-medium text-lg rounded-lg hover:bg-white/10 transition-colors duration-200 border-l-4 border-transparent hover:border-emerald-400"
              onClick={closeMobileMenu}
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="block py-3 px-4 text-white font-medium text-lg rounded-lg hover:bg-white/10 transition-colors duration-200 border-l-4 border-transparent hover:border-emerald-400"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>

            <Link
              to="/faq"
              className="block py-3 px-4 text-white font-medium text-lg rounded-lg hover:bg-white/10 transition-colors duration-200 border-l-4 border-transparent hover:border-emerald-400"
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile Social Icons */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider">Connect With Us</h3>
            </div>

            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                  <MessageCircle className="text-white w-5 h-5" />
                </div>
              </a>

              <a
                href="#"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                  <Linkedin className="text-white w-5 h-5" />
                </div>
              </a>

              <a
                href="#"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                  <Instagram className="text-white w-5 h-5" />
                </div>
              </a>

              <a
                href="#"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                  <Facebook className="text-white w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;  
