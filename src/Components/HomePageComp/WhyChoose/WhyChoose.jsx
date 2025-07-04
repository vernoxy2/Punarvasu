import React from "react";
import leaf from "../../../assets/leaf.svg";
import Img1 from "../../../assets/HomeAssets/Choose/Img1.png";
import Img2 from "../../../assets/HomeAssets/Choose/Img2.png";
import Img3 from "../../../assets/HomeAssets/Choose/Img3.png";
import Img4 from "../../../assets/HomeAssets/Choose/Img4.png";
import Img5 from "../../../assets/HomeAssets/Choose/Img5.png";
import Icon1 from "../../../assets/HomeAssets/Choose/Icons/icon1.svg";
import Icon2 from "../../../assets/HomeAssets/Choose/Icons/Icon2.svg";
import Icon3 from "../../../assets/HomeAssets/Choose/Icons/Icon3.svg";
import Icon4 from "../../../assets/HomeAssets/Choose/Icons/Icon4.svg";
import Icon5 from "../../../assets/HomeAssets/Choose/Icons/Icon5.svg";
import Bg1 from "../../../assets/HomeAssets/Choose/Bg1.svg";
import Bg2 from "../../../assets/HomeAssets/Choose/Bg2.svg";

// ChooseData Array
const ChooseData = [
  {
    id: 1,
    img: Img1,
    icon: Icon1,
    text: "Personalized, holistic care rooted in Ayurvedic tradition",
  },
  {
    id: 2,
    img: Img2,
    icon: Icon2,
    text: "Specialized centers for Panchkarma, child health, cosmetics, and maternal care",
  },
  {
    id: 3,
    img: Img3,
    icon: Icon3,
    text: "Experienced doctors and trained therapists",
  },
  {
    id: 4,
    img: Img4,
    icon: Icon4,
    text: "Clean, calm, and hygienic treatment environment environment",
  },
  {
    id: 5,
    img: Img5,
    icon: Icon5,
    text: "Trusted by families for over a decade",
  },
];

const WhyChoose = () => {
  return (
    <section  className="py-12 space-y-12 relative overflow-hidden">
      <img data-aos="fade-right" data-aos-duration="2000" src={Bg1} alt="" className="absolute top-1/3 pointer-events-none" />
      <img
      data-aos="fade-left" data-aos-duration="2000"
        src={Bg2}
        alt=""
        className="absolute right-0 bottom-0 z-0 pointer-events-none"
      />
      
      {/* Title Section */}
      <div data-aos="fade-up" className="w-full md:w-3/4 lg:w-1/2 relative z-10">
        <div className="bg-primary py-3 pr-6 sm:pr-10 flex items-center justify-center md:justify-end gap-4 sm:gap-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center lg:text-right">
            Why Choose Punavasu?
          </h1>
          <img src={leaf} alt="Leaf Icon" className="w-10 h-10" />
        </div>
        <div className="bg-secondary py-1 ml-4 sm:ml-0 mr-4"></div>
      </div>
       
      {/* Cards Grid */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ChooseData.map(({ id, img, icon, text }) => (
          <div
          data-aos="zoom-in"
            key={id}
            className="border rounded-lg overflow-hidden shadow p-5 relative bg-white"
          >
            {/* Image */}
            <img
              src={img}
              alt={`Choose ${id}`}
              className="w-full h-[305px] object-cover rounded-md mb-8 pointer-events-none"
            />

            {/* Icon box (positioned on image) */}
            <div className="absolute bottom-[80px] left-0 bg-white p-6 rounded-full ">
              <img
                src={icon}
                alt={`Icon ${id}`}
                className="w-16 h-16 pointer-events-none"
              />
            </div>

            {/* Text */}
            <p className="text-primary mt-4 p-2">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
