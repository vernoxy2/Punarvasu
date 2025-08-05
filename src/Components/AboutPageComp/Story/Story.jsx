import React from "react";
import Docters from "../../../assets/AboutUsAssets/Docters.webp";
import StoryBg from "../../../assets/AboutUsAssets/StoryBg.svg";

const Story = () => {
  return (
    <section className="py-14 spayce-y-10 hidden md:block relative overflow-hidden">
      <img
        data-aos="fade-left"
        data-aos-duration="2000"
        src={StoryBg}
        alt=""
        className="absolute right-0 z-0"
      />
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary leading-tight z-10"
      >
        Our Story
      </h1>
      <div className="container xl:px-0 grid grid-cols-1 xl:grid-cols-2 gap-0 z-10">
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-end relative xl:me-28 z-10"
        >
          {/* Docters Image */}
          <img
            src={Docters}
            alt="Docters"
            className="absolute top-1/2  -translate-y-[290px] z-20 max-h-[590px] object-contain"
          />

          {/* Bottom Layer */}
          <div className="bg-secondary rounded-e-3xl shadow-inner w-full py-52 border-[10px] border-white translate-y-[200px] -translate-x-5 z-10" />

          {/* Top Layer */}
          <div className="bg-primary rounded-e-3xl shadow-inner w-full py-52 -mt-48 relative z-0" />
        </div>

        <div className="space-y-5 py-16 text-center xl:text-start p-9 lg:p-0 flex flex-col mt-32 justify-center z-10">
          <h1
            data-aos="fade-down"
            className="sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary"
          >
            Founded on Trust & Tradition
          </h1>
          <p
            data-aos="fade-down"
            className="text-textColor md:text-xl 2xl:text-2xl font-medium 2xl:w-10/12"
          >
            We follow the Basic principles of Ayurveda as described in the
            classical Samhitas, offering care that goes beyond symptomatic
            management. Our approach is preventive, personalized, and rooted in
            Ayurveda’s core belief: that health is a natural state when the
            mind, body, and spirit are in harmony.
          </p>
          <p
            data-aos="fade-down"
            className="text-textColor md:text-xl 2xl:text-2xl font-medium lg:w-10/12"
          >
            We don’t treat diseases — we treat individuals. Every patient is
            unique, and so is their treatment plan.
          </p>
          <div
            data-aos="fade-down"
            className="flex gap-12 justify-center xl:justify-start"
          >
            <div className="bg-primary text-white w-[240px] py-3 text-center space-y-1">
              <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl">
                5,000+
              </h1>
              <p>Patients Served</p>
            </div>
            <div className="bg-primary text-white w-[240px] py-3 text-center space-y-1">
              <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl">
                15+
              </h1>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
