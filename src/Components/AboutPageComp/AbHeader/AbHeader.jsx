import React from "react";
import AbHeroBg from "../../../assets/AboutUsAssets/AbHeroBg.webp";
import Coener from "../../../assets/AboutUsAssets/corner.png";

const style = {
  backgroundImage: `url(${AbHeroBg})`,
  backgroundSize: "cover",
  backgroundPosition: "start",
  backgroundRepeat: "no-repeat",
  height: "800px",
};

const AbHeader = () => {
  return (
    <div>
      <section
        style={style}
        className="relative py-12 md:py-32 lg:rounded-br-[400px]"
      >
        {/* Corner image positioned bottom-right */}
        <img
          src={Coener}
          alt="Decorative Corner"
          className="hidden lg:block absolute bottom-0 right-0 w-24 md:w-80"
        />

        {/* Text content */}
        <div className="container mx-auto h-full flex justify-start items-center text-white px-4">
          <div className="w-full md:w-1/2 space-y-12 text-left pb-28">
            <h1 className="text-3xl md:text-6xl font-bold ">
              About Punarvasu Ayurveda
            </h1>
            <p className="text-base md:text-2xl font-medium leading-relaxed">
              Punarvasu provides holistic healing through <br /> authentic Ayurvedic
              care and therapies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbHeader;
