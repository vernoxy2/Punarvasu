import React from "react";
import leaf from "../../../assets/leaf.svg";
import Tarpana from "../../../assets/ServiceAssets/Procedures/Tarpana.png";
import Shirodhara from "../../../assets/ServiceAssets/Procedures/Shirodhara.png";
import Sthanik from "../../../assets/ServiceAssets/Procedures/Sthanik.png";
import Karnapooran from "../../../assets/ServiceAssets/Procedures/Karnapooran.png";
import potlis from "../../../assets/ServiceAssets/Procedures/potlis.png";
import Pizhichil from "../../../assets/ServiceAssets/Procedures/Pizhichil.png";
import Udvartana from "../../../assets/ServiceAssets/Procedures/Udvartana.png";
import Agnikarma from "../../../assets/ServiceAssets/Procedures/Agnikarma.png";
import Bg from "../../../assets/ServiceAssets/Procedures/Bg.png";

const DataList = [
    {
        id:1,
        Img: Tarpana,
        Title:"Netra Tarpana",
        Dec:"Netra Tarpana therapy with warm ghee in dough rings, soothing Ayurvedic setup for eye strain, dryness, redness, and vision issues."
    },
    {
        id:2,
        Img: Shirodhara,
        Title:"Shirodhara",
        Dec:"Shirodhara pours warm medicated liquids on forehead, relieving stress, insomnia, headaches, hypertension, and neurological disorders."
    },
    {
        id:3,
        Img: Sthanik,
        Title:"Sthanik Basti Therapy",
        Dec:"Local Basti involves pouring warm medicated oil on body parts to treat disc issues, sciatica, nerve pain, and joint disorders."
    },
    {
        id:4,
        Img: Karnapooran,
        Title:"Karnapooran",
        Dec:"Netra Tarpana therapy with warm ghee in dough rings, soothing Ayurvedic setup for eye strain, dryness, redness, and vision issues."
    },
    {
        id:5,
        Img: potlis,
        Title:"Herbal Potli Sweda",
        Dec:"In this therapy, herbal potlis are used for massage, effectively treating MND, Muscular Dystrophy, AVN, and neurological disorders."
    },
    {
        id:6,
        Img: Pizhichil,
        Title:"Pizhichil",
        Dec:"Warm medicated oil or decoction poured over the body controls Vata and relieves bone, joint, muscle, and nerve pain."
    },
    {
        id:7,
        Img: Udvartana,
        Title:"Udvartana",
        Dec:"Massage using various herbal powders is called Udvartana. It is an excellent treatment method for obesity and fat-related disorders."
    },
    {
        id:8,
        Img: Agnikarma,
        Title:"Agnikarma",
        Dec:"Agnikarma uses a heated special metal rod on pain areas; highly effective for sciatica, neck stiffness, and lower back pain."
    },
]

const Procedures = () => {
  return (
    <section className="py-14 space-y-14 relative overflow-hidden">
      {/* Background Image */}
      <img
      data-aos="fade-up"
      data-aos-duration="2000"
        src={Bg}
        alt="Decorative Background"
        className="absolute top-1/2 left-0 w-full z-0 pointer-events-none -translate-y-1/3"
      />

      {/* Title Section */}
      <div id="procedures" data-aos="fade-right" className="w-full md:w-3/4 lg:w-1/2 relative z-10">
        <div  className="bg-primary py-3 pr-6 sm:pr-10 flex items-center justify-end gap-4 sm:gap-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white text-right">
            Other Therapeutic Procedures
          </h1>
          <img src={leaf} alt="Leaf Icon" className="w-10 h-10" />
        </div>
        <div className="bg-secondary py-1 ml-6 sm:ml-0 mr-6"></div>
      </div>

      {/* Cards */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 relative z-10">
        {DataList.map((item) => (
          <div
          data-aos="fade-up"
            key={item.id}
            className="bg-white shadow-xl rounded-2xl p-5 space-y-3 hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.Img}
              alt={item.Title}
              className="w-full  object-cover rounded-xl"
            />
            <h3 className="text-2xl font-bold text-primary">{item.Title}</h3>
            <p className="text-textColor text-base font-medium">{item.Dec}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Procedures;
