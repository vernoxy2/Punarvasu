import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Shared Layout (Lazy Loaded)
const Navbar = lazy(() => import("./ShareIngComp/Navbar/Navbar"));
const Footer = lazy(() => import("./ShareIngComp/Footer/Footer"));

// Home Page Components (Not yet lazy loaded — we'll optimize this later)
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
import Founders from "./Components/AboutPageComp/Founders/Founders";
import Story from "./Components/AboutPageComp/Story/Story";
import Doctors from "./Components/AboutPageComp/Doctors/Doctors";

// Service Page Components
import SerHeader from "./Components/ServicePageComp/SerHeader/SerHeader";
import Treatments from "./Components/ServicePageComp/Treatments/Treatments";
import Therapies from "./Components/ServicePageComp/Therapies/Therapies";
import Procedure from "./Components/ServicePageComp/Procedures/Procedures";
import Shlok from "./Components/ServicePageComp/Shlok/Shlok";

// Contact Us Page Components
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
        <Navbar />

      <main className="min-h-screen">
        <Routes>
          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-xl font-bold">
                404 - Page Not Found
              </div>
            }
          />

          {/* Home Page */}
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

          {/* About Page */}
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

          {/* Services Page */}
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

          {/* Contact Page */}
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
