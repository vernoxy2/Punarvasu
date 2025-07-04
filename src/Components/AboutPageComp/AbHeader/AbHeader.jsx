import React from "react";
import AbHeroBg from "../../../assets/AboutUsAssets/AbHeroBg.webp";
import Corner from "../../../assets/AboutUsAssets/corner.png";

const AbHeader = () => {
  return (
    <section data-aos="fade"
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-cover bg-center bg-no-repeat lg:rounded-br-[400px]"
      style={{ backgroundImage: `url(${AbHeroBg})` }}
    >
      {/* Decorative Corner Image */}
      <img
        src={Corner}
        alt="Decorative Corner"
        className="hidden lg:block absolute bottom-0 right-0 w-20 md:w-40 lg:w-80 pointer-events-none"
      />

      {/* Text Content */}
      <div className="container mx-auto h-full flex text-center items-center lg:text-start text-white px-4">
        <div className="w-full lg::w-1/2 space-y-4 lg:space-y-12  lg:pb-28">
          <h1 className="text-3xl md:text-6xl font-bold ">
            About Punarvasu <br className="hidden lg:block"/> Ayurveda
          </h1>
          <p className="text-base md:text-2xl font-medium leading-relaxed">
            Punarvasu provides holistic healing through <br className="hidden lg:block"/> authentic Ayurvedic care and therapies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbHeader;
                