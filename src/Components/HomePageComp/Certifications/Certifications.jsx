import React from "react";
import Hospital from "../../../assets/HomeAssets/Certifications/Hospital.svg";
import Heart from "../../../assets/HomeAssets/Certifications/Heart.svg";
import Date from "../../../assets/HomeAssets/Certifications/Date.svg";
import Contact from "../../../assets/HomeAssets/Certifications/Contact.svg";
import Helth from "../../../assets/HomeAssets/Certifications/Helth.svg";
import BG from "../../../assets/HomeAssets/Certifications/Bg.png"

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
    <section className="py-12 space-y-12">
      <img src={BG} alt="" className="absolute right-0"/>

      <h1 className="text-5xl text-center font-bold text-secondary">
        Our Credentials & Certifications
      </h1>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {DataList.map((item) => (
          <div
            
            className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img src={item.icon} alt="icon" className="w-12 h-12" />
            <p className="text-base font-medium text-gray-800">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
