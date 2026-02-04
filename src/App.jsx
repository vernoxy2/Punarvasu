// App.jsx
import React, { useEffect, useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"; // ✅ add this
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";

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
// FAQ Page
import FAQHeader from "./Components/FAQPageComp/FAQHeader/FAQHeader";
import Questions from "./Components/FAQPageComp/Questions/Questions.jsx";


const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="min-h-2xl">{children}</main>
    <Footer />
    {/* Floating WhatsApp Button */}
    <a
      href="https://wa.me/919601664092?text=Hello%20I%20would%20like%20to%20know%20more"
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
      delay: 100,
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
                {/* ✅ Home SEO */}
                <Helmet>
                  <title>
                    Punarvasu Ayurveda Chikitsalayam, Valsad – Holistic
                    Ayurvedic Healing
                  </title>
                  <meta
                    name="description"
                    content="Discover holistic health at Punarvasu Ayurveda Chikitsalayam, Valsad. We offer authentic Ayurvedic therapies, Panchakarma, and natural healing to rejuvenate body and mind."
                  />
                  <meta
                    property="og:title"
                    content="Punarvasu Ayurveda Chikitsalayam, Valsad – Holistic Ayurvedic Healing"
                  />
                  <meta
                    property="og:description"
                    content="Discover holistic health at Punarvasu Ayurveda Chikitsalayam, Valsad. We offer authentic Ayurvedic therapies, Panchakarma, and natural healing to rejuvenate body and mind."
                  />
                  <meta
                    property="og:url"
                    content="https://punarvasuayurveda.co.in/"
                  />
                  <meta
                    property="og:image"
                    content="https://punarvasuayurveda.co.in/path-to-your-og-image.jpg"
                  />
                </Helmet>

                <Heading />
                <WelcomeText />
                <Ayurveda />
                <CoreServices />
                <Suvarnaprashan />
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
                <Helmet>
                  {/* Title */}
                  <title>About Us – Punarvasu Ayurveda Chikitsalayam</title>

                  {/* Meta Tags */}
                  <meta
                    name="description"
                    content="Learn about our philosophy, modern Ayurveda practices, and the founders behind Punarvasu Ayurveda Chikitsalayam."
                  />
                  <meta
                    name="keywords"
                    content="ayurveda valsad, ayurvedic clinic, panchakarma center, about punarvasu"
                  />

                  {/* Open Graph */}
                  <meta
                    property="og:title"
                    content="About Us – Punarvasu Ayurveda Chikitsalayam"
                  />
                  <meta
                    property="og:description"
                    content="Learn about our philosophy, modern Ayurveda practices, and the founders behind Punarvasu Ayurveda Chikitsalayam."
                  />
                  <meta
                    property="og:url"
                    content="https://punarvasuayurveda.co.in/about"
                  />
                  <meta
                    property="og:image"
                    content="https://punarvasuayurveda.co.in/images/about-og.jpg"
                  />
                  <meta property="og:type" content="website" />

                  {/* Twitter Card */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta
                    name="twitter:title"
                    content="About Us – Punarvasu Ayurveda Chikitsalayam"
                  />
                  <meta
                    name="twitter:description"
                    content="Learn about our philosophy..."
                  />
                  <meta
                    name="twitter:image"
                    content="https://punarvasuayurveda.co.in/images/about-og.jpg"
                  />

                  {/* Canonical */}
                  <link
                    rel="canonical"
                    href="https://punarvasuayurveda.co.in/about"
                  />
                </Helmet>
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
                <Helmet>
                  {/* Title */}
                  <title>
                    Ayurvedic Services & Treatments – Punarvasu Ayurveda
                    Chikitsalayam, Valsad
                  </title>

                  {/* Meta Tags */}
                  <meta
                    name="description"
                    content="Explore authentic Ayurvedic treatments at Punarvasu Ayurveda Chikitsalayam, Valsad. We offer Panchakarma therapies including Virechan, Basti, Shirodhara, Netra Tarpana, Raktamokshana, Pizhichil, and more for holistic healing."
                  />
                  <meta
                    name="keywords"
                    content="ayurvedic treatments valsad, panchakarma therapy, virechan therapy, basti therapy, shirodhara, netra tarpana, raktamokshana, medicated vomiting, karnapooran, pizhichil, udvartana, agnikarma, herbal potli sweda, sthanik basti therapy, ayurvedic services valsad"
                  />

                  {/* Open Graph */}
                  <meta
                    property="og:title"
                    content="Ayurvedic Services & Treatments – Punarvasu Ayurveda Chikitsalayam, Valsad"
                  />
                  <meta
                    property="og:description"
                    content="Discover authentic Ayurvedic treatments including Panchakarma, Shirodhara, Virechan, Basti therapy, and specialized healing therapies at Punarvasu Ayurveda, Valsad."
                  />
                  <meta
                    property="og:url"
                    content="https://punarvasuayurveda.co.in/services"
                  />
                  <meta
                    property="og:image"
                    content="https://punarvasuayurveda.co.in/images/services-og.jpg"
                  />
                  <meta property="og:type" content="website" />

                  {/* Twitter Card */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta
                    name="twitter:title"
                    content="Ayurvedic Services & Treatments – Punarvasu Ayurveda Valsad"
                  />
                  <meta
                    name="twitter:description"
                    content="Authentic Ayurvedic treatments including Panchakarma, Shirodhara, Virechan, Basti therapy, and specialized healing therapies."
                  />
                  <meta
                    name="twitter:image"
                    content="https://punarvasuayurveda.co.in/images/services-og.jpg"
                  />

                  {/* Canonical */}
                  <link
                    rel="canonical"
                    href="https://punarvasuayurveda.co.in/services"
                  />
                </Helmet>
                <SerHeader />
                <Treatments />
                <Procedures />
                <Diseases />
                <Therapies />
                <ContactUs />
              </MainLayout>
            }
          />

          {/* FAQ Page */}
          <Route
            path="/faq"
            element={
              <MainLayout>
                <Helmet>
                  {/* Title */}
                  <title>
                    FAQ – Ayurveda Questions Answered | Punarvasu Ayurveda
                    Chikitsalayam
                  </title>

                  {/* Meta Tags */}
                  <meta
                    name="description"
                    content="Get answers to frequently asked questions about Ayurvedic treatments, Panchakarma therapies, consultation process, and wellness programs at Punarvasu Ayurveda Chikitsalayam, Valsad."
                  />
                  <meta
                    name="keywords"
                    content="ayurveda faq, panchakarma questions, ayurvedic treatment faqs, ayurveda consultation valsad, punarvasu ayurveda questions, ayurvedic therapy faqs"
                  />

                  {/* Open Graph */}
                  <meta
                    property="og:title"
                    content="FAQ – Ayurveda Questions Answered | Punarvasu Ayurveda Chikitsalayam"
                  />
                  <meta
                    property="og:description"
                    content="Find answers to common questions about Ayurvedic treatments, Panchakarma, consultations, and wellness programs at Punarvasu Ayurveda, Valsad."
                  />
                  <meta
                    property="og:url"
                    content="https://punarvasuayurveda.co.in/faq"
                  />
                  <meta
                    property="og:image"
                    content="https://punarvasuayurveda.co.in/images/faq-og.jpg"
                  />
                  <meta property="og:type" content="website" />

                  {/* Twitter Card */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta
                    name="twitter:title"
                    content="FAQ – Ayurveda Questions Answered | Punarvasu Ayurveda"
                  />
                  <meta
                    name="twitter:description"
                    content="Common questions about Ayurvedic treatments, Panchakarma, and wellness programs answered."
                  />
                  <meta
                    name="twitter:image"
                    content="https://punarvasuayurveda.co.in/images/faq-og.jpg"
                  />

                  {/* Canonical */}
                  <link
                    rel="canonical"
                    href="https://punarvasuayurveda.co.in/faq"
                  />
                </Helmet>
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
                <Helmet>
                  {/* Title */}
                  <title>
                    Contact Us – Book Ayurvedic Consultation | Punarvasu
                    Ayurveda Chikitsalayam, Valsad
                  </title>

                  {/* Meta Tags */}
                  <meta
                    name="description"
                    content="Get in touch with Punarvasu Ayurveda Chikitsalayam, Valsad for consultations, Ayurvedic treatments, Panchakarma therapies, and wellness programs. Call us or visit our clinic today."
                  />
                  <meta
                    name="keywords"
                    content="contact ayurveda valsad, ayurvedic consultation valsad, book ayurveda appointment, punarvasu ayurveda contact, ayurveda clinic valsad address, panchakarma consultation"
                  />

                  {/* Open Graph */}
                  <meta
                    property="og:title"
                    content="Contact Us – Book Ayurvedic Consultation | Punarvasu Ayurveda Valsad"
                  />
                  <meta
                    property="og:description"
                    content="Book your Ayurvedic consultation at Punarvasu Ayurveda Chikitsalayam, Valsad. Expert Ayurvedic treatments and wellness programs available."
                  />
                  <meta
                    property="og:url"
                    content="https://punarvasuayurveda.co.in/contact"
                  />
                  <meta
                    property="og:image"
                    content="https://punarvasuayurveda.co.in/images/contact-og.jpg"
                  />
                  <meta property="og:type" content="website" />

                  {/* Twitter Card */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta
                    name="twitter:title"
                    content="Contact Us – Book Ayurvedic Consultation | Punarvasu Ayurveda"
                  />
                  <meta
                    name="twitter:description"
                    content="Book your Ayurvedic consultation at Punarvasu Ayurveda Chikitsalayam, Valsad."
                  />
                  <meta
                    name="twitter:image"
                    content="https://punarvasuayurveda.co.in/images/contact-og.jpg"
                  />

                  {/* Canonical */}
                  <link
                    rel="canonical"
                    href="https://punarvasuayurveda.co.in/contact"
                  />
                </Helmet>
                <ConHeader />
                <Help />
                <ContForm />
              </MainLayout>
            }
          />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <MainLayout>
                <Helmet>
                  <title>404 – Page Not Found | Punarvasu Ayurveda</title>
                </Helmet>
                <div className="text-center py-40 text-5xl font-bold ">
                  404 - Page Not Found
                </div>
              </MainLayout>
            }
          />
        </Routes>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="fixed left-1/2 bottom-6 transform -translate-x-1/2 z-50 h-12 w-12 text-secondary flex items-center justify-center hover:scale-105 transition-transform "
          >
            <IoIosArrowDropupCircle
              className="bg-none text-transparent/40 rounded-full"
              size={34}
            />
          </button>
        )}

        {/* Consultation Popup */}
        <ConsultationPopup
          isOpen={isConsultOpen}
          onClose={() => setIsConsultOpen(false)}
        />
      </div>
  );
};

export default App;
