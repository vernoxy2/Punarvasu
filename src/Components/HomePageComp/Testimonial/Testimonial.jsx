import React from "react";
import Nishit from "../../../assets/HomeAssets/Testimonial/NishitShah.png";
import Manisha from "../../../assets/HomeAssets/Testimonial/ManishaPatel.png";
import Ayush from "../../../assets/HomeAssets/Testimonial/AyusBhandari.png";
import TestBg from "../../../assets/HomeAssets/Testimonial/TestBg.svg"

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
    <section className="py-12 space-y-12 relative">
        <img src={TestBg} alt="" className="absolute bottom-0" />
      <h1 className="text-5xl text-center font-bold text-secondary">
        Testimonials
      </h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {TestData.map(({ id, img, name, text, rate }) => (
          <div
            key={id}
            className="relative p-6 shadow hover:shadow-lg transition-all duration-300 space-y-4"
          >
           <div className="absolute right-0 p-3 bg-white border rounded-full -mt-20">
             <img
              src={img}
              alt={name}
              className="w-28 h-28 rounded-full object-cover mx-auto "
            />
           </div>
            <div className="flex flex-col justify-start items-start">
                <h3 className="text-xl text-center font-semibold text-primary">
              {name}
            </h3>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                  <span key={i}>
                  {i < rate ? "⭐" : "☆"}
                </span>
              ))}
            </div>
            </div>
              <p className="text-sm text-gray-700">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
