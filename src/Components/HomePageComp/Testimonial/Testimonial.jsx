import React from "react";
import Nishit from "../../../assets/HomeAssets/Testimonial/NishitShah.png";
import Manisha from "../../../assets/HomeAssets/Testimonial/ManishaPatel.png";
import Ayush from "../../../assets/HomeAssets/Testimonial/AyusBhandari.png";
import TestBg from "../../../assets/HomeAssets/Testimonial/TestBg.svg";

const TestData = [
  {
    id: 1,
    img: Nishit,
    name: "Nishit Shah",
    text: "Dr. Priyanka Dodia is a true gem in the field of Ayurveda! Her exceptional expertise and personalized approach have helped me achieve optimal health and wellness. I highly recommend her to anyone seeking holistic care!",
    rate: 4,
  },
  {
    id: 2,
    img: Manisha,
    name: "Manisha Patel",
    text: "A Doctor Who Goes Above and Beyond: Gratitude for Dr. Priyanka's Exceptional Care! My mom's recent knee treatment was challenging, but Dr. Priyanka made it so much easier with her exceptional care and unwavering support.",
    rate: 5,
  },
  {
    id: 3,
    img: Ayush,
    name: "Ayush Bhandari",
    text: "A Doctor Who Goes Above and Beyond: Gratitude for Dr. Priyanka's Exceptional Care! My mom's recent knee treatment was challenging, but Dr. Priyanka made it so much easier with her exceptional care and unwavering support.",
    rate: 3,
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-12 space-y-12 relative">
      <img
      data-aos="fade-right" data-aos-duration="2000"
        src={TestBg}
        alt=""
        className="absolute bottom-0 pointer-events-none"
      />
      <h1 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary">
        Testimonial
      </h1>
      <div className="container pt-12 lg:pt-28 pb-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 gap-y-24">
        {TestData.map(({ id, img, name, text, rate }) => (
          <div data-aos="zoom-in" key={id} className=" relative felx items-start">
            <div className="bg-white p-5 space-y-4 shadow-lg">
              <div className="flex flex-col gap-y-2 justify-start items-start ">
                <div className="absolute right-0 p-3 bg-white  rounded-full -mt-20 2xl:-mt-28">
                  <img
                    src={img}
                    alt={name}
                    className="h-[120px]  2xl:h-36 rounded-full object-cover mx-auto pointer-events-none"
                  />
                </div>
                <h3 className="text-lg md:text-xl 2xl:text-2xl text-center font-bold text-primary">
                  {name}
                </h3>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < rate ? "⭐" : "☆"}</span>
                  ))}
                </div>
              </div>
              <p className=" text-gray-700 leading-tight xl:text-sm 2xl:text-base">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
