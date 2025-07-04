import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy loaded layout components
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
import Procedures from "./Components/ServicePageComp/Procedures/Procedures";
import Therapies from "./Components/ServicePageComp/Therapies/Therapies";
import Shlok from "./Components/ServicePageComp/Shlok/Shlok";

import ConHeader from "./Components/ConatactUsPageComp/ConHeader/ConHeader";
import Help from "./Components/ConatactUsPageComp/Help/Help";
import ContForm from "./Components/ConatactUsPageComp/ContForm/ContForm";
import ContMap from "./Components/ConatactUsPageComp/ContMap/ContMap";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 100, // 👈 Delay added here
      once: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="font-sans bg-[#F3F3F3] overflow-hidden">
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Heading />
              <WelcomeText />
              <Ayurveda />
              <CoreServices />
              <Experts />
              <Certifications />
              <WhyChoose />
              <Testimonial />
              <ContactUs />
            </MainLayout>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <MainLayout>
              <AbHeader />
              <Modern />
              <Philosophy />
              <Story />
              <Doctors />
              <Accreditations />
              <Founders />
              <ContactUs />
            </MainLayout>
          }
        />

        {/* Services Page */}
        <Route
          path="/services"
          element={
            <MainLayout>
              <SerHeader />
              <Treatments />
              <Procedures />
              <Therapies />
              <Shlok />
            </MainLayout>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <MainLayout>
              <ConHeader />
              <Help />
              <ContForm />
              <ContMap />
            </MainLayout>
          }
        />

        {/* ✅ 404 Page with Navbar & Footer */}
        <Route
          path="*"
          element={
            <MainLayout>
              <div className="text-center py-40 text-5xl font-bold ">
                404 - Page Not Found
              </div>
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
