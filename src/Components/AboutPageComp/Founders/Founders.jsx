import React from "react";
import Namaste from "../../../assets/AboutUsAssets/Founders/Namaste.svg";
import Priyanka from "../../../assets/AboutUsAssets/Founders/Priyanka.svg";
import Yogesh from "../../../assets/AboutUsAssets/Founders/Yogesh.svg";
import comma from "../../../assets/AboutUsAssets/Founders/comaa.svg";
import BgImg from "../../../assets/AboutUsAssets/Founders/BgImg.svg";

const Founders = () => {
  return (
    <section className="py-16 space-y-12 relative">
      <img
        data-aos="fade-up"
        data-aos-duration="3000"
        src={BgImg}
        alt=""
        className="absolute -bottom-10 pointer-none "
      />
      <div className="flex flex-col gap-y-12 items-center">
        <img
          data-aos="fade"
          src={Namaste}
          alt=""
          className="pointer-events-none"
        />
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary leading-tight"
        >
          A Note from the Founders
        </h1>
      </div>
      <div
        data-aos="fade-up"
        className="container w-10/12 bg-primary/10 py-14 pb-24 space-y-14 rounded-3xl relative"
      >
        <img src={comma} alt="" className="absolute top-10 left-10 pointer-events-none h-10 md:h-auto" />
        <img
          src={comma}
          alt=""
          className="absolute bottom-10 right-10 scale-x-[-1] scale-y-[-1] pointer-events-none h-10 md:h-auto"
        />
        <p className="text-textColor text-lg md:text-2xl font-medium text-center">
          "Punarvasu is more than a center — it is a return to natural living, a
          journey toward self- <br className="hidden 2xl:block" /> awareness and
          long-lasting health. Whether you seek relief, balance, or prevention,{" "}
          <br className="hidden 2xl:block" /> we're here to walk with you on the
          Ayurvedic path."
        </p>
        <div className="flex items-center justify-center gap-16">
          <div className="space-y-3 flex flex-col items-center">
            <img src={Yogesh} alt="" className="pointer-events-none bg-white rounded-full" />
            <div className=" text-center">
              <h1 className="md:text-2xl font-black text-primary">
               Dr. Yogesh H. Desai
              </h1>
              <p className="font-medium text-textColor">Co-Founder</p>
            </div>
          </div>
          <div className="space-y-3 flex flex-col items-center">
            <img src={Priyanka} alt="" className="pointer-events-none" />
            <div className=" text-center">
              <h1 className="md:text-2xl font-black text-primary">
               Dr. Priyanka V. Dodia
              </h1>
              <p className="font-medium text-textColor">
                Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
