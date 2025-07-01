import React from "react";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";
import Expert1 from "../../../assets/HomeAssets/Experts/doctor1.png";
import Expert2 from "../../../assets/HomeAssets/Experts/doctor2.png";
import ExpertBg from "../../../assets/HomeAssets/Experts/ExpertBg.png";

const style = {
  backgroundImage: `url(${ExpertBg})`,
  backgroundSize: "",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  //   height: "800px",
};

const Experts = () => {
  return (
    <section className="pt-14 space-y-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary ">
        Meet Our Experts
      </h1>
      <div  className="bg-primary/20 pt-5 border-y border-spacing-x-2 border-black shadow-xl ">
        <div className="container md:flex gap-5 px-4">
          <div style={style} className="w-full sm:w-8/12 md:w-6/12 lg:w-5/12 relative px-4 ">
            <img
              src={Expert1}
              alt="Dr. Rajeev Patil"
              className="flex h-[500px] mx-auto pointer-events-none"
            />

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 text-center w-11/12 sm:w-3/4 md:w-3/5 p-4 rounded shadow">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                Dr. Rajeev Patil
              </h1>
              <p className="text-sm sm:text-base text-gray-700 mt-1">
                Pediatric & Preventive Ayurveda Expert <br />
                <span className="italic">
                  "Early care leads to lifelong health."
                </span>
              </p>
            </div>
          </div>

          <PrimaryBtn className="h-1/2 my-auto mx-auto text-white ">Leron More</PrimaryBtn>
          <div style={style} className="w-full sm:w-8/12 md:w-6/12 lg:w-5/12 relative px-4 ">
            <img
              src={Expert2}
              alt="Dr. Rajeev Patil"
              className=" h-[500px] mx-auto pointer-events-none"
            />

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/80 text-center w-11/12 sm:w-3/4 md:w-3/5 p-4 rounded shadow">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                Dr. Rajeev Patil
              </h1>
              <p className="text-sm sm:text-base text-gray-700 mt-1">
                Pediatric & Preventive Ayurveda Expert <br />
                <span className="italic">
                  "Early care leads to lifelong health."
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
