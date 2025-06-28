import React, { useState } from "react";
import { Link, useLocation } from "react-router";
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
  const Location = useLocation();
  const currentPath = location.pathname;

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full  bg-white shadow-sm  top-0 z-50">
      <div className=" mx-auto flex justify-between items-center h-32 px-4">
        {/* Right Div */}
        <div className=" hidden md:block w-full max-w-[160px] h-12 bg-gradient-to-l from-[#F29014] to-white ml-6 mr-6 " />

        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="logo" className="h-14 bg-blaxk" />
        </div>

        {/* Desktop Menu: Full Width */}
        <div className="hidden md:flex flex-grow  items-center space-x-12 bg-gradient-to-r from-primary via-primary/70  to-white px-10 ml-6 ">
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
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

       {/* Mobile Menu Dropdown */}
       {menuOpen && (
        <div className="md:hidden px-4 pb-4">
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
