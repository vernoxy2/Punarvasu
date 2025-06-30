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
  },
  {
    id: 2,
    Icon: Call,
    title: "Call Us",
    dec: "Phone No.: +91 07947 112761",
  },
  {
    id: 3,
    Icon: Email,
    title: "Email",
    dec: "Mail Now : punarvasu@gmail.com",
  },
];

const Help = () => {
  return (
    <section className="py-12 space-y-12">
      {/* Heading Text */}
      <div className="text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
          Need Any Help?
        </h1>
        <p className="lg:text-2xl text-textColor font-medium">
          We’re Just a Message Away – Let’s Talk!
        </p>
      </div>

      {/* Contact Cards */}
     <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  {ContactData.map((item) => (
    <div
      key={item.id}
      className="relative text-center p-12 space-y-12 rounded-3xl bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${HelpBg})` }}
    >
      {/* Icon */}
      <div>
        <img
          src={item.Icon}
          alt={`${item.title} icon`}
          className="mx-auto h-20 w-20"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-2">
        <h3 className="text-2xl lg:text-3xl font-bold text-primary">
          {item.title}
        </h3>
        <p className="text-textColor text-base lg:text-lg font-medium leading-relaxed">
          {item.dec}
        </p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default Help;
