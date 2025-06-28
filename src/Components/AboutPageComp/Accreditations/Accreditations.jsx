import React from "react";
import ayurvedic from "../../../assets/AboutUsAssets/Accreditations/Ayurvedic.svg";
import Classical from "../../../assets/AboutUsAssets/Accreditations/Classical.svg";
import experience from "../../../assets/AboutUsAssets/Accreditations/experience.svg";
import Licensed from "../../../assets/AboutUsAssets/Accreditations/Licensed.svg";
import patients from "../../../assets/AboutUsAssets/Accreditations/patients.svg";
import registered from "../../../assets/AboutUsAssets/Accreditations/registered.svg";

const data = [
  {
    id: 1,
    Img: registered,
    text: "Government-registered BAMS & MD",
  },
  {
    id: 2,
    Img: Licensed,
    text: "Licensed under the Ministry of AYUSH",
  },
  {
    id: 3,
    Img: ayurvedic,
    text: "100% Ayurvedic medicines & therapies",
  },
  {
    id: 4,
    Img: Classical,
    text: "Classical Panchkarma protocols as per Charak Samhita",
  },
  {
    id: 5,
    Img: experience,
    text: "15+ years of clinical experience",
  },
];

const Accreditations = () => {
  return (
    <section className="py-12 space-y-14 bg-primary/20 shadow-inner">
      <h1 className="text-5xl text-center font-bold text-primary leading-tight">
        Certifications & Accreditations
      </h1>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <img src={item.Img} alt={item.text} className="h-20 w-20 mb-4" />
            <p className="text-center text-lg font-medium text-textColor">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accreditations;
