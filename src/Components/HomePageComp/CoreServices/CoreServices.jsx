import React from "react";
import Panchkarma from "../../../assets/HomeAssets/CoreServices/panchkarma.png";
import Suvarnaprashan from "../../../assets/HomeAssets/CoreServices/Suvarnaprashan.png";
import Cosmetic from "../../../assets/HomeAssets/CoreServices/cosmetic.png";
import GarbhSanskar from "../../../assets/HomeAssets/CoreServices/GarbhSanskar.png";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";
import SerBg from "../../../assets/HomeAssets/CoreServices/ServicesBg.png";

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
   <section className="py-16 text-center relative z-10 overflow-hidden">
  {/* Background Image */}
  <div data-aos="fade-left" data-aos-duration="2000" className="absolute right-0 bottom-0 lg:top-0 z-0">
    <img src={SerBg} alt="" className="w-full h-auto pointer-events-none" />
  </div>

  {/* Heading */}
  <h1 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary relative z-10">Our Core Services</h1>

  {/* Cards */}
  <div className="container mx-auto relative z-10">
    <div className="my-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 px-4">
      {Services.map((service) => (
        <div
        data-aos="zoom-in"
          key={service.id}
          className="bg-white shadow-md group flex flex-col text-left hover:shadow-lg transition-all hover:-translate-y-3 duration-300"
        >
          <div className="w-full">
            <img
              src={service.img}
              alt={service.SerName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 group-hover:bg-primary text-primary group-hover:text-white duration-300 h-full transition-colors w-full space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold">{service.SerName}</h2>
            <p className="text-sm leading-tight lg:text-base">{service.dec}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Button */}
  <div className="relative z-10 mt-4">
    <PrimaryBtn className="text-white">Explore All Services</PrimaryBtn>
  </div>
</section>

  );
};

export default CoreServices;
