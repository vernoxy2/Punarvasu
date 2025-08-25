import React, { useState, useEffect } from "react";
import HeroBg from "../../../assets/HomeAssets/HeadingBg.png";
import HeroBg1 from "../../../assets/HomeAssets/HeadingBg2.webp";
import HeroBg2 from "../../../assets/HomeAssets/HeadingBg3.webp";
import HeroText1 from "../../../assets/HomeAssets/HeadingText.png";
import HeroText2 from "../../../assets/HomeAssets/HeadingText2.png";
import HeroText3 from "../../../assets/HomeAssets/HeadingText3.png";
import Coener from "../../../assets/HomeAssets/corner.png";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";
import { MdAddCall } from "react-icons/md";
import { FaCalendarPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ConsultationPopup from "../../../ShareIngComp/ConsultationPopup/BookConsultation";

const Heading = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { bg: HeroBg, text: HeroText1 },
    { bg: HeroBg1, text: HeroText2 },
    { bg: HeroBg2, text: HeroText3 },
  ];

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[640px] lg:rounded-br-[320px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            currentIndex === i ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
        </div>
      ))}

      {/* Corner Decoration */}
      <img
        src={Coener}
        alt="Decorative Corner"
        className="absolute bottom-0 right-0 "
      />
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex justify-end text-center items-center lg:text-end text-white">
        <div className="w-full xl:w-7/12 space-y-14 lg:space-y-20 lg:pb-28">
          {/* Slide Text */}
          <div className="relative h-32 flex items-center justify-center lg:justify-start">
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.text}
                alt="Hero Text"
                className={`absolute max-w-[80%] sm:max-w-[70%] transition-all duration-700 ease-in-out ${
                  currentIndex === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="relative z-20 flex flex-col md:flex-row justify-center xl:justify-start gap-5 md:gap-8">
            <PrimaryBtn
              type="button"
              onClick={() => setPopupOpen(true)}
              className="bg-white text-primary rounded-xl gap-2 md:gap-3 hover:text-white hover:bg-primary duration-300"
            >
              <FaCalendarPlus className="text-xl sm:text-3xl" />
              Book Consultation
            </PrimaryBtn>

            <PrimaryBtn className="bg-white text-primary rounded-xl gap-2 md:gap-3 hover:text-white hover:bg-primary duration-300">
              <Link to="tel:07947112761" className="flex items-center gap-x-2">
                <MdAddCall className="text-xl sm:text-3xl" />
                Call Now
              </Link>
            </PrimaryBtn>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/70 hover:scale-110 transition z-20 hidden md:block"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/70 hover:scale-110 transition z-20 hidden md:block"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === i ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Popup */}
      <ConsultationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  );
};

export default Heading;
