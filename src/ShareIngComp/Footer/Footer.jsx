import React from "react";
import leaf from "../../assets/FooterAssets/leaf.png";
import Logo from "../../assets/NavbarAssets/Punarvasu_logo.png";
import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall, MdEmail } from "react-icons/md";

const FooterLink = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const ServicesLink = [
  { name: "Panchkarma Centre", path: "/" },
  { name: "Suvarnaprashan Centre", path: "/about" },
  { name: "Ayurvedic Cosmetic", path: "/services" },
  { name: "Garbh Sanskar Centre", path: "/faq" },
];

const Footer = () => {
  return (
    <footer className="bg-primary relative z-0">
      <div data-aos="fade" data-aos-duration="1200" className="pt-20 relative z-10">
        <div className="container lg:flex items-start gap-10 mb-56 space-y-9">
          {/* Logo and Description */}
          <div className="lg:w-4/12 space-y-10">
            <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full">
              <img
                src={Logo}
                alt=""
                className="object-cover h-full mx-auto p-6 pointer-events-none"
              />
            </div>
            <p className="text-white z-10 relative">
              At Prakruti, we strike the perfect balance between the timeless
              Ayurvedic Panchakarma therapies, perfect diet plan and ideal,
              healthy lifestyle to bring fascinating transformation in your
              life.
            </p>
          </div>

          {/* Shortcut Links */}
          <div className="lg:w-2/12 text-white z-10 relative">
            <h1 className="flex flex-col gap-y-3 text-2xl font-bold">
              Shortcut links
              <span className="bg-white h-[3px] w-[60%]"></span>
            </h1>
            <ul className="text-white font-semibold mt-4 space-y-2">
              {FooterLink.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:w-2/12 text-white z-10 relative">
            <h1 className="flex flex-col gap-y-3 text-2xl font-bold">
              Services
              <span className="bg-white h-[3px] w-[35%]"></span>
            </h1>
            <ul className="text-white font-semibold mt-4 space-y-3">
              {ServicesLink.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="sm:w-1/2 lg:w-4/12 text-white space-y-8 relative z-10">
            <h1 className="flex flex-col gap-y-3 text-2xl font-bold">
              Contact US
              <span className="bg-white h-[3px] w-[35%]"></span>
            </h1>
            <div className="flex flex-col gap-y-5">
              <a
                href="https://www.google.com/maps?q=PUNARVASU+AYURVEDA+CHIKITSALAYAM,+Shop+No+1,+BDCA+Building,+BHIDBHANJAN+MAHADEV+MANDIR,+KAPADIA+CHAL,+Abrama-396002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-x-4 items-center">
                  <div className="h-12 w-12">
                    <FaLocationDot className="text-6xl mx-auto my-auto p-2" />
                  </div>
                  <p>
                    Shop No 1, BDCA Building, BHIDBHANJAN MAHADEV MANDIR,
                    <br />
                    KAPADIA CHAL, Abrama-396002
                  </p>
                </div>
              </a>

              <a href="tel:+917947112761">
                <div className="flex items-center gap-x-4">
                  <div className="h-12 w-12">
                    <MdAddIcCall className="text-5xl p-1 mx-auto my-auto" />
                  </div>
                  <p className="my-auto">
                    Call Us: <br />
                    +91 07947112761
                  </p>
                </div>
              </a>

              <a href="mailto:punarvasu@gmail.com">
                <div className="flex items-center gap-x-4">
                  <MdEmail className="text-5xl p-1" />
                  <p className="my-auto">
                    Email: <br />
                    punarvasu@gmail.com
                  </p>
                </div>
              </a>
            </div>

            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className="mt-5 bg-white text-primary text-start px-4 py-2 w-full sm:w-9/12 font-bold hover:bg-gray-100 transition duration-300">
                Enquiry Now
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white h-1 w-2/12 mx-auto z-10 relative"></div>
      </div>

      {/* Background Leaf Image */}
      <img
        src={leaf}
        alt=""
        className="h-52 lg:h-72 2xl:h-auto ms-auto absolute right-0 bottom-0 z-0 pointer-events-none"
      />
    </footer>
  );
};

export default Footer;
