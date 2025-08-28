import React from "react";
import leaf from "../../../assets/HomeAssets/leaf.png";

const Ayurveda = () => {
  return (
    <section className="py-12 relative bg-primary/20 text-textColor">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="absolute -bottom-8"
      >
        <img src={leaf} alt="" className="pointer-events-none h-80" />
      </div>

      <div className="container 2xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1
            data-aos="fade-left"
            className="text-center lg:text-right text-3xl md:text-4xl 2xl:text-5xl tracking-wider"
          >
            Authentic Healing through <br className="hidden xl:block" /> the
            Ancient Science <br className="hidden xl:block" /> of{" "}
            <span className="font-bold">Ayurveda</span>
          </h1>
        </div>
        <div>
          <h1
            data-aos="fade-right"
            className="lg:text-2xl font-medium text-center lg:text-start"
          >
            <span className="font-black">Punarvasu Ayurveda Chikitsalayam</span> is your trusted Ayurvedic center
            offering authentic treatments like <span className="font-black">Panchkarma therapy</span> for detox and
            rejuvenation,  <span className="font-black">Garbh Sanskar</span> for a healthy pregnancy, and
            <span className="font-black"> Suvarnaprashan Sanskar</span> to boost children’s immunity. With expert
            Ayurvedic doctors and a focus on natural healing, we provide
            personalized care in a peaceful environment to support your
            long-term health and wellness. .
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Ayurveda;
