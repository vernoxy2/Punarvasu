import React from "react";
import BgHeader from "../../../assets/FnQAssets/FAQHeader.webp";
import MBgHeader from "../../../assets/FnQAssets/MFAQHeader.png";
import Corner from "../../../assets/ContactUsAssets/Header/corner.png";

const FAQHeader = () => {
  return (
    <section
      data-aos="fade"
      className="relative w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-cover bg-top bg-no-repeat lg:rounded-br-[410px]"
      style={{ backgroundImage: `url(${BgHeader})` }}
    >
      {/* Decorative Corner Image */}
      <img
        src={Corner}
        alt="Decorative Corner"
        className="hidden lg:block absolute bottom-0 right-0 w-20 md:w-40 lg:w-80"
      />

      {/* Text Content */}
      <div className="container mx-auto h-full flex justify-start text-center items-center lg:items-end lg:text-start text-white ">
        <div className="w-full lg:w-1/2 space-y-4 lg:space-y-10 lg:pb-28">
          <h1 data-aos="fade-left" className="text-3xl md:text-6xl font-bold ">
           Guiding You Through Your Ayurvedic Journey
          </h1>
          
        </div>
      </div>
    </section>
  );
};

export default FAQHeader;
