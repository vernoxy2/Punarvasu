import React from "react";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";
import Expert1 from "../../../assets/HomeAssets/Experts/doctor1.png";
import Expert2 from "../../../assets/HomeAssets/Experts/doctor2.png";
import ExpertBg from "../../../assets/HomeAssets/Experts/ExpertBg.png";
import { Link } from "react-router-dom";

const style = {
  backgroundImage: `url(${ExpertBg})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
};

const Experts = () => {
  return (
    <section className="pt-14 space-y-12">
      {/* Heading */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary"
      >
        Meet Our Experts
      </h1>

      {/* Content Wrapper */}
      <div className="bg-primary/20 border-y border-black/30 shadow-xl">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-y-8 xl:gap-x-2 py-5">
          {/* Expert 1 */}
          <div
            data-aos="zoom-in"
            style={style}
            className="relative w-full max-w-md xl:w-5/12 h-[400px] md:h-[500px] "
          >
            <img
              src={Expert1}
              alt="Dr. Rajeev Patil"
              className="h-full w-full object-contain pointer-events-none"
            />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 text-center w-11/12 sm:w-3/4 md:w-3/5 p-4 rounded shadow">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Dr. Yogesh H. Desai
              </h2>
              <p className="text-sm md:text-base text-gray-700">
               Chief Ayurveda Consultant <br />
                <span className="italic">"Early care leads to lifelong health."</span>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="my-auto">
            <Link to="/about#doctors-heading">
              <PrimaryBtn className="text-white">Learn More</PrimaryBtn>
            </Link>
          </div>

          {/* Expert 2 */}
          <div
            data-aos="zoom-in"
            style={style}
            className="relative w-full max-w-md xl:w-5/12 h-[400px] md:h-[500px]"
          >
            <img
              src={Expert2}
              alt="Dr. Sneha Joshi"
              className="h-full w-full object-contain pointer-events-none"
            />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 text-center w-11/12 sm:w-3/4 md:w-3/5 p-4 rounded shadow">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Dr. Priyanka V. Dodia
              </h2>
              <p className="text-sm md:text-base text-gray-700">
                Senior Ayurveda Consultant<br />
                <span className="italic">“Healing is a journey that begins from within.”</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
