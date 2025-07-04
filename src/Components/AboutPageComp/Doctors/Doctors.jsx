import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import DoctorsImg from "../../../assets/AboutUsAssets/Doctors/DocBg.svg";
import drAnjali from "../../../assets/AboutUsAssets/Doctors/DrAnjali.svg";
import drRajeev from "../../../assets/AboutUsAssets/Doctors/DrRajeev.svg";
import BgImg from "../../../assets/AboutUsAssets/Philosophy/BgImg.svg";
import ShadowLight from "../../../assets/AboutUsAssets/Doctors/ShadowLight.svg";
import ShadowDark from "../../../assets/AboutUsAssets/Doctors/shadowDark.svg";
import vision from "../../../assets/AboutUsAssets/Doctors/Vision.svg";
import MissIon from "../../../assets/AboutUsAssets/Doctors/Mission.svg";

const Doctors = () => {
  return (
    <section
      className="py-28 space-y-10 relative z-10 overflow-hidden"
      id="doctors-section"
    >
      <img
        data-aos="fade-right"
        data-aos-duration="3000"
        src={DoctorsImg}
        alt=""
        className="absolute bottom-0 z-0"
      />
      {/* Section Heading */}
      <h1
        data-aos="fade-up"
        className="flex items-center justify-center text-5xl text-center font-bold text-secondary leading-tight relative z-10"
        id="doctors-heading"
      >
        Meet Our Doctors
        <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-32 h-[4px] bg-primary" />
      </h1>
      {/* Subheading */}
      <p
        data-aos="fade-up"
        className="text-center w-full max-w-3xl text-2xl mx-auto text-textColor z-10"
        id="doctors-subtext"
      >
        Experienced practitioners dedicated to authentic Ayurvedic healing
      </p>
      {/* Doctor Cards */}
      <div
        data-aos="fade-up"
        className="container px-8 py-16 sm:py-40 grid grid-cols-1 xl:grid-cols-2 w-full gap-10 xl:gap-40 z-0"
        id="doctors-cards"
      >
        {/* Doctor: Dr. Anjali */}
        <div
          className="bg-white p-5 sm:px-0 sm:py-8 rounded-3xl shadow-xl hover:scale-105 duration-300 transition-all flex flex-col sm:flex-row relative"
          id="dr-anjali-card"
        >
          <img
            src={BgImg}
            alt="BgLeaf"
            className="absolute bottom-0 left-5 h-32  pointer-events-none z-0"
          />

          <img
            src={drAnjali}
            alt=""
            className="-translate-x-24 sm:-translate-x-7 flex items-start mb-auto h-[110px] sm:h-auto"
          />
          <div className="space-y-3 text-textColor">
            <p className="text-primary text-2xl font-black">
              Dr. Anjali Sharma
            </p>
            <p>BAMS, MD – Ayurveda</p>
            <p>
              Chief Consultant | Panchkarma & Women's{" "}
              <br className="hidden lg:block" /> Health Specialist
            </p>
            <p>
              With over 15 years of clinical expertise, Dr. Anjali{" "}
              <br className="hidden lg:block" /> focuses on Panchkarma
              therapies, hormonal <br className="hidden lg:block" /> health, and
              Garbh Sanskar.
            </p>
            <p>
              "Healing is a collaboration — between nature, the doctor, and the
              patient's own awareness."
            </p>
          </div>
        </div>

        {/* Doctor: Dr. Rajeev */}
        <div
          className="bg-white p-5 sm:px-0 sm:py-8 rounded-3xl shadow-xl hover:scale-105 duration-300 transition-all flex flex-col sm:flex-row relative"
          id="dr-rajeev-card"
        >
          <img
            src={BgImg}
            alt="BgLeaf"
            className="absolute bottom-0 left-5 h-32  pointer-events-none z-0"
          />
          <img
            src={drRajeev}
            alt=""
            className="-translate-x-24 sm:-translate-x-7 flex items-start mb-auto h-[110px] sm:h-auto"
          />
          <div className="space-y-3 text-textColor">
            <p className="text-primary text-2xl font-black">Dr. Rajeev Patil</p>
            <p>BAMS</p>
            <p>
              Chief Consultant | Panchkarma & Women's{" "}
              <br className="hidden lg:block" />
              Pediatric & Preventive Ayurveda Specialist
            </p>
            <p>
              Dr. Rajeev leads Suvarnaprashan and child{" "}
              <br className="hidden lg:block" /> wellness, offering natural
              immunity care and <br className="hidden lg:block" /> developmental
              guidance for children.
            </p>
            <p>
              "A healthy childhood lays the foundation for a healthy nation."
            </p>
          </div>
        </div>
      </div>
      {/* Vision and Mission Cards */}
      <div
        data-aos="fade-up"
        id="vision-mission-cards"
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-20 px-4 md:px-8 lg:px-16 py-16 md:py-28 z-10"
      >
        {/* Vision Card */}
        <div
          id="vision-card"
          className="relative bg-white hover:bg-primary duration-300 group rounded-3xl shadow-md flex flex-col items-center text-center px-6 pt-28 pb-12 sm:px-10 sm:pt-28 sm:pb-16"
        >
          {/* Vision Icon */}
          <div className="absolute -top-16 sm:-top-32 translate-x-10">
            <img
              src={vision}
              alt="Vision Icon"
              className="w-40 sm:w-auto mx-auto"
            />
          </div>

          {/* Background swap */}
          <div className="mb-6">
            <img
              src={ShadowLight}
              alt="Light Shadow"
              className="group-hover:hidden duration-200 w-1/2 sm:w-auto mx-auto"
            />
            <img
              src={ShadowDark}
              alt="Dark Shadow"
              className="hidden group-hover:block duration-200 w-1/2 sm:w-auto mx-auto"
            />
          </div>

          {/* Heading */}
          <h1 className="text-primary group-hover:text-white text-3xl sm:text-4xl font-black mb-4">
            Our Vision
          </h1>

          {/* Description */}
          <p className="text-textColor group-hover:text-white text-sm sm:text-base leading-relaxed max-w-xl">
            To create a health-conscious society rooted in natural living and
            self-awareness, where Ayurveda is not just a treatment system — but
            a way of life.
          </p>
        </div>

        {/* Mission Card */}
        <div
          id="mission-card"
          className="relative bg-white hover:bg-primary duration-300 group rounded-3xl shadow-md flex flex-col items-center text-center px-6 pt-28 pb-12 sm:px-10 sm:pt-28 sm:pb-1 "
        >
          {/* Mission Icon */}
          <div className="absolute -top-16 sm:-top-40">
            <img
              src={MissIon}
              alt="Mission Icon"
              className="w-44 sm:w-auto mx-auto"
            />
          </div>

          {/* Background swap */}
          <div className="mb-6">
            <img
              src={ShadowLight}
              alt="Light Shadow"
              className="group-hover:hidden duration-200 w-1/2 sm:w-auto mx-auto"
            />
            <img
              src={ShadowDark}
              alt="Dark Shadow"
              className="hidden group-hover:block duration-200  w-1/2 sm:w-auto mx-auto"
            />
          </div>

          {/* Heading */}
          <h1 className="text-primary group-hover:text-white text-3xl sm:text-4xl font-black mb-4">
            Our Mission
          </h1>

          {/* Bullet Points */}
          <ul className="space-y-2 text-start max-w-xl mx-auto">
            {[
              "Offer authentic Ayurvedic treatments based on classical texts",
              "Educate about natural healing and preventive care",
              "Provide compassionate healing environment",
              "Center for Panchkarma and specialized care",
            ].map((item, index) => (
              <li
                key={index}
                className="text-textColor group-hover:text-white flex items-start gap-1 text-sm sm:text-base"
              >
                <IoMdCheckmark className="text-primary group-hover:text-white mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
