import React from "react";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";
import right from "../../../assets/ContactUsAssets/Conatform/RightSaid.svg";
import left from "../../../assets/ContactUsAssets/Conatform/Left.webp";

const ContForm = () => {
  return (
    <section className="py-12 space-y-12 relative overflow-hidden">
      {/* Background Image */}
      <img
        src={right}
        alt=""
        className="absolute top-1/3 left-0 z-0 hidden md:block pointer-events-none  h-1/3 lg:h-auto"
      />
      <img
        src={left}
        alt=""
        className="absolute top-1/3 right-0 z-0 hidden md:block pointer-events-none w-1/2 lg:w-auto"
      />

      {/* Heading */}
      <div className="text-center space-y-6 relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">Contact With Us</h1>
        <p className="lg:text-2xl text-textColor font-medium">
          Here to Help, Anytime You Need Us!
        </p>
      </div>

      {/* Contact Form */}
      <div className="container relative z-10">
        <form className="space-y-8">
          {/* First and Last Name */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <input
              type="text"
              aria-label="First Name"
              placeholder="First Name"
              className="w-full p-4 lg:p-5 rounded-lg md:text-xl lg:text-2xl text-primary placeholder:text-primary font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              aria-label="Last Name"
              placeholder="Last Name"
              className="w-full  p-4 lg:p-5 rounded-lg md:text-xl lg:text-2xl text-primary placeholder:text-primary font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email and Phone */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <input
              type="email"
              aria-label="Email Address"
              placeholder="Email Address"
              className="w-full  p-4 lg:p-5 rounded-lg md:text-xl lg:text-2xl text-primary placeholder:text-primary font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              aria-label="Phone Number"
              placeholder="Phone Number"
              className="w-full  p-4 lg:p-5 rounded-lg md:text-xl lg:text-2xl text-primary placeholder:text-primary font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            aria-label="Subject"
            placeholder="Subject"
            className="w-full p-4 lg:p-5 rounded-lg md:text-xl lg:text-2xl text-primary placeholder:text-primary font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Message */}
          <textarea
            rows="6"
            aria-label="Message"
            placeholder="Your Message Here"
            className="w-full  p-4 lg:p-5 rounded-lg md:text-xl lg:text-2xl text-primary placeholder:text-primary font-medium shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          {/* Submit Button */}
          <div className="text-center">
            <PrimaryBtn className="rounded-md w-full flex justify-center items-center py-4 lg:text-2xl font-semibold">
              Send Message
            </PrimaryBtn>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContForm;
