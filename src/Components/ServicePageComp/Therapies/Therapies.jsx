import React from "react";
import TherapiesImg from "../../../assets/ServiceAssets/TherapiesImg.webp";
import Check from "../../../assets/ServiceAssets/Check.svg";

const Therapies = () => {
  return (
    <section data-aos="fade" className="py-14 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        <div>
          <img src={TherapiesImg} className="pointer-events-none" />
        </div>
        <div className="">
          {/* Heading and Paragraph */}
          <div className="space-y-4 text-center lg:text-start ">
            <h1 className="text-[34px] sm:text-4xl lg:text-[42px] font-bold text-primary">
              Tailored Therapies Just for You
            </h1>
            <p className="lg:text-2xl font-medium text-textColor w-11/12 mx-auto lg:mx-0">
              Every treatment at Punarvasu is customized based on individual
              Prakriti (body constitution). Our experienced doctors assess your
              unique needs and create personalized healing plans.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="mt-12 space-y-1 text-center lg:text-start">
            {[
              "Detailed Prakriti Assessment",
              "Customized Treatment Plans",
              "Regular Progress Monitoring",
            ].map((text, index) => (
              <p
                key={index}
                className="flex justify-center lg:justify-start gap-x-3 items-center lg:text-2xl font-medium text-textColor"
              >
                <span>
                  <img src={Check} alt="Check Icon" className="w-5 h-5" />
                </span>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Therapies;
