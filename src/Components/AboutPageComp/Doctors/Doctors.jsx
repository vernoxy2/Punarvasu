import React from "react";

const doctersData = [
  {
    id: 1,
    
  },
];

const Doctors = () => {
  return (
    <section className="py-12 space-y-10 relative z-10 overflow-hidden">
      <h1 className="flex items-center justify-center text-5xl text-center font-bold text-secondary leading-tight relative z-10">
        Meet Our Doctors
        <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-32 h-[4px] bg-primary" />
      </h1>

      {/* Subtext */}
      <p className="text-center w-full max-w-3xl text-2xl mx-auto text-textColor z-10">
        Experienced practitioners dedicated to authentic Ayurvedic healing
      </p>
    </section>
  );
};

export default Doctors;
