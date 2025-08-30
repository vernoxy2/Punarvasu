import React from "react";
import PrimaryBtn from "../../../ShareIngComp/PrimaryBtn/PrimaryBtn";
import right from "../../../assets/ContactUsAssets/Conatform/RightSaid.svg";
import left from "../../../assets/ContactUsAssets/Conatform/Left.webp";

const ContForm = () => {
  const [result, setResult] = React.useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "90ad7a3f-4759-4ef8-9a44-e67628909841");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setResult("Your message has been sent successfully ✅");
      event.target.reset();
    } else {
      setResult("Something went wrong ❌ Please try again.");
    }
  };

  return (
    <section className="py-12 space-y-24 relative overflow-hidden">
      {/* Background Images */}
      <img
        data-aos="fade-right"
        data-aos-duration="2000"
        src={right}
        alt=""
        className="absolute top-1/3 left-0 z-0 hidden md:block pointer-events-none h-1/3 lg:h-auto"
      />
      <img
        data-aos="fade-down"
        data-aos-duration="2000"
        src={left}
        alt=""
        className="absolute top-1/3 right-0 z-0 hidden md:block pointer-events-none w-1/2 lg:w-auto"
      />

      {/* Heading */}
      <div className="text-center space-y-6 relative z-10">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary"
        >
          Contact With Us
        </h1>
        <p
          data-aos="fade-up"
          className="lg:text-2xl text-textColor font-medium"
        >
          Here to Help, Anytime You Need Us!
        </p>
      </div>

      {/* Contact Form */}
      <div className="container relative z-10">
        <form data-aos="fade-up" className="space-y-8" onSubmit={onSubmit}>
          {/* First and Last Name */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="w-full p-4 lg:p-5 rounded-lg md:text-xl lg:text-2xl text-primary placeholder:text-primary font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="w-full p-4 lg:p-5 rounded-lg md:text-xl lg:text-2xl text-primary placeholder:text-primary font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email and Phone */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-4 lg:p-5 rounded-lg md:text-xl lg:text-2xl text-primary placeholder:text-primary font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-4 lg:p-5 rounded-lg md:text-xl lg:text-2xl text-primary placeholder:text-primary font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Doctor Select */}
          <div className="relative">
            <select
              name="doctor"
              required
              className="w-full appearance-none p-4 lg:p-5 pr-14 rounded-lg md:text-xl lg:text-2xl text-primary font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled selected>
                Select Your Doctor
              </option>
              <option value="Dr. Yogesh H. Desai">Dr. Yogesh H. Desai</option>
              <option value="Dr. Priyanka V. Dodia">Dr. Priyanka V. Dodia</option>
            </select>
            <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-primary text-3xl font-bold">
              ▼
            </div>
          </div>

          {/* Message */}
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message Here"
            required
            className="w-full p-4 lg:p-5 rounded-lg md:text-xl lg:text-2xl text-primary placeholder:text-primary font-medium shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          {/* Submit Button */}
          <div className="text-center">
            <PrimaryBtn className="text-white rounded-md w-full flex justify-center items-center py-4 lg:text-2xl font-semibold">
              Send Message
            </PrimaryBtn>
          </div>
        </form>

        {/* ✅ Success/Error Message */}
        {result && (
          <p className="mt-6 text-center text-lg font-medium text-green-600">
            {result}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContForm;
 