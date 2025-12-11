import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const navigation = [
  { id: "home", name: "Home", path: "/" },
  { id: "about", name: "About", path: "/about" },
  { id: "services", name: "Services", path: "/services" },
  { id: "contact", name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Phone className="h-8 w-8" />
            <span className="text-2xl font-bold">TeleConnect</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="hover:text-blue-200 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-4">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 hover:text-blue-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
