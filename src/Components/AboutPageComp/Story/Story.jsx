import React, { useEffect, useState, useRef } from "react";
import Docters from "../../../assets/AboutUsAssets/Docters.webp";
import StoryBg from "../../../assets/AboutUsAssets/StoryBg.svg";
import BgImg from "../../../assets/AboutUsAssets/BgImg.svg";

const Counter = ({ target, duration, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // only run when start = true

    let startVal = 0;
    const increment = target / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      startVal += increment;
      if (startVal >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(startVal));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target, duration]);

  return (
    <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl">
      {count.toLocaleString()} {suffix}
    </h1>
  );
};

const Story = () => {
  const [startCounter, setStartCounter] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.4 } // trigger when 40% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 space-y-10 hidden md:block relative overflow-hidden"
    >
      {/* Backgrounds */}
      <img
        data-aos="fade-left"
        data-aos-duration="2000"
        src={StoryBg}
        alt=""
        className="absolute h-[90%] right-0 z-0"
      />
      <img
        src={BgImg}
        alt=""
        className="absolute top-0 left-0 z-0 rotate-180"
      />

      {/* Title */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary leading-tight z-10"
      >
        Our Story
      </h1>

      <div className="xl:container xl:px-0 grid grid-cols-1 xl:grid-cols-2 gap-0 z-10">
        {/* Doctors Image */}
        <div className="flex items-center justify-center">
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            src={Docters}
            alt=""
            className="w-[90%] mt-auto mr-auto h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-5 py-16 text-center xl:text-start p-9 lg:p-0 flex flex-col mt-32 justify-center z-10">
          <h1
            data-aos="fade-down"
            className="sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary"
          >
            Founded on Trust & Tradition
          </h1>
          <p
            data-aos="fade-down"
            className="text-textColor md:text-xl 2xl:text-2xl font-medium 2xl:w-10/12"
          >
           Founded in 2015 by Dr. Yogesh and later joined by Priyanka, Punarvasu Ayurveda Clinic was among the very first dedicated Ayurveda clinics in Valsad. Rooted in the classical principles of Ayurveda, our care goes beyond symptoms, focusing on prevention, personalization, and restoring harmony of mind, body, and spirit. Believing every individual is unique, we design tailored treatments—making our clinic a trusted destination for authentic healing and holistic wellness.
          </p>
          {/* <p
            data-aos="fade-down"
            className="text-textColor md:text-xl 2xl:text-2xl font-medium lg:w-10/12"
          >
            We don’t treat diseases — we treat individuals. Every patient is
            unique, and so is their treatment plan.
          </p> */}

          {/* Counters */}
          <div
            data-aos="fade-down"
            className="flex gap-12 justify-center xl:justify-start"
          >
            <div className="bg-primary text-white w-[240px] py-3 text-center space-y-1 shadow-md">
              <Counter target={5000} duration={2000} suffix="+" start={startCounter} />
              <p>Patients Served</p>
            </div>
            <div className="bg-primary text-white w-[240px] py-3 text-center space-y-1 shadow-md">
              <Counter target={10} duration={2000} suffix="+" start={startCounter} />
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;