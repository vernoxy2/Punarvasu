import React from "react";
import ServiceBg from "../../../assets/ServiceAssets/ServiceBg.webp";
import Corner from "../../../assets/ServiceAssets/corner.png";
import HeroText from "../../../assets/ServiceAssets/HeadText.webp";

const SerHeader = () => {
  return (
    <section
      data-aos="fade"
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[640px] bg-cover bg-center bg-no-repeat lg:rounded-br-[320px]"
      style={{ backgroundImage: `url(${ServiceBg})` }}
    >
      {/* Decorative Corner Image */}
      <img
        src={Corner}
        alt="Decorative Corner"
        className="hidden lg:block absolute bottom-0 right-0 w-20 md:w-40 lg:w-80"
      />
      <div className="container mr-auto h-full flex flex-col xl:flex-row justify-center items-center lg:text-end text-white">
        <div className="w-full xl:w-6/12"></div>
        <div className="w-full xl:w-6/12 space-y-14 lg:space-y-20 lg:pb-28">
          <img src={HeroText} alt="" className=" mx-auto xl:mr-auto pointer-events-none" />
        </div>
      </div>

      {/* Text Content */}
    </section>
  );
};

export default SerHeader;
