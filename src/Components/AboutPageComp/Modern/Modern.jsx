import React from "react";
import ModernImg from "../../../assets/AboutUsAssets/Modern.webp";

const Modern = () => {
  return (
    <section className="py-12 space-y-12">
      <h1 className="text-5xl text-center font-bold text-secondary leading-tight">
        Reviving Classical Ayurveda <br /> for Modern Lives
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-20">
        {/* Left Side with Image */}
        <div className="bg-primary/10 rounded-md shadow-inner flex justify-center p-6">
          <img
            src={ModernImg}
            alt="Modern Ayurveda"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Side with Text */}
        <div className="text-textColor space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
            At Punarvasu Ayurved Chikitsalayam
          </h2>
          <p className="text-lg lg:text-xl text-justify">
            We believe Ayurveda is not merely a system of medicine — it is a
            profound science of life. Founded with the vision of bringing
            authentic, classical Ayurvedic healing into the hands of every
            individual, our center offers a space where tradition, compassion,
            and science come together to restore balance and vitality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modern;
