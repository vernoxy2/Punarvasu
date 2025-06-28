import React from "react";
import leaf from "../../../assets/HomeAssets/leaf.png";

const Ayurveda = () => {
  return (
    <section className="py-12 relative bg-primary/20 text-textColor">
      <div className="absolute top-0">
        <img src={leaf} alt="" />
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-right text-5xl ">
            Authentic Healing through <br /> the Ancient Science <br /> of{" "}
            <span className="font-bold">Ayurveda</span>
          </h1>
        </div>
        <div>
          <h1 className="text-2xl ">
            Discover a sanctuary of health and harmony at <br />{" "}
            <samp className="font-bold">Punarvasu Ayurved Chikitsalayam</samp>,
            where traditional Ayurvedic wisdom meets personalized care. Nestled
            in a peaceful setting, our center offers a range of holistic
            therapies designed to balance the body, mind, and spirit.With a team
            of experienced Ayurvedic doctors and a deep-rooted commitment to
            natural healing, we specialize in time-tested treatments that
            nurture long-term wellness.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Ayurveda;
