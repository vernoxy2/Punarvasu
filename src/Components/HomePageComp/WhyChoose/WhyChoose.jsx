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
    id: 5,
    img: Img5,
    icon: Icon5,
    text: "Trusted by families for over a decade",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-12 space-y-12 relative overflow-hidden">
      <img
        data-aos="fade-right"
        data-aos-duration="2000"
        src={Bg1}
        alt=""
        className="absolute top-1/3 pointer-events-none"
      />
      <img
        data-aos="fade-left"
        data-aos-duration="2000"
        src={Bg2}
        alt=""
        className="absolute right-0 bottom-0 z-0 pointer-events-none"
      />

      {/* Title Section */}

      <div
        data-aos="fade-up"
        className="w-full md:w-3/4 lg:w-1/2 relative z-10"
      >
        <div className="bg-primary py-3 pr-6 sm:pr-10 flex items-center justify-center md:justify-end gap-4 sm:gap-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-5xl font-bold text-white text-center lg:text-right">
            Why Choose Punarvasu?
          </h1>
          <img src={leaf} alt="Leaf Icon" className="w-10 h-10" />
        </div>
        <div className="bg-secondary py-1 ml-4 sm:ml-0 mr-4"></div>
      </div>

      {/* Cards Grid */}
      {/* <div className="container xl:px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {ChooseData.map(({ id, img, icon, text }) => (
          <div
            key={id}
            data-aos="zoom-in"
            className="relative bg-white border rounded-lg shadow group overflow-hidden p-4"
          >
            Image Section
            <div className="relative w-full h-[305px] rounded-md overflow-hidden mb-8">
              <img
                src={img}
                alt={`Choose ${id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              Icon Positioned on Image
              <div className="absolute -bottom-10 left-4 bg-white p-4 md:p-6 rounded-full shadow-md">
                <img
                  src={icon}
                  alt={`Icon ${id}`}
                  className="w-12 h-12 2xl:w-16 2xl:h-16 object-contain"
                />
              </div>
            </div>

            Text Content
            <p className="text-primary text-center text-base font-medium px-2">
              {text}
            </p>
          </div>
        ))}
      </div> */}

      <div className="container  xl:px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {ChooseData.map(({ id, img, icon, text }) => (
          <div
            data-aos="zoom-in"
            key={id}
            className="border rounded-lg overflow-hidden shadow p-3 md:p-4  relative bg-white group hover:shadow-xl duration-300"
          >
            {/* Image */}
            <div>
              <img
                src={img}
                alt={`Choose ${id}`}
                className="w-full h-[305px] object-cover  pointer-events-none "
              />
            </div>

            {/* Icon box (positioned on image) */}
            <div className="absolute bottom-[68px] md:bottom-[90px]  2xl:bottom-[80px] left-1 bg-white p-5 rounded-full rounded-bl-none z-0">
              <img
                src={icon}
                alt={`Icon ${id}`}
                className="w-10 h-10 2xl:w-12 2xl:h-12 pointer-events-none z-0 group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Text */}
            <p className="text-primary mt-5 p-2 text-center z-10">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
