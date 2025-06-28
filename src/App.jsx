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

const App = () => {
  return (
    <div className="font-sans">
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
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
