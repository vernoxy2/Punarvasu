import React from "react";
import { Routes, Route } from "react-router-dom";

// Shared Layout
import Navbar from "./ShareIngComp/Navbar/Navbar";
import Footer from "./ShareIngComp/Footer/Footer";

// Home Page Components
import Heading from "./Components/HomePageComp/Heading/Heading";
import WelcomeText from "./Components/HomePageComp/WelcomText/WelcomeText";
import Ayurveda from "./Components/HomePageComp/Ayurveda/Ayurveda";
import CoreServices from "./Components/HomePageComp/CoreServices/CoreServices";
import Experts from "./Components/HomePageComp/Experts/Experts";
import Certifications from "./Components/HomePageComp/Certifications/Certifications";
import WhyChoose from "./Components/HomePageComp/WhyChoose/WhyChoose";
import Testimonial from "./Components/HomePageComp/Testimonial/Testimonial";
import ContactUs from "./Components/HomePageComp/ContactUs/ContactUs";

// About Page Components
import AbHeader from "./Components/AboutPageComp/AbHeader/AbHeader";
import Modern from "./Components/AboutPageComp/Modern/Modern";
import Philosophy from "./Components/AboutPageComp/Philosophy/Philosophy";
import Accreditations from "./Components/AboutPageComp/Accreditations/Accreditations";
import ConHeader from "./Components/ConatactUsPageComp/ConHeader/ConHeader";
import Help from "./Components/ConatactUsPageComp/Help/Help";
import ContForm from "./Components/ConatactUsPageComp/ContForm/ContForm";
import ContMap from "./Components/ConatactUsPageComp/ContMap/ContMap";
import SerHeader from "./Components/ServicePageComp/SerHeader/SerHeader";
import Shlok from "./Components/ServicePageComp/Shlok/Shlok";
import Therapies from "./Components/ServicePageComp/Therapies/Therapies";
import Treatments from "./Components/ServicePageComp/Treatments/Treatments";
import Procedures from "./Components/ServicePageComp/procedures/procedures";

const App = () => {
  return (
    <div className="font-sans bg-[#F3F3F3]">
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Heading />
                <WelcomeText />
                <Ayurveda />
                <CoreServices />
                <Experts />
                <Certifications />
                <WhyChoose />
                <Testimonial />
                <ContactUs />
              </>
            }
          />

          {/* About Page Route */}
          <Route
            path="/about"
            element={
              <>
                <AbHeader />
                <Modern />
                <Philosophy />
                <Accreditations />
                <ContactUs />
              </>
            }
          />

          {/* Service Page Routes */}
          <Route
            path="/services"
            element={
              <>
                <SerHeader />
                <Treatments />
                <Therapies />
                <Procedures/>
                <Shlok />
                <ContactUs/>
              </>
            }
          />

          {/* Contact Us Page Route */}
          <Route
            path="/contact"
            element={
              <>
                <ConHeader />
                <Help />
                <ContForm />
                <ContMap />
              </>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
