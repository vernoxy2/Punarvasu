import React from 'react';

const PrimaryBtn = ({ children, className = "" }) => {
  return (
    <button className={`bg-primary text-sm sm:text-base lg:text-2xl font-bold px-6 py-3 hover:bg-primary/80 transition ${className}`}>
      {children}
    </button>
  );
};

export default PrimaryBtn;

