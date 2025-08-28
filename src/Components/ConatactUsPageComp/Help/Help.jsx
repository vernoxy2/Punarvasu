import React from "react";
import HelpBg from "../../../assets/ContactUsAssets/Help/Help.webp";
import Location from "../../../assets/ContactUsAssets/Help/Location.svg";
import Call from "../../../assets/ContactUsAssets/Help/Call.svg";
import Email from "../../../assets/ContactUsAssets/Help/Email.svg";
import Priyanka from "../../../assets/AboutUsAssets/Founders/priyanka.svg";
import Yogesh from "../../../assets/AboutUsAssets/Founders/Yogesh.svg";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall, MdEmail } from "react-icons/md";

const ContactData = [
  {
    id: 1,
    Icon: Location,
    title: "Location",
    description:
      "B-5, Pramukh Sannidhya Complex, Abrama Village, Valsad, Gujarat 396002",
    link: "https://www.google.com/maps?q=PUNARVASU+AYURVEDA+CHIKITSALAYAM,+Shop+No+1,+BDCA+Building,+BHIDBHANJAN+MAHADEV+MANDIR,+KAPADIA+CHAL,+Abrama-396002",
  },
  {
    id: 2,
    Icon: Call,
    title: "Call Us",
    description: "Phone No:. +91 96016 63669",
    link: "tel:9601663669",
  },
  {
    id: 3,
    Icon: Email,
    title: "Email",
    description: "Mail Now : vd.yogu@gmail.com",
    link: "mailto:punarvasu@gmail.com",
  },
];

const Help = () => {
  return (
    <div className="py-20 space-y-12">
      <div
        data-aos="fade-up"
        className="text-center container  font-bold text-secondary space-y-4"
      >
        <h1 className="text text-3xl md:text-4xl xl:text-5xl">
          Need Any Help?
        </h1>
        <p className="md:text-2xl text-textColor">
          We’re Just a Massage Away - Let’s Talk!
        </p>
      </div>
      {/* Heading */}
      <div className="container pb-10 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10">
        {/* Dr. Yogesh */}
        <div className="flex items-center  gap-4">
          <img
            src={Yogesh}
            alt="Dr. Yogesh H. Desai"
            className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 border-2 border-primary p-1 rounded-full bg-white shadow-md"
          />
          <div className="space-y-2">
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-textColor"
            >
              Dr. Yogesh H. Desai
            </h1>
            <p
              data-aos="fade-up"
              className="text-base sm:text-lg lg:text-xl text-textColor font-medium"
            >
              B.A.M.S., M.D.(Ayu), PhD (Ayu)
            </p>
          </div>
        </div>

        {/* Dr. Priyanka */}
        <div className="flex items-center  gap-4 xl:flex-row-reverse text-left lg:text-right">
          <img
            src={Priyanka}
            alt="Dr. Priyanka V. Dodia"
            className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 border-2 border-primary p-1 rounded-full bg-white shadow-md"
          />
          <div className="space-y-2">
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-textColor"
            >
              Dr. Priyanka V. Dodia
            </h1>
            <p
              data-aos="fade-up"
              className="text-base sm:text-lg lg:text-xl text-textColor font-medium"
            >
              B.A.M.S. (Ayu)
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="w-full relative top-0 container">
        {/* White box background + content */}
        <div className="bg-white lg:w-11/12 ml-auto rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-16">
          {/* Grid inside white box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left content (Contact box) */}
            <div className="bg-primary rounded-3xl lg:-ml-32 flex flex-col gap-y-6 justify-start p-6 sm:p-8 lg:p-12 text-white shadow-lg">
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Contact Us
              </h1>

              {/* Address 1 */}
              <a
                href="https://www.google.com/maps?q=PUNARVASU+AYURVEDA+CHIKITSALAYAM,+Shop+No+1,+BDCA+Building,+BHIDBHANJAN+MAHADEV+MANDIR,+KAPADIA+CHAL,+Abrama-396002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-4 items-start "
              >
                <FaLocationDot className="text-3xl sm:text-4xl flex-shrink-0 my-auto" />
                <div>
                  <h1 className="text-4xl">Address</h1>
                  <p className="text-sm sm:text-base">
                  B-5, Pramukh Sannidhya Complex, <br /> Abrama Village, Valsad.
                </p>
                </div>
              </a>

              {/* Address 2 */}
              <a
                href="https://www.google.com/maps?q=PUNARVASU+AYURVEDA+CHIKITSALAYAM,+Shop+No+1,+BDCA+Building,+BHIDBHANJAN+MAHADEV+MANDIR,+KAPADIA+CHAL,+Abrama-396002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-4 items-start"
              >
                <FaLocationDot className="text-3xl sm:text-4xl flex-shrink-0" />
                <p className="text-sm sm:text-base">
                  Shop No 1, BDCA Building, Bhidbhanjan Mahadev Mandir, Kapadia
                  Chal, Valsad-396001
                </p>
              </a>

              {/* Phone */}
              <a href="tel:+919601664092" className="flex items-start gap-x-4">
                <MdAddIcCall className="text-3xl sm:text-4xl flex-shrink-0" />
                <p className="text-sm sm:text-base">
                  Call Us: <br /> +91 96016 64092
                </p>
              </a>

              {/* Email */}
              <a
                href="mailto:punarvasuayurveda@gmail.com"
                className="flex items-start gap-x-4"
              >
                <MdEmail className="text-3xl sm:text-4xl flex-shrink-0" />
                <p className="text-sm sm:text-base">
                  Email: <br /> punarvasuayurveda@gmail.com
                </p>
              </a>
            </div>

            {/* Right content (Google Map) */}
            <div className="overflow-hidden shadow-xl">
              <iframe
                data-aos="fade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.1510910643985!2d72.92953194045963!3d20.612237118456523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0e8278e326ecd%3A0xe242834ab094f701!2sPUNARVASU%20AYURVEDA%20CHIKITSALAYAM%20-%20Best%20Panchakarma%20%7C%20Suvarnaprashan%20%7C%20Cosmetic%20%7C%20Garbh%20Sanskar%20Center%20in%20Valsad!5e0!3m2!1sen!2sin!4v1751258891306!5m2!1sen!2sin"
                className="w-full h-[300px] sm:h-[350px] lg:h-[430px] "
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Punarvasu Ayurveda Chikitsalayam Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <div className="py-5">
        <div className="container relative z-10">
          <iframe
            data-aos="fade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.1510910643985!2d72.92953194045963!3d20.612237118456523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0e8278e326ecd%3A0xe242834ab094f701!2sPUNARVASU%20AYURVEDA%20CHIKITSALAYAM%20-%20Best%20Panchakarma%20%7C%20Suvarnaprashan%20%7C%20Cosmetic%20%7C%20Garbh%20Sanskar%20Center%20in%20Valsad!5e0!3m2!1sen!2sin!4v1751258891306!5m2!1sen!2sin"
            className="w-full h-[400px] sm:h-[300px] md:h-[430px] shadow-3xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Punarvasu Ayurveda Chikitsalayam Map"
          ></iframe>
        </div>
      </div> */}
    </div>
  );
};

export default Help;
