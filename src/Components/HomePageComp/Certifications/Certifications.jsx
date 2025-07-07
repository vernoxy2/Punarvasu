import React from "react";
import Hospital from "../../../assets/HomeAssets/Certifications/Hospital.svg";
import Heart from "../../../assets/HomeAssets/Certifications/Heart.svg";
import Date from "../../../assets/HomeAssets/Certifications/Date.svg";
import Contact from "../../../assets/HomeAssets/Certifications/Contact.svg";
import Helth from "../../../assets/HomeAssets/Certifications/Helth.svg";
import BG from "../../../assets/HomeAssets/Certifications/Bg.png";
import Leaf from "../../../assets/HomeAssets/Certifications/leaf.svg";

const DataList = [
  {
    id: 1,
    icon: Hospital,
    text: "Licensed Ayurvedic Doctors (BAMS, MD Ayurveda)",
  },
  {
    id: 2,
    icon: Heart,
    text: "Treatments aligned with guidelines from the Ministry of AYUSH",
  },
  {
    id: 3,
    icon: Date,
    text: "15+ Years of Clinical Experience",
  },
  {
    id: 4,
    icon: Contact,
    text: "Thousands of satisfied patients treated across all age groups",
  },
  {
    id: 5,
    icon: Helth,
    text: "100% Herbal Medicines & Classical Panchkarma Protocols",
  },
];

const Certifications = () => {
  return (
    <section className="py-12 space-y-12 relative overflow-hidden">
      <img data-aos="fade-left" data-aos-duration="2000" src={BG} alt="" className="absolute right-0 pointer-events-none " />

      <h1 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary">
        Our Credentials & Certifications
      </h1>

      <div className="container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:gap-16 gap-y-4 sm:gap-8">
        {DataList.map((item) => (
          <div data-aos="fade-left" className="flex px-2 sm:px-0 py-[2px] sm:py-0">
            <div className="bg-primary px-1 md:px-[6px] h-[70px] lg:h-24 rounded-s-xl my-auto"></div>
            <div className="flex w-full items-center  gap-4 py-4 px-6 bg-white shadow-md hover:shadow-lg transition relative">
              <img src={item.icon} alt="icon" className="h-14 lg:h-full pointer-events-none" />
              <p className="text-sm text-gray-800">{item.text}</p>
              <img src={Leaf} alt="" className="absolute -right-1 -bottom-2 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
