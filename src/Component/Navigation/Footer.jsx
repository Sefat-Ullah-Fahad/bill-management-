



import React from "react";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white pt-14 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <NavLink to="/">
            <img className="w-16 h-16 rounded-[50%]" src="/logo-4.jpg" alt="site logo" />
          </NavLink>
          <p className="mt-3 text-sm text-white/80">
            We help businesses grow with creative design & digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link to={'/'} className="hover:text-indigo-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/bills'} className="hover:text-indigo-300 transition">
                Bills
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-white">
            Connect With Us
          </h3>
          <p className="text-sm text-white/80 mb-3">
            Follow us on social media
          </p>

          <div className="flex gap-4 text-black">
            <a
              href="https://www.facebook.com/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-700 hover:bg-indigo-600 transition shadow-sm text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/?hl=en"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-700 hover:bg-pink-600 transition shadow-sm text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-700 hover:bg-sky-600 transition shadow-sm text-white"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://telegram.org/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-600 transition shadow-sm text-white"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} YourSiteName. Designed with ❤️ by You
      </div>
    </footer>
  );
};

export default Footer;
