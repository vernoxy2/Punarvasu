import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/NavbarAssets/Punarvasu_logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      data-aos="fade"
      className="w-full bg-transparent lg:bg-white shadow-sm top-0 z-50"
    >
      <p className="text-center xl:text-end md:text-lg md:-mb-8 container xl:text-primary bg-primary lg:bg-transparent text-white text-xs p-2 lg:p-0">
        India's Most Trusted Ayurveda Healthcare Brand Since 2015
      </p>
      <div className=" mx-auto flex justify-between items-center sm:h-32 px-4">
        {/* Left Accent Bar (optional) */}
        <div className="hidden lg:block w-[10%] h-12 bg-gradient-to-l from-[#F29014] to-white ml-6 mr-6" />

        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to={"/"} className="">
            <img
              src={Logo}
              alt="Punarvasu Logo"
              className="h-16 p-3 lg:h-full  w-auto object-contain pointer-events-none"
            />
          </Link>
        </div>
        <div className="text-3xl font-bold lg:hidden text-primary">
          Punarvasu
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow items-center space-x-12 bg-gradient-to-r from-primary via-primary/95 to-white px-10 ml-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-xl font-bold px-4 py-3 transition-all duration-200 ${
                currentPath === item.path
                  ? "text-green-700 bg-white"
                  : "text-white hover:bg-white/30"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-800"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium px-2 py-1 rounded ${
                  currentPath === item.path
                    ? "text-green-700 bg-gray-100"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
