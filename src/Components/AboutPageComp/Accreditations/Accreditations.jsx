import React from "react";
import {
  MdOutlineAccessTimeFilled,
  MdOutlineBrightnessLow,
} from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import { FaBook } from "react-icons/fa6";
import { TiGroup } from "react-icons/ti";
import BgImg from '../../../assets/AboutUsAssets/leaf.svg'

const data = [
  {
    id: 1,
    icon: <MdOutlineBrightnessLow />,
    text: "Government-registered BAMS & MD",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    text: "Licensed under the Ministry of AYUSH",
  },
  {
    id: 3,
    icon: <SiCodefresh />,
    text: "100% Ayurvedic medicines & therapies",
  },
  {
    id: 4,
    icon: <FaBook />,
    text: "Classical Panchkarma protocols as per Charak Samhita",
  },
  {
    id: 5,
    icon: <MdOutlineAccessTimeFilled />,
    text: "15+ years of clinical experience",
  },
  {
    id: 6,
    icon: <TiGroup />,
    text: "Over 5,000+ patients served",
  },
];

const Accreditations = () => {
  return (
    <section className="py-12 space-y-14 bg-primary/20 shadow-inner relative ">
      <img src={BgImg} alt="" className="absolute right-0 top-4 z-0"/>

      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary leading-tight z-10">
        Certifications & Accreditations
      </h1>
      <div className="container  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {data.map((item) => (
          <div
          key={item.id}
          className="group z-10 flex flex-col gap-5 items-center justify-start text-primary hover:text-white bg-white hover:bg-primary duration-300 px-6 py-5 shadow transition-all "
          >
            <div className="text-5xl group-hover:scale-110 transition-transform duration-300 pointer-events-none">
              {item.icon}
            </div>
            <p className="text-center text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>
        <img src={BgImg} alt="" className="absolute -left-10 bottom-0  scale-x-[-1] z-0"/>
    </section>
  );
};

export default Accreditations;
