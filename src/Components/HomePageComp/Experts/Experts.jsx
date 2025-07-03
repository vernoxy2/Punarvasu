import React from "react";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";
import Expert1 from "../../../assets/HomeAssets/Experts/doctor1.png";
import Expert2 from "../../../assets/HomeAssets/Experts/doctor2.png";
import ExpertBg from "../../../assets/HomeAssets/Experts/ExpertBg.png";

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
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary">
        Meet Our Experts
      </h1>

      {/* Content Wrapper */}
      <div className="bg-primary/20 border-y border-black/30 shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Expert 1 */}
          <div style={style} className="w-full  lg:w-5/12 relative ">
            <img
              src={Expert1}
              alt="Dr. Rajeev Patil"
              className="h-[500px] mx-auto object-contain pointer-events-none"
            />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 text-center w-11/12 sm:w-3/4 md:w-3/5 p-4 rounded shadow">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Dr. Rajeev Patil
              </h2>
              <p className="text-sm md:text-base text-gray-700 ">
                Pediatric & Preventive Ayurveda Expert <br />
                <span className="italic">
                  “Early care leads to lifelong health.”
                </span>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="my-auto">
            <PrimaryBtn className="text-white ">Learn More</PrimaryBtn>
          </div>

          {/* Expert 2 */}
          <div style={style} className="w-full lg:w-5/12 relative ">
            <img
              src={Expert2}
              alt="Dr. Sneha Joshi"
              className="h-[500px] mx-auto object-contain pointer-events-none"
            />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 text-center w-11/12 sm:w-3/4 md:w-3/5 p-4 rounded shadow">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Dr. Sneha Joshi
              </h2>
              <p className="text-sm md:text-base text-gray-700 ">
                Women's Wellness & Panchakarma Specialist <br />
                <span className="italic">
                  “Harmony through healing and balance.”
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
