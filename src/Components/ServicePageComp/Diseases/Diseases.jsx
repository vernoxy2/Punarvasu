import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import D1 from "../../../assets/ServiceAssets/Diseases/D1.png";
import D2 from "../../../assets/ServiceAssets/Diseases/D2.png";
import D3 from "../../../assets/ServiceAssets/Diseases/D3.png";
import D4 from "../../../assets/ServiceAssets/Diseases/D4.png";
import D5 from "../../../assets/ServiceAssets/Diseases/D5.png";
import D6 from "../../../assets/ServiceAssets/Diseases/D6.png";
import D7 from "../../../assets/ServiceAssets/Diseases/D7.png";
import D8 from "../../../assets/ServiceAssets/Diseases/D8.png";
import D9 from "../../../assets/ServiceAssets/Diseases/D9.png";
import D10 from "../../../assets/ServiceAssets/Diseases/D10.png";
import D11 from "../../../assets/ServiceAssets/Diseases/D11.png";
import D12 from "../../../assets/ServiceAssets/Diseases/D12.png";
import D13 from "../../../assets/ServiceAssets/Diseases/D13.png";
import D14 from "../../../assets/ServiceAssets/Diseases/D14.png";
import D15 from "../../../assets/ServiceAssets/Diseases/D15.png";
import D16 from "../../../assets/ServiceAssets/Diseases/D16.png";
import D17 from "../../../assets/ServiceAssets/Diseases/D17.png";
import D18 from "../../../assets/ServiceAssets/Diseases/D18.png";

const DiseasesList = [
  // Diseases section 1
  {
    icon: D1,
    title: "Digestive Disorders",
    desc: "Punarvasu treats chronic digestive problems like acidity, constipation, IBS, IBD, colitis, and Crohn’s disease with Ayurvedic care, focusing on root-cause healing and restoring gut health naturally.",
  },
  {
    icon: D2,
    title: "Liver Diseases",
    desc: "Punarvasu effectively treats liver conditions like Hepatitis, Cirrhosis, NAFLD, Alcoholic liver disease, Gallstones, and other chronic or autoimmune liver disorders with personalized Ayurveda care.",
  },
  {
    icon: D3,
    title: "Diabetes Reversal",
    desc: "Diabetes is a long-term metabolic condition that, if not treated from its root, can silently damage vital organs over time—even when blood sugar levels seem to remain within normal range.",
  },
  {
    icon: D4,
    title: "Kidney Disorders",
    desc: "Punarvasu treats various kidney disorders like CKD, kidney stones, PKD, nephrotic syndrome, UTIs, AKI, and rare syndromes with personalized Ayurvedic care for lasting relief.",
  },
  {
    icon: D5,
    title: "Arthritis & Joint Pain",
    desc: "Punravasu treats joint problems like Arthritis, Spondylosis, Sciatica, and Frozen Shoulder with Ayurveda, focusing on root-cause healing and long-term pain relief.",
  },
  {
    icon: D6,
    title: "IBS & Piles",
    desc: "Punarvasu Ayurveda provides personalized care for IBS and piles through herbal remedies, diet plans, Panchakarma, and expert consultation, ensuring natural and holistic healing from the root cause.",
  },
  //   Diseases section 2
  {
    icon: D7,
    title: "Skin Disorders",
    desc: "Eczema, psoriasis, and other skin issues arise from body imbalances. Ayurveda heals from within, targeting root causes for lasting relief and healthier skin.",
  },
  {
    icon: D8,
    title: "Obesity-Related Disorder",
    desc: "Effective evaluation, personalized care, and expert support for obesity-related issues to restore balance, enhance wellness, and promote overall health.",
  },
  {
    icon: D9,
    title: "Headache & Migraine",
    desc: "Management of frequent, intense headaches that may include symptoms like nausea, vomiting, light and sound sensitivity, and vision-related issues such as blurriness or auras.",
  },
  {
    icon: D10,
    title: "Infertility & PCOS",
    desc: "This specialty deals with women’s reproductive health, pregnancy, childbirth, menstrual issues, fertility, hormonal disorders, and gynecological disease management.",
  },
  {
    icon: D11,
    title: "Respiratory Disorders",
    desc: "Breathing disorders such as asthma, COPD, lung infections like pneumonia and bronchitis, tuberculosis, and allergic respiratory conditions.",
  },
  {
    icon: D12,
    title: "Sinusitis & Allergies",
    desc: "Sinus infections and allergies result from triggers like weather shifts, dust, mold, pollen, foods, medications, pets, insects, latex, and pollutants.",
  },
  //   Diseases section 3
  {
    icon: D13,
    title: "Auto-immune Disorders",
    desc: "Punarvasu treats various autoimmune conditions like lupus, arthritis, type 1 diabetes, MS, vitiligo, psoriasis, IBD, thyroid disorders, and celiac disease.",
  },
  {
    icon: D14,
    title: "Heart & Cardiovascular Health",
    desc: "Heart concerns like high blood pressure, coronary disease, stroke, heart failure, arrhythmia, valve issues, aneurysm, and congenital conditions.",
  },
  {
    icon: D15,
    title: "Neurological Disorders",
    desc: "Neurological conditions like Alzheimer’s, Parkinson’s, stroke, epilepsy, migraines, ALS, MS, cerebral palsy, Huntington’s, neuropathy, and other nerve-related disorders holistically.",
  },
  {
    icon: D16,
    title: "Mental Health Conditions",
    desc: "Mood swings, nervousness, trauma disorders, compulsive behavior, attention issues, emotional imbalance, stress disorders, phobias, mental fatigue, and behavioral conditions.",
  },
  {
    icon: D17,
    title: "Sexual Disorder",
    desc: "Punarvasu treats conditions like erectile issues, early ejaculation, reduced desire, painful intercourse, and various male and female sexual health concerns.",
  },
  {
    icon: D18,
    title: "Eye & Ear Diseases",
    desc: "Evaluate symptoms, conduct an in depth examination, identify root causes, and offer customized therapies tailored to your individual body type and health needs.",
  },
];

const Diseases = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section id="diseases" className="container py-12 md:py-20 space-y-6 md:space-y-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-secondary">
        Diseases
      </h1>
      <p className="text-xl md:text-2xl text-center text-textColor">
        Panchakarma & Chronic Disease Management
      </p>
      <Slider {...settings}>
        {DiseasesList.map((item, index) => (
          <div key={index} className="px-3 h-full">
            <div className="bg-white shadow-md rounded-lg flex flex-col justify-start min-h-[212px]  hover:shadow-xl hover:scale-105 transition duration-300 my-3">
              <div className="flex h-full">
                {/* Icon area (centered vertically and horizontally) */}
                <div className="bg-primary w-[30%] flex flex-col items-center justify-center rounded-l-md h-[212px] p-2">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="pointer-events-none object-contain h-[100px] p-1"
                  />
                </div>

                {/* Content area */}
                <div className="w-[70%] p-4 flex flex-col justify-center">
                  <h3 className="text-lg xl:text-xl leading-none font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-textColor text-sm 2xl:text-base mt-2 leading-tight ">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Diseases;