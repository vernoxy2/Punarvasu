import React from "react";
import SuvarnaprashanImg from "../../../assets/HomeAssets/SuvarnaprashanImg.webp";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";

const Suvarnaprashan = () => {
  return (
    <section className="py-10 md:py-16 space-y-8 md:space-y-12">
      <div className="container grid grid-cols-1 xl:grid-cols-2 gap-4 gap-y-10">
        {/* text section */}
        <div className="space-y-8 my-auto text-center xl:text-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">
            Get Schedule <br className="hidden xl:block" /> of Suvarnaprashan
          </h1>
          <div className="bg-primary h-1 w-1/2 xl:w-48 mx-auto xl:mx-0"></div>
          <PrimaryBtn
            className="bg-primary text-white mx-auto xl:mx-0"
            onClick={() =>
              window.open("/suvarnaprashan-schedule.pdf", "_blank")
            }
          >
            Get Schedule
          </PrimaryBtn>
        </div>

        {/* image section */}
        <div>
          <img
            src={SuvarnaprashanImg}
            alt="Suvarnaprashan Schedule"
            className="mx-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default Suvarnaprashan;
