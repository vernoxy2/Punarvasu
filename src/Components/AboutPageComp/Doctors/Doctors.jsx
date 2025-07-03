import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import DoctorsImg from "../../../assets/AboutUsAssets/Doctors/DocBg.svg";
import drAnjali from "../../../assets/AboutUsAssets/Doctors/DrAnjali.svg";
import drRajeev from "../../../assets/AboutUsAssets/Doctors/DrRajeev.svg";

const Doctors = () => {
  return (
    <section className="py-28 space-y-10 relative z-10 overflow-hidden" id="doctors-section">
      <img src={DoctorsImg} alt="" className="absolute bottom-0 z-0" />
      
      {/* Section Heading */}
      <h1 className="flex items-center justify-center text-5xl text-center font-bold text-secondary leading-tight relative z-10" id="doctors-heading">
        Meet Our Doctors
        <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-32 h-[4px] bg-primary" />
      </h1>

      {/* Subheading */}
      <p className="text-center w-full max-w-3xl text-2xl mx-auto text-textColor z-10" id="doctors-subtext">
        Experienced practitioners dedicated to authentic Ayurvedic healing
      </p>

      {/* Doctor Cards */}
      <div className="container grid grid-cols-1 xl:grid-cols-2 w-full gap-10 xl:gap-40 z-0" id="doctors-cards">

        {/* Doctor: Dr. Anjali */}
        <div className="bg-white py-8 rounded-xl shadow-md hover:scale-105 duration-300 transition-all flex flex-col sm:flex-row" id="dr-anjali-card">
          <img src={drAnjali} alt="" className="-translate-x-7 flex items-start mb-auto" />
          <div className="space-y-3 text-textColor">
            <p className="text-primary text-2xl font-black">Dr. Anjali Sharma</p>
            <p>BAMS, MD – Ayurveda</p>
            <p>
              Chief Consultant | Panchkarma & Women's{" "}
              <br className="hidden lg:block" /> Health Specialist
            </p>
            <p>
              With over 15 years of clinical expertise, Dr. Anjali{" "}
              <br className="hidden lg:block" /> focuses on Panchkarma therapies, hormonal <br className="hidden lg:block" /> health, and Garbh Sanskar.
            </p>
            <p>
              "Healing is a collaboration — between nature, the doctor, and the patient's own awareness."
            </p>
          </div>
        </div>

        {/* Doctor: Dr. Rajeev */}
        <div className="bg-white py-8 rounded-xl shadow-md hover:scale-105 duration-300 transition-all flex" id="dr-rajeev-card">
          <img src={drRajeev} alt="" className="-translate-x-7 flex items-start mb-auto" />
          <div className="space-y-3 text-textColor">
            <p className="text-primary text-2xl font-black">Dr. Rajeev Patil</p>
            <p>BAMS</p>
            <p>
              Chief Consultant | Panchkarma & Women's{" "}
              <br className="hidden lg:block" />Pediatric & Preventive Ayurveda Specialist
            </p>
            <p>
              Dr. Rajeev leads Suvarnaprashan and child <br className="hidden lg:block" /> wellness, offering natural immunity care and <br className="hidden lg:block" /> developmental guidance for children.
            </p>
            <p>
              "A healthy childhood lays the foundation for a healthy nation."
            </p>
          </div>
        </div>
      </div>

      {/* Vision and Mission Cards */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 w-full gap-6 md:py-40 z-10" id="vision-mission-cards">

        {/* Vision Card */}
        <div className="bg-white hover:bg-primary duration-300 group py-8 rounded-3xl shadow-md flex flex-col items-center pt-40 p-28 z-10" id="vision-card">
          <h1 className="text-primary group-hover:text-white text-4xl font-black">Our Vision</h1>
          <p className="text-textColor group-hover:text-white mt-3">
            To create a health-conscious society rooted in natural living and self-awareness, 
            where Ayurveda is not just a treatment system — but a way of life.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white hover:bg-primary duration-300 group py-8 rounded-3xl shadow-md flex flex-col items-center text-center pt-40 z-10" id="mission-card">
          <h1 className="text-primary group-hover:text-white text-4xl font-black mb-4">Our Mission</h1>
          <ul className="space-y-[2px]">
            {[
              "Offer authentic Ayurvedic treatments based on classical texts",
              "Educate about natural healing and preventive care",
              "Provide compassionate healing environment",
              "Center for Panchkarma and specialized care",
            ].map((item, index) => (
              <li key={index} className="text-textColor group-hover:text-white flex gap-2">
                <IoMdCheckmark className="text-primary group-hover:text-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Doctors;
