import React from "react";
import bgleaf from "../../../assets/ContactUsAssets/Map/leaf.svg";

const ContMap = () => {
  return (
    <section className="py-12 bg-primary/10 relative shadow-inner">
      <img src={bgleaf} alt="" className="absolute right-5 hidden xl:block scale-x-[-1] z-0" />
      <img
        src={bgleaf}
        alt=""
        className="absolute bottom-2 left-5  hidden xl:block z-0"
      />
      <div className="container relative z-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.1510910643985!2d72.92953194045963!3d20.612237118456523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0e8278e326ecd%3A0xe242834ab094f701!2sPUNARVASU%20AYURVEDA%20CHIKITSALAYAM%20-%20Best%20Panchakarma%20%7C%20Suvarnaprashan%20%7C%20Cosmetic%20%7C%20Garbh%20Sanskar%20Center%20in%20Valsad!5e0!3m2!1sen!2sin!4v1751258891306!5m2!1sen!2sin"
          className="w-full h-[400px] sm:h-[500px] md:h-[530px] shadow-3xl "
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Punarvasu Ayurveda Chikitsalayam Map"
        ></iframe>
      </div>
    </section>
  );
};

export default ContMap;
