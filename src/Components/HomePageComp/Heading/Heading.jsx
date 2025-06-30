import React from "react";
import HeroBg from "../../../assets/HomeAssets/HeadingBg.png";
import Coener from "../../../assets/HomeAssets/corner.png";

const style = {
  backgroundImage: `url(${HeroBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "800px",
};

const Heading = () => {
  return (
    <section style={style} className="relative py-12 md:py-32 lg:rounded-br-[400px]">
      {/* Corner image positioned bottom-right */}
      <img
        src={Coener}
        alt="Decorative Corner"
        className="hidden lg:block absolute bottom-0 right-0 w-24 md:w-80"
      />

      {/* Text content */}
      <div className="container mx-auto h-full flex justify-end items-center text-white px-4">
        <div className="w-full md:w-1/2 space-y-12 text-right pb-28">
          <h1 className="text-3xl md:text-6xl font-bold ">
            Ancient Remedies, Timeless Wellness.
          </h1>
          <p className="text-base md:text-2xl font-medium leading-relaxed">
            Discover the power of Ayurveda with natural herbs, oils,<br /> and powders
            crafted for holistic healing. Embrace traditional <br /> remedies that
            promote wellness, balance, and a healthier <br /> lifestyle—rooted in
            ancient Indian wisdom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heading;
