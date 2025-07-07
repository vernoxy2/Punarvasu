import React from "react";
import Bg from "../../../assets/HomeAssets/ContactUs/ContactBg.webp";
import ContImg from "../../../assets/HomeAssets/ContactUs/contactImg.svg";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative py-12 md:py-20 bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Optional: Background overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div
        data-aos-duration="2000"
        className="container relative z-10 bg-white/40 backdrop-blur-md rounded-2xl border border-white py-12 w-11/12 xl:w-8/12 md:py-24 mx-auto text-center text-white space-y-8"
      >
        <h1 data-aos="fade-down" className="text-3xl lg:text-4xl font-bold">
          Contact Us
        </h1>

        <h1
          data-aos="fade-down"
          className="sm:text-xl md:text-2xl font-semibold"
        >
          "Discover Natural Healing — Request Your Ayurvedic Treatment Estimate
          Today."
        </h1>

        <p data-aos="fade-down" className="text-sm md:text-base 2xl:w-2/3 mx-auto">
          Get a personalized quote for your Ayurvedic treatment at Punarvasu.
          Share your health concerns, and our team will provide a tailored plan
          with transparent pricing—so you can begin your healing journey with
          confidence.
        </p>

        <PrimaryBtn
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "instant" });
            navigate("/contact");
          }}
          className="rounded-lg bg-white hover:text-white duration-300 text-primary text-basem mx-auto"
        >
          Get a Quote
        </PrimaryBtn>

        <img
          data-aos="fade-left"
          data-aos-duration="2500"
          src={ContImg}
          alt=""
          className="w-1/2  2xl:w-auto absolute -bottom-10 sm:-bottom-20 -right-14 sm:-right-28 xl:-right-36 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default ContactUs;
