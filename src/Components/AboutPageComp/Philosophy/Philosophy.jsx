import React from "react";
import care from '../../../assets/AboutUsAssets/Philosophy/care.svg';
import Treatment from '../../../assets/AboutUsAssets/Philosophy/Treatment.svg';
import Balance from '../../../assets/AboutUsAssets/Philosophy/Balance.svg';

const dataList = [
  {
    id: 1,
    name: "Preventive Care",
    Dec: "Our approach is preventive, personalized, and rooted in Ayurveda's core belief of natural health.",
    img: care,
  },
  {
    id: 2,
    name: "Individual Treatment",
    Dec: "We don't treat diseases — we treat individuals. Every patient is unique, and so is their treatment plan.",
    img: Treatment,
  },
  {
    id: 3,
    name: "Mind - Body Balance",
    Dec: "Health is a natural state when the mind, body, and spirit are in harmony.",
    img: Balance,
  },
];

const Philosophy = () => {
  return (
    <section className="py-12 space-y-10">
      {/* Heading */}
      <h1 className="text-5xl text-center font-bold text-secondary leading-tight relative">
        <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-32 h-[4px] bg-primary" />
        Our Philosophy
      </h1>

      {/* Subtext */}
      <p className="text-center w-full max-w-3xl text-2xl mx-auto text-textColor">
        We follow the principles of Ayurveda as described in the classical
        Samhitas, offering care that goes beyond symptom management.
      </p>

      {/* Cards */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {dataList.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-inner p-6 text-center transition duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <img src={item.img} alt={item.name} className="h-24 w-24" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">{item.name}</h3>
            <p className="text-textColor text-base">{item.Dec}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
