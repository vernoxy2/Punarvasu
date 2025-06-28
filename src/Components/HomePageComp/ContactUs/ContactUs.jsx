import React from "react";
import Bg from "../../../assets/HomeAssets/ContactUs/ContactBg.webp";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";

const ContactUs = () => {
  return (
    <section style={{ backgroundImage: `url(${Bg})` }} className="py-20 my-12 ">
      <div className=" bg-white/40 rounded-2xl border border-white py-12 w-7/12 mx-auto text-center text-white space-y-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <h1 className="text-2xl font-semibold">
          "Discover Natural Healing — Request Your Ayurvedic Treatment Estimate
          Today."
        </h1>
        <p>
          Get a personalized quote for your Ayurvedic treatment at Punarvasu.
          Share <br /> your health concerns, and our team will provide a tailored plan
          with transparent <br /> pricing—so you can begin your healing journey with
          confidence.
        </p>
        <PrimaryBtn className="rounded-lg bg-white text-primary text-base">Get a Quote</PrimaryBtn>
      </div>
    </section>
  );
};

export default ContactUs;
