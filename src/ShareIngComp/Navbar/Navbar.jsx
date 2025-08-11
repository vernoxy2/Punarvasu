import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/NavbarAssets/Punarvasu_logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Testimonial", path: "/#testimonial" }, // homepage section
  { name: "Diseases", path: "/services#diseases" }, // services page section
  { name: "Contact Us", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    if (path.startsWith("#")) {
      // In-page scroll
      const target = document.querySelector(path);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else if (path.includes("#")) {
      // Path with anchor → navigate first, then scroll
      const [base, hash] = path.split("#");
      navigate(base);
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // wait for page load
    } else {
      // Normal route
      navigate(path);
    }
    setMenuOpen(false);
  };

  return (
    <nav
      data-aos="fade"
      className="w-full bg-transparent lg:bg-white shadow-sm top-0 z-50"
    >
      <p className="text-center xl:text-end md:text-lg md:-mb-8 container xl:text-primary bg-primary lg:bg-transparent text-white text-xs p-2 lg:p-0">
        India's Most Trusted Ayurveda Healthcare Brand Since 2015
      </p>
      <div className="mx-auto flex justify-between items-center sm:h-32 px-4">
        {/* Left Accent Bar */}
        <div className="hidden lg:block w-[10%] h-12 bg-gradient-to-l from-[#F29014] to-white ml-6 mr-6" />

        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="Punarvasu Logo"
              className="h-16 p-3 lg:h-full w-auto object-contain pointer-events-none"
            />
          </Link>
        </div>
        <div className="text-3xl font-bold lg:hidden text-primary">
          Punarvasu
        </div>

        {/* Desktop Menu */}
        <div className="hidden container lg:flex flex-grow items-center justify-between space-x-12 bg-gradient-to-r from-primary via-primary/95 to-white px-10 ml-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.path)}
              className={`text-xl font-bold px-4 py-3 transition-all duration-200 ${
                currentPath === item.path
                  ? "text-green-700 bg-white"
                  : "text-white hover:bg-white/30"
              }`}
            >
              {item.name}
            </button>
          ))}

          <div className=" 2xl:pl-28 flex gap-2 text-primary">
            <div className="p-1 bg-white"><FaFacebookSquare className="text-xl " /></div>
          <div className="p-1 bg-white"><AiFillInstagram className="text-xl" /></div>
          <div className="p-1 bg-white"><BsTwitterX className="text-xl" /></div>
          </div>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="text-base font-medium px-2 py-1 rounded text-gray-800 hover:bg-gray-100"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
