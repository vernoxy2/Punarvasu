import React from "react";
import Bg from "../../../assets/HomeAssets/ContactUs/ContactBg.webp";
import ContImg from "../../../assets/HomeAssets/ContactUs/contactImg.svg";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <section
      style={{ backgroundImage: `url(${Bg})` }}
      className=" py-12 md:py-20 my-0 bg-no-repeat bg-cover bg-center relative overflow-hidden "
    >
      <div
        data-aos-duration="2000"
        className="container bg-white/40 rounded-2xl border border-white py-12 w-11/12 lg:w-7/12 mx-auto text-center text-white space-y-8"
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
        <p data-aos="fade-down">
          Get a personalized quote for your Ayurvedic treatment at Punarvasu.
          Share <br /> your health concerns, and our team will provide a
          tailored plan with transparent <br /> pricing—so you can begin your
          healing journey with confidence.
        </p>
        <PrimaryBtn
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "instant" });
            navigate("/contact");
          }}
          className="rounded-lg bg-white hover:text-white duration-300 text-primary text-base"
        >
          Get a Quote
        </PrimaryBtn>

        <img
          data-aos="fade-left"
          data-aos-duration="2500"
          src={ContImg}
          alt=""
          className="w-1/2 lg:w-auto absolute bottom-0 -right-16 lg:right-60 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default ContactUs;
