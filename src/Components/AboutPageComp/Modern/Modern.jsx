import React from "react";
import ModernImg from "../../../assets/AboutUsAssets/Modern.webp";

const Modern = () => {
  return (
    <section className="py-12 space-y-12 overflow-x-hidden">
      <h1 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary leading-tight">
        Reviving Classical Ayurveda <br /> for Modern Lives
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side with Image */}
        <div className="bg-primary/10 rounded-md shadow-inner flex justify-center lg:justify-end p-6">
          <img
          data-aos='zoom-out'
            src={ModernImg}
            alt="Modern Ayurveda"
            className="lg:me-14"
          />
        </div>

        {/* Right Side with Text */}
        <div data-aos="fade-right" className="text-textColor space-y-10 text-center lg:text-start px-10">
          <h2 className="text-3xl lg:text-5xl font-black leading-snug">
            At Punarvasu Ayurveda <br className="hidden md:block"/> Chikitsalayam
          </h2>
          <p className="text-lg lg:text-2xl font-medium ">
            We believe Ayurveda is not merely a system of medicine <br className="hidden 2xl:block"/> — it is a
            profound science of life. Founded with the <br className="hidden 2xl:block"/> vision of bringing 
            <span className="font-black"> authentic, classical Ayurvedic healing</span> <br className="hidden 2xl:block"/> into the hands of every
            individual, our center offers a <br className="hidden 2xl:block"/> space where tradition, compassion,
            and science <br className="hidden 2xl:block"/> come together to restore balance and vitality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modern;
