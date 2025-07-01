import React from "react";

const Story = () => {
  return (
    <section className="py-14 ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary leading-tight">
        Our Story
      </h1>
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div></div>
        <div className="space-y-5 py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary">
            Founded on Trust & Tradition
          </h1>
          <p className="text-textColor text-2xl font-medium lg:w-10/12">
            Punarvasu Ayurved Chikitsalayam was founded by Dr. Anjali Sharma and
            Dr. Rajeev Patil, two passionate practitioners with the goal of
            returning to classical Ayurveda while addressing modern health
            challenges.
          </p>
          <p className="text-textColor text-2xl font-medium lg:w-10/12">
            With experience in both urban clinics and rural wellness camps, they
            created a center combining time-tested Panchkarma therapies,
            preventive child care, and women's wellness with sincerity and
            sattvik values.
          </p>
          <div className="flex gap-12">
            <div className="bg-primary text-white w-[240px] py-2 text-center space-y-1">
              <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl">
                5,000+
              </h1>
              <p>Patients Served</p>
            </div>
            <div className="bg-primary text-white w-[240px] py-2 text-center space-y-1">
              <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl">
                15+
              </h1>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
