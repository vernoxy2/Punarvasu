import React from "react";

const PrimaryBtn = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`bg-primary flex items-center justify-center text-sm sm:text-base lg:text-2xl font-bold px-6 py-3 hover:bg-primary/90 transition duration-300 transform hover:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
