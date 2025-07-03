import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy Load Shared Layout
const Navbar = lazy(() => import("./ShareIngComp/Navbar/Navbar"));
const Footer = lazy(() => import("./ShareIngComp/Footer/Footer"));

// Eagerly loaded components
import Heading from "./Components/HomePageComp/Heading/Heading";
import WelcomeText from "./Components/HomePageComp/WelcomText/WelcomeText";
import Ayurveda from "./Components/HomePageComp/Ayurveda/Ayurveda";
import CoreServices from "./Components/HomePageComp/CoreServices/CoreServices";
import Experts from "./Components/HomePageComp/Experts/Experts";
import Certifications from "./Components/HomePageComp/Certifications/Certifications";
import WhyChoose from "./Components/HomePageComp/WhyChoose/WhyChoose";
import Testimonial from "./Components/HomePageComp/Testimonial/Testimonial";
import ContactUs from "./Components/HomePageComp/ContactUs/ContactUs";

import AbHeader from "./Components/AboutPageComp/AbHeader/AbHeader";
import Modern from "./Components/AboutPageComp/Modern/Modern";
import Philosophy from "./Components/AboutPageComp/Philosophy/Philosophy";
import Accreditations from "./Components/AboutPageComp/Accreditations/Accreditations";
import Founders from "./Components/AboutPageComp/Founders/Founders";
import Story from "./Components/AboutPageComp/Story/Story";
import Doctors from "./Components/AboutPageComp/Doctors/Doctors";

import SerHeader from "./Components/ServicePageComp/SerHeader/SerHeader";
import Treatments from "./Components/ServicePageComp/Treatments/Treatments";
import Therapies from "./Components/ServicePageComp/Therapies/Therapies";
import Procedure from "./Components/ServicePageComp/procedures/procedures";
import Shlok from "./Components/ServicePageComp/Shlok/Shlok";

import ConHeader from "./Components/ConatactUsPageComp/ConHeader/ConHeader";
import Help from "./Components/ConatactUsPageComp/Help/Help";
import ContForm from "./Components/ConatactUsPageComp/ContForm/ContForm";
import ContMap from "./Components/ConatactUsPageComp/ContMap/ContMap";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <div className="font-sans bg-[#F3F3F3]">
      {/* Wrap Navbar in Suspense */}
      <Suspense fallback={<div className="text-center py-4">Loading Navbar...</div>}>
        <Navbar />
      </Suspense>

      <main className="min-h-screen">
        <Routes>
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-xl font-bold">
                404 - Page Not Found
              </div>
            }
          />

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

          <Route
            path="/about"
            element={
              <>
                <AbHeader />
                <Modern />
                <Philosophy />
                <Story />
                <Doctors />
                <Accreditations />
                <Founders />
                <ContactUs />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <SerHeader />
                <Treatments />
                <Therapies />
                <Procedure />
                <Shlok />
                <ContactUs />
              </>
            }
          />

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

      {/* Wrap Footer in Suspense */}
      <Suspense fallback={<div className="text-center py-4">Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
