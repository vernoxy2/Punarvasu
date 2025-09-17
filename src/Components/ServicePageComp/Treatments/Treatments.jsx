import React from "react";
import Img1 from "../../../assets/ServiceAssets/Treatments/Img1.png";
import Img2 from "../../../assets/ServiceAssets/Treatments/Img2.png";
import Img3 from "../../../assets/ServiceAssets/Treatments/Img3.png";
import Img4 from "../../../assets/ServiceAssets/Treatments/Img4.png";
import Img5 from "../../../assets/ServiceAssets/Treatments/Img5.png";
import left from "../../../assets/ServiceAssets/Treatments/left.png";
import right from "../../../assets/ServiceAssets/Treatments/lafe.png";

const DataList = [
  {
    id: 1,
    img: Img1,
    title: "Medicated Vomiting",
    Dec: "Vamana therapy expels doshas via vomiting, effectively treating Kapha disorders, skin issues, respiratory problems, obesity, and chronic indigestion.",
  },
  {
    id: 2,
    img: Img2,
    title: "Virechan therapy",
    Dec: "Virechan removes vitiated doshas through purgation, beneficial for Pitta disorders, skin, digestion, obesity, jaundice, and respiratory issues.",
  },
  {
    id: 3,
    img: Img3,
    title: "Basti therapy",
    Dec: "Basti therapy cleanses colon, removes excess Vata, and effectively treats paralysis, arthritis, sciatica, and other Vata-related disorders.",
  },
  {
    id: 4,
    img: Img4,
    title: "Nasya therapy",
    Dec: "Nasya therapy using herbal oils or powders, effective for sinusitis, migraines, stress, insomnia, and head-related disorders.",
  },
  {
    id: 5,
    img: Img5,
    title: "Raktamokshana",
    Dec: "Raktamokshan removes impure blood using leeches or tools, effectively treating blood disorders, skin diseases, and vein or muscle issues.",
  },
];

const Treatments = () => {
  return (
    <section className="py-12 space-y-12 relative">
      <img
      data-aos="fade-right"
      data-aos-duration="2000"
        src={left}
        alt=""
        className="absolute z-0 w-24 md:w-36 lg:w-auto pointer-events-none"
      />
      {/* Heading Text */}
      <div id="procedures" className="text-center space-y-4 relative z-10">
        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
          Our Core Treatments
        </h1>
        <p data-aos="fade-up" className="lg:text-2xl text-textColor font-medium">
          Discover our comprehensive range of traditional Ayurvedic therapies
        </p>
      </div>
      {/* Card  */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {DataList.map((item) => (
          <div data-aos="zoom-in" key={item.id} className="text-center  space-y-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-full p-5 object-cover rounded-lg pointer-events-none"
            />
            <h3 className="lg:text-2xl font-bold text-primary">{item.title}</h3>
            <p className="text-textColor text-base">{item.Dec}</p>
          </div>
        ))}
      </div>
      <img
       data-aos="fade-up"
      data-aos-duration="3000"
        src={right}
        alt=""
        className="absolute right-12 bottom-4 sm:bottom-12 lg:bottom-52 z-0 w-24 md:w-56 lg:w-auto pointer-events-none"
      />
    </section>
  );
};

export default Treatments;
