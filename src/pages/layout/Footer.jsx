import React from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom"; // Use Link for navigation

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Phone className="h-6 w-6" />
            <span className="text-xl font-bold">TeleConnect</span>
          </div>
          <p className="text-gray-400 text-sm">
            Connecting you to the future with reliable telecommunications services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Mobile Services</li>
            <li>Internet Services</li>
            <li>Business Solutions</li>
            <li>VoIP Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>+1 (555) 123-4567</li>
            <li>info@teleconnect.com</li>
            <li>123 Telecom Avenue</li>
            <li>Tech City, TC 12345</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 TeleConnect. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
