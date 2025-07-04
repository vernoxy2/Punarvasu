import React from "react";
import HeroBg from "../../../assets/HomeAssets/HeadingBg.png";
import Coener from "../../../assets/HomeAssets/corner.png";

const style = {
  backgroundImage: `url(${HeroBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Heading = () => {
  return (
    <section
    data-aos="fade"
      style={style}
      className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] lg:rounded-br-[400px]"
    >
      {/* Corner image positioned bottom-right */}
      <img
        src={Coener}
        alt="Decorative Corner"
        className="hidden lg:block absolute bottom-0 right-0 w-20 md:w-40 lg:w-80"
      />

      {/* Text content */}
      <div className="container mx-auto h-full flex justify-end text-center items-center lg:text-end text-white px-4">
        <div className="w-full lg:w-1/2 space-y-4 lg:space-y-12 lg:pb-28">
          <h1 data-aos="fade-left" className="text-3xl md:text-6xl font-bold ">
            Ancient Remedies, Timeless Wellness.
          </h1>
          <p data-aos="fade-left" className="text-base md:text-2xl px-2 font-medium leading-relaxed">
            Discover the power of Ayurveda with natural herbs, oils,{" "}
            <br className="hidden lg:block" /> and powders crafted for holistic
            healing. Embrace traditional <br className="hidden lg:block" />{" "}
            remedies that romote wellness, balance, and a healthier{" "}
            <br className="hidden lg:block" /> lifestyle—rooted in ancient
            Indian wisdom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heading;
