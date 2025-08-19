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
  { name: "Testimonial", path: "/#testimonial" },
  { name: "Diseases", path: "/services#diseases" },
  { name: "Contact Us", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    if (path.startsWith("#")) {
      const target = document.querySelector(path);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else if (path.includes("#")) {
      const [base, hash] = path.split("#");
      navigate(base);
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      navigate(path);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-transparent lg:bg-white shadow-sm top-0 z-50">
      {/* Top banner */}

      <p className="text-center xl:text-right text-xs md:text-sm container xl:-mb-5 bg-primary xl:bg-transparent text-white xl:text-primary py-2 xl:py-0">
        India's Most Trusted Ayurveda Healthcare Brand Since 2015
      </p>
      {/* Navbar main */}
      <div className="mx-auto flex justify-between items-center sm:h-24 px-4 lg:px-8">
        {/* Left Accent Bar - hide on small */}
        <div className="hidden xl:block w-[8%] h-12 bg-gradient-to-l from-[#F29014] to-white" />

        {/* Logo */}
        <Link to="/" className="flex items-center p-4">
          <img
            src={Logo}
            alt="Punarvasu Logo"
            className="h-10 md:h-14 lg:h-20 object-contain pointer-events-none"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex flex-grow justify-between items-center bg-gradient-to-r from-primary via-primary/95 to-white px-12 ">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className={`text-lg font-semibold px-3 py-2 transition-all ${
                  location.pathname === item.path
                    ? "text-green-700 bg-white"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/punarvasu_ayurveda07?igsh=MWZuZGxhMzl4b2Y0bQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-white rounded hover:scale-125 duration-300"
            >
              <FaFacebookSquare className="text-primary text-lg" />
            </a>

            <a
              href="https://www.instagram.com/punarvasu_ayurveda07?igsh=MWZuZGxhMzl4b2Y0bQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-white rounded hover:scale-125 duration-300"
            >
              <AiFillInstagram className="text-primary text-lg" />
            </a>

            <div className="p-1 bg-white rounded hover:scale-125 duration-300">
              <BsTwitterX className="text-primary text-lg" />
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden text-2xl text-primary"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-white shadow-md px-4 py-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="text-base font-medium px-3 py-2 rounded text-primary hover:bg-primary/10"
              >
                {item.name}
              </button>
            ))}
            <div className="flex gap-3 pt-2 justify-center">
              {[FaFacebookSquare, AiFillInstagram, BsTwitterX].map(
                (Icon, idx) => (
                  <div key={idx} className="p-1 text-primary rounded">
                    <Icon className="bg-white text-2xl" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
