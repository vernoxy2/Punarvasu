// App.jsx
import React, { useEffect, useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";

/* =========================
   Lazy Layout Components
========================= */
const Navbar = lazy(() => import("./ShareIngComp/Navbar/Navbar"));
const Footer = lazy(() => import("./ShareIngComp/Footer/Footer"));
const ConsultationPopup = lazy(() =>
  import("./ShareIngComp/ConsultationPopup/BookConsultation")
);

/* =========================
   Lazy Home Components
========================= */
const Heading = lazy(() =>
  import("./Components/HomePageComp/Heading/Heading")
);
const WelcomeText = lazy(() =>
  import("./Components/HomePageComp/WelcomText/WelcomeText")
);
const Ayurveda = lazy(() =>
  import("./Components/HomePageComp/Ayurveda/Ayurveda")
);
const CoreServices = lazy(() =>
  import("./Components/HomePageComp/CoreServices/CoreServices")
);
const Suvarnaprashan = lazy(() =>
  import("./Components/HomePageComp/Suvarnaprashan/Suvarnaprashan")
);
const Experts = lazy(() =>
  import("./Components/HomePageComp/Experts/Experts")
);
const Certifications = lazy(() =>
  import("./Components/HomePageComp/Certifications/Certifications")
);
const WhyChoose = lazy(() =>
  import("./Components/HomePageComp/WhyChoose/WhyChoose")
);
const Testimonial = lazy(() =>
  import("./Components/HomePageComp/Testimonial/Testimonial")
);
const ContactUs = lazy(() =>
  import("./Components/HomePageComp/ContactUs/ContactUs")
);

/* =========================
   Lazy About Components
========================= */
const AbHeader = lazy(() =>
  import("./Components/AboutPageComp/AbHeader/AbHeader")
);
const Modern = lazy(() =>
  import("./Components/AboutPageComp/Modern/Modern")
);
const Philosophy = lazy(() =>
  import("./Components/AboutPageComp/Philosophy/Philosophy")
);
const Story = lazy(() =>
  import("./Components/AboutPageComp/Story/Story")
);
const Doctors = lazy(() =>
  import("./Components/AboutPageComp/Doctors/Doctors")
);
const Accreditations = lazy(() =>
  import("./Components/AboutPageComp/Accreditations/Accreditations")
);
const Founders = lazy(() =>
  import("./Components/AboutPageComp/Founders/Founders")
);

/* =========================
   Lazy Service Components
========================= */
const SerHeader = lazy(() =>
  import("./Components/ServicePageComp/SerHeader/SerHeader")
);
const Treatments = lazy(() =>
  import("./Components/ServicePageComp/Treatments/Treatments")
);
const Procedures = lazy(() =>
  import("./Components/ServicePageComp/Procedures/Procedures")
);
const Diseases = lazy(() =>
  import("./Components/ServicePageComp/Diseases/Diseases")
);
const Therapies = lazy(() =>
  import("./Components/ServicePageComp/Therapies/Therapies")
);

/* =========================
   Lazy FAQ + Contact Components
========================= */
const FAQHeader = lazy(() =>
  import("./Components/FAQPageComp/FAQHeader/FAQHeader")
);
const Questions = lazy(() =>
  import("./Components/FAQPageComp/Questions/Questions")
);
const ConHeader = lazy(() =>
  import("./Components/ConatactUsPageComp/ConHeader/ConHeader")
);
const Help = lazy(() =>
  import("./Components/ConatactUsPageComp/Help/Help")
);
const ContForm = lazy(() =>
  import("./Components/ConatactUsPageComp/ContForm/ContForm")
);

/* =========================
   Layout
========================= */
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="min-h-2xl">{children}</main>
    <Footer />

    {/* WhatsApp Button */}
    <a
      href="https://wa.me/919601664092?text=Hello%20I%20would%20like%20to%20know%20more"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50"
    >
      <div className="h-14 w-14 rounded-full bg-[#14c755] shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
        <FaWhatsapp className="text-white" size={30} />
      </div>
    </a>
  </>
);

/* =========================
   App
========================= */
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
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 2000);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-[#F3F3F3] overflow-hidden">
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center text-xl font-semibold">
            Loading...
          </div>
        }
      >
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Helmet>
                  <title>
                    Punarvasu Ayurveda Chikitsalayam, Valsad – Holistic
                    Ayurvedic Healing
                  </title>
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

          {/* About */}
          <Route
            path="/about"
            element={
              <MainLayout>
                <Helmet>
                  <title>About Us – Punarvasu Ayurveda Chikitsalayam</title>
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

          {/* Services */}
          <Route
            path="/services"
            element={
              <MainLayout>
                <Helmet>
                  <title>
                    Ayurvedic Services – Punarvasu Ayurveda Chikitsalayam
                  </title>
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

          {/* FAQ */}
          <Route
            path="/faq"
            element={
              <MainLayout>
                <Helmet>
                  <title>FAQ – Punarvasu Ayurveda</title>
                </Helmet>
                <FAQHeader />
                <Questions />
                <ContactUs />
              </MainLayout>
            }
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={
              <MainLayout>
                <Helmet>
                  <title>Contact – Punarvasu Ayurveda</title>
                </Helmet>
                <ConHeader />
                <Help />
                <ContForm />
              </MainLayout>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <MainLayout>
                <div className="text-center py-40 text-5xl font-bold">
                  404 - Page Not Found
                </div>
              </MainLayout>
            }
          />
        </Routes>

        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="fixed left-1/2 bottom-6 transform -translate-x-1/2 z-50"
          >
            <IoIosArrowDropupCircle size={40} />
          </button>
        )}

        {/* Consultation Popup */}
        <ConsultationPopup
          isOpen={isConsultOpen}
          onClose={() => setIsConsultOpen(false)}
        />
      </Suspense>
    </div>
  );
};

export default App;
