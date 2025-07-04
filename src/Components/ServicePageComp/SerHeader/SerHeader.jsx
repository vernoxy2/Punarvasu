import React from "react";
import ServiceBg from "../../../assets/ServiceAssets/ServiceBg.webp";
import Corner from "../../../assets/ServiceAssets/corner.png";

const SerHeader = () => {
  return (
    <section
    data-aos="fade"
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-cover bg-center bg-no-repeat lg:rounded-br-[400px]"
      style={{ backgroundImage: `url(${ServiceBg})` }}
    >
      {/* Decorative Corner Image */}
      <img
        src={Corner}
        alt="Decorative Corner"
        className="hidden lg:block absolute bottom-0 right-0 w-20 md:w-40 lg:w-80"
      />

      {/* Text Content */}
      <div className="container mx-auto h-full flex text-center items-center lg:text-start text-white px-4">
        <div className="w-full lg::w-1/2 space-y-4 lg:space-y-12  lg:pb-28">
          <h1 data-aos="fade-right" className="text-3xl md:text-6xl font-bold ">
            Healing with the <br className="hidden lg:block" /> Wisdom of Ayurveda
          </h1>
          <p data-aos="fade-right" className="text-base md:text-2xl font-medium leading-relaxed">
            Explore our specialized treatments for <br className="hidden lg:block" /> holistic well-being
          </p>
        </div>
      </div>
    </section>
  );
};

export default SerHeader;
