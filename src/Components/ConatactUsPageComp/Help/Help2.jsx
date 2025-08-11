import React from "react";
import HelpBg from "../../../assets/ContactUsAssets/Help/Help.webp";
import Location from "../../../assets/ContactUsAssets/Help/Location.svg";
import Call from "../../../assets/ContactUsAssets/Help/Call.svg";
import Email from "../../../assets/ContactUsAssets/Help/Email.svg";

const ContactData = [
  {
    id: 1,
    Icon: Location,
    title: "Location",
    description: "B-5, Pramukh Sannidhya Complex, Abrama Villlage, Valsad.",
    link: "https://www.google.com/maps?q=PUNARVASU+AYURVEDA+CHIKITSALAYAM,+Shop+No+1,+BDCA+Building,+BHIDBHANJAN+MAHADEV+MANDIR,+KAPADIA+CHAL,+Abrama-396002",
  },
  {
    id: 2,
    Icon: Call,
    title: "Call Us",
    description: "Phone No:. +91 07947112761",
    link: "tel:07947112761",
  },
  {
    id: 3,
    Icon: Email,
    title: "Email",
    description: "Mail Now : punarvasu@gmail.com",
    link: "mailto:punarvasu@gmail.com",
  },
];

const Help = () => {
  return (
    <div className="py-20 space-y-12">
      {/* Heading */}
      <div className="text-start container space-y-2 pb-5">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textColor"
        >
          Dr. Priyanka V. Dodia
        </h1>
        <p
          data-aos="fade-up"
          className="lg:text-2xl text-textColor font-medium"
        >
         B.A.M.S.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {ContactData.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              data-aos="fade-left"
              className="text-center bg-cover bg-no-repeat bg-center rounded-3xl p-6 sm:p-6 lg:p-10 flex flex-col justify-center items-center w-full min-h-[300px] sm:min-h-[305px] lg:min-h-[330px] 2xl:min-h-[370px] transition-transform duration-300 hover:scale-[1.02]"
              style={{ backgroundImage: `url(${HelpBg})` }}
            >
              <img
                src={item.Icon}
                alt={`${item.title} icon`}
                className="mx-auto h-16 w-16 sm:h-20 sm:w-20 group-hover:scale-110 duration-300 transition-transform"
              />
              <div className="mt-8 space-y-3">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-textColor text-base max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Map Section */}
      <div className="py-5">
        <div className="container px-0 relative z-10">
          <iframe
            data-aos="fade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.1510910643985!2d72.92953194045963!3d20.612237118456523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0e8278e326ecd%3A0xe242834ab094f701!2sPUNARVASU%20AYURVEDA%20CHIKITSALAYAM%20-%20Best%20Panchakarma%20%7C%20Suvarnaprashan%20%7C%20Cosmetic%20%7C%20Garbh%20Sanskar%20Center%20in%20Valsad!5e0!3m2!1sen!2sin!4v1751258891306!5m2!1sen!2sin"
            className="w-full h-[400px] sm:h-[500px] md:h-[530px] shadow-3xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Punarvasu Ayurveda Chikitsalayam Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Help;
