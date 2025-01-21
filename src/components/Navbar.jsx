import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between items-center p-2 md:px-16">
        {/* Logo and Main Menu */}
        <div className="flex items-center gap-4">
          <img
            className="h-12 w-12 object-contain"
            src={Logo}
            alt="LogoRmutl"
          />
          <div className="hidden md:flex bg-[#664C36] gap-6 p-3 px-10 text-white rounded-full font-Kanit">
            <Link
              to="/"
              className="hover:text-[#e7c5b0] transition duration-300"
            >
              หน้าแรก
            </Link>
            <Link
              to="/booking"
              className="hover:text-[#e7c5b0] transition duration-300"
            >
              จองคิว
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#e7c5b0] transition duration-300"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="bg-[#664C36] hover:bg-[#976829] hover:text-black p-3 px-10 rounded-full text-white font-Kanit transition duration-300">
            เข้าสู่ระบบ
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-[#664C36] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#664C36] text-white font-Kanit text-center p-4">
          <a
            href="#home"
            className="block py-2 hover:text-[#DAB49D] transition duration-300"
          >
            หน้าแรก
          </a>
          <a
            href="#booking"
            className="block py-2 hover:text-[#DAB49D] transition duration-300"
          >
            จองคิว
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-[#DAB49D] transition duration-300"
          >
            ติดต่อเรา
          </a>
          <button className="mt-4 bg-white text-[#664C36] hover:bg-[#DAB49D] p-3 px-10 rounded-full transition duration-300">
            เข้าสู่ระบบ
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
