import React from "react";
import leaf from "../../../assets/leaf.svg";
import Img1 from "../../../assets/HomeAssets/Choose/Img1.png";
import Img2 from "../../../assets/HomeAssets/Choose/Img2.png";
import Img3 from "../../../assets/HomeAssets/Choose/Img3.png";
import Img4 from "../../../assets/HomeAssets/Choose/Img4.png";
import Img5 from "../../../assets/HomeAssets/Choose/Img5.png";
import Icon1 from "../../../assets/HomeAssets/Choose/Icons/icon1.svg";
import Icon2 from "../../../assets/HomeAssets/Choose/Icons/icon2.svg";
import Icon3 from "../../../assets/HomeAssets/Choose/Icons/icon3.svg";
import Icon4 from "../../../assets/HomeAssets/Choose/Icons/icon4.svg";
import Icon5 from "../../../assets/HomeAssets/Choose/Icons/icon5.svg";
import Bg1 from "../../../assets/HomeAssets/Choose/Bg1.svg"
import Bg2 from "../../../assets/HomeAssets/Choose/Bg2.svg"

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
    <section className="py-12 space-y-12 relative">
      <img src={Bg1} alt="" className="absolute top-1/3" />
      <img src={Bg2} alt="" className="absolute right-0 bottom-0 z-0" />
      <div className="w-1/2 bg-primary py-4 text-right text-white flex items-center justify-end gap-6 pr-10">
        <h1 className="text-5xl font-bold">Why Choose Punavasu?</h1>
        <img src={leaf} alt="" />
      </div>
      <span className="mr-5 ">
        {" "}
        <div className="py-2 bg-secondary w-1/2 pr-5"></div>
      </span>
     {/* Cards Grid */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ChooseData.map(({ id, img, icon, text }) => (
          <div
            key={id}
            className="border rounded-lg overflow-hidden shadow p-5 relative bg-white"
          >
            {/* Image */}
            <img
              src={img}
              alt={`Choose ${id}`}
              className="w-full h-[305px] object-cover rounded-md mb-8"
            />

            {/* Icon box (positioned on image) */}
            <div className="absolute bottom-[80px] left-0 bg-white p-6 rounded-full ">
              <img src={icon} alt={`Icon ${id}`} className="w-16 h-16" />
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
