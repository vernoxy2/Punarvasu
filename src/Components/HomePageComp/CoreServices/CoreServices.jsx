import React from "react";
import Panchkarma from "../../../assets/HomeAssets/CoreServices/panchkarma.png";
import Suvarnaprashan from "../../../assets/HomeAssets/CoreServices/Suvarnaprashan.png";
import Cosmetic from "../../../assets/HomeAssets/CoreServices/cosmetic.png";
import GarbhSanskar from "../../../assets/HomeAssets/CoreServices/GarbhSanskar.png";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";
import SerBg from "../../../assets/HomeAssets/CoreServices/ServicesBg.png"

const Services = [
  {
    id: 1,
    SerName: "Panchkarma Centre",
    dec: "Detoxify and rejuvenate with classical Panchkarma therapies tailored to your unique constitution.",
    img: Panchkarma,
  },
  {
    id: 2,
    SerName: "Suvarnaprashan Centre",
    dec: "Boost your child’s immunity and intellect with Suvarnaprashan — the ancient Ayurvedic immunization for children.",
    img: Suvarnaprashan,
  },
  {
    id: 3,
    SerName: "Ayurvedic Cosmetic",
    dec: "Experience radiant skin and hair through herbal treatments and natural beauty therapies.",
    img: Cosmetic,
  },
  {
    id: 4,
    SerName: "Garbh Sanskar Centre",
    dec: "Support a healthy pregnancy and nurture positive prenatal development with Garbh Sanskar practices.",
    img: GarbhSanskar,
  },
];

const CoreServices = () => {
  return (
    <section className="py-16 text-center">
      <div className="absolute right-0 -z-10">
        <img src={SerBg } alt="" className=""/>
      </div>
        {/* Heading */}
      <h1 className="text-5xl font-bold text-secondary ">
        Our Core Services
      </h1>
      {/* Cards */}
      <div className="container my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {Services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md group flex flex-col text-left hover:shadow-lg transition"
          >
            <div className="w-full">
              <img
                src={service.img}
                alt={service.SerName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 group-hover:bg-primary text-primary group-hover:text-white duration-300 w-full space-y-1">
                <h1 className="text-2xl font-bold">{service.SerName}</h1>
                <p>{service.dec}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Button */}
      <PrimaryBtn>Explore All Services</PrimaryBtn>

    </section>
  );
};

export default CoreServices;
