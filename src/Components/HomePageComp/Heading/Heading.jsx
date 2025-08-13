import React, { useState } from "react";
import HeroBg from "../../../assets/HomeAssets/HeadingBg.png";
import HeroText from "../../../assets/HomeAssets/HeadingText.png";
import Coener from "../../../assets/HomeAssets/corner.png";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";
import { MdAddCall } from "react-icons/md";
import { FaCalendarPlus } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Correct import
import ConsultationPopup from "../../../ShareIngComp/ConsultationPopup/BookConsultation";

const style = {
  backgroundImage: `url(${HeroBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Heading = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section
      data-aos="fade"
      style={style}
      className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[640px] lg:rounded-br-[320px]"
    >
      {/* Corner image */}
      <img
        src={Coener}
        alt="Decorative Corner"
        className="hidden lg:block absolute bottom-0 right-0 w-20 md:w-40 lg:w-60"
      />

      {/* Content */}
      <div className="container mx-auto h-full flex justify-end text-center items-center lg:text-end text-white">
        <div className="w-full xl:w-7/12 space-y-14 lg:space-y-20 lg:pb-28">
          <img src={HeroText} alt="" className="ml-auto pointer-events-none" />

          {/* Buttons */}
          <div className="md:flex justify-center xl:justify-start md:gap-8 space-y-5 md:space-y-0">
            <PrimaryBtn
              type="button"
              onClick={() => setPopupOpen(true)}
              className="bg-white text-primary rounded-xl gap-2 md:gap-3 mx-auto md:mx-0 hover:text-white duration-300"
            >
              <FaCalendarPlus className="text-xl sm:text-3xl" />
              Book Consultation
            </PrimaryBtn>

            <PrimaryBtn
              className="bg-white text-primary rounded-xl gap-2 md:gap-3 mx-auto md:mx-0 hover:text-white duration-300"
            >
              <Link to="tel:07947112761" className="flex gap-x-2">
                <MdAddCall className="text-xl sm:text-3xl" />
                Call Now
              </Link>
            </PrimaryBtn>
          </div>
        </div>
      </div>

      {/* Popup placed at the bottom for clarity */}
      <ConsultationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  );
};

export default Heading;
