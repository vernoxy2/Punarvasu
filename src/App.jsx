import React, { useEffect, useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

// Lazy loaded layout components
const Navbar = lazy(() => import("./ShareIngComp/Navbar/Navbar"));
const Footer = lazy(() => import("./ShareIngComp/Footer/Footer"));

// Eagerly loaded components
import Heading from "./Components/HomePageComp/Heading/Heading";
import WelcomeText from "./Components/HomePageComp/WelcomText/WelcomeText";
import Ayurveda from "./Components/HomePageComp/Ayurveda/Ayurveda";
import CoreServices from "./Components/HomePageComp/CoreServices/CoreServices";
import Suvarnaprashan from "./Components/HomePageComp/Suvarnaprashan/Suvarnaprashan";
import Experts from "./Components/HomePageComp/Experts/Experts";
import Certifications from "./Components/HomePageComp/Certifications/Certifications";
import WhyChoose from "./Components/HomePageComp/WhyChoose/WhyChoose";
import Testimonial from "./Components/HomePageComp/Testimonial/Testimonial";
import ContactUs from "./Components/HomePageComp/ContactUs/ContactUs";
// About Page
import AbHeader from "./Components/AboutPageComp/AbHeader/AbHeader";
import Modern from "./Components/AboutPageComp/Modern/Modern";
import Philosophy from "./Components/AboutPageComp/Philosophy/Philosophy";
import Accreditations from "./Components/AboutPageComp/Accreditations/Accreditations";
import Founders from "./Components/AboutPageComp/Founders/Founders";
import Story from "./Components/AboutPageComp/Story/Story";
import Doctors from "./Components/AboutPageComp/Doctors/Doctors";
// Service Page
import SerHeader from "./Components/ServicePageComp/SerHeader/SerHeader";
import Treatments from "./Components/ServicePageComp/Treatments/Treatments";
import Procedures from "./Components/ServicePageComp/Procedures/Procedures";
import Diseases from "./Components/ServicePageComp/Diseases/Diseases";
import Therapies from "./Components/ServicePageComp/Therapies/Therapies";
// Contact Us Page
import ConHeader from "./Components/ConatactUsPageComp/ConHeader/ConHeader";
import Help from "./Components/ConatactUsPageComp/Help/Help";
import ContForm from "./Components/ConatactUsPageComp/ContForm/ContForm";
import ConsultationPopup from "./ShareIngComp/ConsultationPopup/BookConsultation";
import { IoIosArrowDropupCircle } from "react-icons/io";
import FAQHeader from "./Components/FAQPageComp/FAQHeader/FAQHeader";
import Questions from "./Components/FAQPageComp/Questions/Questions.jsx";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="min-h-screen">{children}</main>
    <Footer />
    {/* Floating WhatsApp Button */}
    <a
      href="https://wa.me/917947112761?text=Hello%20I%20would%20like%20to%20know%20more"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50"
    >
      <div className="h-14 w-14 rounded-full bg-[#14c755] shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
        <FaWhatsapp className="text-white" size={30} />
      </div>
    </a>
  </>
);

const App = () => {
  const [isConsultOpen, setIsConsultOpen] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 100, // 👈 Delay added here
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 2000);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
              <Suvarnaprashan/>
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
              <Diseases />
              <Therapies />
              <ContactUs />
            </MainLayout>
          }
        />

        {/* Faq Page */}
        <Route
          path="/faq"
          element={
            <MainLayout>
              <FAQHeader />
              <Questions />
              <ContactUs />
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
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed left-1/2 bottom-6 transform -translate-x-1/2 z-50 h-12 w-12 text-secondary flex items-center justify-center hover:scale-105 transition-transform "
        >
          <IoIosArrowDropupCircle className="bg-primary text-white/60 rounded-full" size={34} />
        </button>
      )}
      <ConsultationPopup
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </div>
  );
};

export default App;
