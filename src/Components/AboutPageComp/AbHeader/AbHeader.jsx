import React from "react";
import AbHeroBg from "../../../assets/AboutUsAssets/AbHeroBg.webp";
import Corner from "../../../assets/AboutUsAssets/corner.png";

const AbHeader = () => {
  return (
    <section
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
      <div className="container mx-auto h-full flex items-center px-4 sm:px-8">
        <div className="w-full md:w-3/5 lg:w-1/2 space-y-6 sm:space-y-10 text-white pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
            About Punarvasu Ayurveda
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
            Punarvasu provides holistic healing through <br className="hidden sm:block" />
            authentic Ayurvedic care and therapies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbHeader;
                