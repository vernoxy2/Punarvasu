import React from "react";
import Docters from "../../../assets/AboutUsAssets/docters.webp";

const Story = () => {
  return (
    <section className="py-14 hidden md:block ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary leading-tight">
        Our Story
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex flex-col justify-center items-end relative me-28">
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

        <div className="space-y-5 py-16 text-center lg:text-start p-9 lg:p-0 flex flex-col justify-center">
          <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary">
            Founded on Trust & Tradition
          </h1>
          <p className="text-textColor md:text-2xl font-medium lg:w-10/12">
            Punarvasu Ayurved Chikitsalayam was founded{" "}
            <br className="hidden lg:block" /> by Dr. Anjali Sharma and Dr.
            Rajeev Patil, two <br className="hidden lg:block" /> passionate
            practitioners with the goal of <br className="hidden lg:block" />
            returning to classical Ayurveda while addressing{" "}
            <br className="hidden lg:block" /> modern health challenges.
          </p>
          <p className="text-textColor md:text-2xl font-medium lg:w-10/12">
            With experience in both urban clinics and rural <br className="hidden lg:block"/> wellness camps, they
            created a center combining <br className="hidden lg:block"/> time-tested Panchkarma therapies,
            preventive <br className="hidden lg:block"/> child care, and women's wellness with sincerity <br className="hidden lg:block"/> and
            sattvik values.
          </p>
          <div className="flex gap-12 justify-center lg:justify-start">
            <div className="bg-primary text-white w-[240px] py-2 text-center space-y-1">
              <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl">
                5,000+
              </h1>
              <p>Patients Served</p>
            </div>
            <div className="bg-primary text-white w-[240px] py-2 text-center space-y-1">
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
