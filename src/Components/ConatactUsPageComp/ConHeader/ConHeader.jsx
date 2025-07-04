import React from "react";
import BgHeader from "../../../assets/ContactUsAssets/Header/ContHeader.webp";
import Corner from "../../../assets/ContactUsAssets/Header/corner.png";

const ConHeader = () => {
  return (
    <section
      data-aos="fade"
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-cover bg-center bg-no-repeat lg:rounded-br-[400px]"
      style={{ backgroundImage: `url(${BgHeader})` }}
    >
      {/* Decorative Corner Image */}
      <img
        src={Corner}
        alt="Decorative Corner"
        className="hidden lg:block absolute bottom-0 right-0 w-20 md:w-40 lg:w-80"
      />

      {/* Text Content */}
      <div className="container mx-auto h-full flex justify-end text-center items-center lg:text-end text-white px-4">
        <div className="w-full lg:w-1/2 space-y-4 lg:space-y-12 lg:pb-28">
          <h1 data-aos="fade-left" className="text-3xl md:text-6xl font-bold ">
            Have Questions About <br className="hidden lg:block" /> Your Health?
          </h1>
          <p data-aos="fade-left" className="text-base md:text-2xl font-medium leading-relaxed">
            Connect with our Ayurvedic experts for natural healing,{" "}
            <br className="hidden lg:block" /> personalized care, and holistic
            wellness guidance today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConHeader;
