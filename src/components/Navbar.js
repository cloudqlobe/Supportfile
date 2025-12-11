import { Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50  bg-gradient-to-r from-blue-900 to-indigo-900 backdrop-blur-md px-6 py-4 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT — LOGO */}
        <div className="text-xl font-bold text-white">
          LOGO
        </div>

        {/* CENTER — MENU */}
        <ul className="hidden md:flex items-center space-x-10 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-gray-300 transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-gray-300 transition">
              Services
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-gray-300 transition">
              Contact Us
            </Link>
          </li>

          <li>
            <Link to="/faq" className="hover:text-gray-300 transition">
              FAQ
            </Link>
          </li>
        </ul>

        {/* RIGHT — SOCIAL ICONS */}
        <div className="hidden md:flex items-center space-x-4">

          <a href="#" className="transform hover:-translate-y-1 transition">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <MessageCircle className="text-white w-5 h-5" />
            </div>
          </a>

          <a href="#" className="transform hover:-translate-y-1 transition">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <Linkedin className="text-white w-5 h-5" />
            </div>
          </a>

          <a href="#" className="transform hover:-translate-y-1 transition">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
              <Instagram className="text-white w-5 h-5" />
            </div>
          </a>

          <a href="#" className="transform hover:-translate-y-1 transition">
            <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
              <Facebook className="text-white w-5 h-5" />
            </div>
          </a>

        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-white text-3xl cursor-pointer">
          ☰
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
