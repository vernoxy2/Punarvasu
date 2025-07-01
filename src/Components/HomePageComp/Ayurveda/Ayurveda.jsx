import React from "react";
import leaf from "../../../assets/HomeAssets/leaf.png";

const Ayurveda = () => {
  return (
    <section className="py-12 relative bg-primary/20 text-textColor">
      <div className="absolute top-0">
        <img
          src={leaf}
          alt=""
          className="hidden lg:block pointer-events-none"
        />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-center lg:text-right text-3xl md:text-4xl lg:text-5xl">
            Authentic Healing through <br className="hidden lg:block" /> the
            Ancient Science <br className="hidden lg:block" /> of{" "}
            <span className="font-bold">Ayurveda</span>
          </h1>
        </div>
        <div>
          <h1 className="lg:text-2xl font-medium text-center lg:text-start">
            Discover a sanctuary of health and harmony at{" "}
            <span className="font-bold">Punarvasu Ayurved Chikitsalayam</span>,
            where traditional Ayurvedic wisdom meets personalized care. Nestled
            in a peaceful setting, our center offers a range of holistic
            therapies designed to balance the body, mind, and spirit. With a
            team of experienced Ayurvedic doctors and a deep-rooted commitment
            to natural healing, we specialize in time-tested treatments that
            nurture long-term wellness.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Ayurveda;
