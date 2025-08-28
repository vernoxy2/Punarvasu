import React from "react";
import {
  MdOutlineAccessTimeFilled,
  MdOutlineBrightnessLow,
} from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import { FaBook } from "react-icons/fa6";
import { TiGroup } from "react-icons/ti";
import BgImg from "../../../assets/AboutUsAssets/leaf.svg";

const data = [
  {
    icon: <MdOutlineBrightnessLow />,
    text: "Government-registered BAMS & MD",
  },
  {
    icon: <MdOutlineAccessTimeFilled />,
    text: "10+ years of clinical experience",
  },
  {
    icon: <SiCodefresh />,
    text: "100% Ayurvedic medicines & therapies",
  },
  {
    icon: <TiGroup />,
    text: "Over 5,000+ patients served",
  },
];

const Accreditations = () => {
  return (
    <section className="py-12 space-y-14 bg-primary/20 shadow-inner relative overflow-x-hidden">
      <img
        data-aos="fade-left"
        data-aos-duration="3000"
        src={BgImg}
        alt=""
        className="absolute right-0 top-4 z-0"
      />

      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary leading-tight z-10"
      >
        Certifications & Accreditations
      </h1>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10">
        {data.map((item) => (
          <div
            data-aos="fade"
            data-aos-duration="800"
            key={item.id}
            className="group z-10 flex flex-col gap-4 items-center text-center text-primary hover:text-white bg-white hover:bg-primary transition-all duration-500 px-4 py-8 rounded-md shadow-md"
          >
            <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 pointer-events-none">
              {item.icon}
            </div>
            <p className="text-base sm:text-lg font-medium leading-snug max-w-xs">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <img
        data-aos="fade-right"
        data-aos-duration="3000"
        src={BgImg}
        alt=""
        className="absolute  bottom-0  scale-y-[-1] z-0 pointer-events-none"
      />
    </section>
  );
};

export default Accreditations;
