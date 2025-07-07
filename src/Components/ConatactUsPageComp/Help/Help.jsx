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
    dec: "Shop No 1, BDCA Building, BHIDBHANJAN MAHADEV MANDIR, KAPADIA CHAL, Abrama-396002",
    link: "https://www.google.com/maps?q=PUNARVASU+AYURVEDA+CHIKITSALAYAM,+Shop+No+1,+BDCA+Building,+BHIDBHANJAN+MAHADEV+MANDIR,+KAPADIA+CHAL,+Abrama-396002",
  },
  {
    id: 2,
    Icon: Call,
    title: "Call Us",
    dec: "Phone No.: +91 07947 112761",
    link: "tel:07947112761",
  },
  {
    id: 3,
    Icon: Email,
    title: "Email",
    dec: "Mail Now : punarvasu@gmail.com",
    link: "mailto: punarvasu@gmail.com",
  },
];

const Help = () => {
  return (
    <section className="py-20 space-y-12">
      {/* Heading */}
      <div className="text-center space-y-6 px-4">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary"
        >
          Need Any Help?
        </h1>
        <p
          data-aos="fade-up"
          className="lg:text-2xl text-textColor font-medium"
        >
          We’re Just a Message Away – Let’s Talk!
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {ContactData.map((item) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
          <div
            data-aos="fade-left"
            key={item.id}
            className="text-center bg-cover bg-no-repeat bg-center rounded-3xl p-6 sm:p-6 lg:p-10 flex flex-col justify-center items-center w-full h-auto min-h-[300px] sm:min-h-[305px] lg:min-h-[400px]"
            style={{ backgroundImage: `url(${HelpBg})` }}
          >
            <div>
              <img
                src={item.Icon}
                alt={`${item.title} icon`}
                className="mx-auto h-16 w-16 sm:h-20 sm:w-20"
              />
            </div>
            <div className="mt-8 space-y-3">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                {item.title}
              </h3>
                <p className="text-textColor text-base">{item.dec}</p>
            </div>
          </div>
              </a>
        ))}
      </div>
    </section>
  );
};

export default Help;
