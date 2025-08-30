import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What is Ayurveda?",
    answer:
      "Ayurveda, the oldest medical system originated from Indian sub continent still effectively practicing as an approved medical treatment option for all ailments in India. Definition of Ayurveda is science of life and its the Holistic approach which differentiate Ayurveda from other medical streams.",
  },
  {
    question: "Do Ayurveda medicines have side effects?",
    answer:
      "Ayurvedic medications are divided into classical Ayurvedic preparations and patent Ayurveda medications. Classical medications are from medical literature almost 3000-5000yrs old and clearly mention dosage, indication, contraindications. Since contraindications are mentioned there will be side effects if you don’t follow indications. Patent products are as per government guidelines.",
  },
  {
    question: "Does Ayurveda Treatment involves Surgery?",
    answer:
      "Yes, susruta is regarded as the father of surgery and his literature susruta Samhitha clearly indicates the procedures, instruments, medications used during his time for surgery",
  },
  {
    question: "Do we need to follow diet when undergoing Ayurvedic Treatment?",
    answer:
      "Yes. Ayurveda in its Holistic approach consider food as one of the major part in disease management.",
  },
  {
    question: "What is Panchakarma?",
    answer:
      "Five fold shodhana procedures ( can be translated to cleansing/ cleaning procedures). Nasyam,  vamana, virechana, vasti, rakthamoksha",
  },
  {
    question: "What are the advantages of Ayurveda over Allopathy?",
    answer:
      "Holistic approach of Ayurveda, personalized medications, lifestyle management, usage of herbal medicines",
  },
  {
    question: "What is the importance of Ayurveda Treatment?",
    answer:
      "At present only 5% of emergency cases only are addressed effectively with potent modern medications. When we use emergency medications in daily life, the option of drug withdrawal won’t happen and our body needs support for even minor ailments. No effective, long standing medications and protocols for chronic diseases are not available at present in allopathy without side effects.",
  },
  {
    question: "How is Ayurveda different from modern medicines?",
    answer:
      "Holistic approach, natural medications along with lifestyle modifications and diet are unique with Ayurveda",
  },
  {
    question: "What is the objective of Ayurveda?",
    answer: "Health for all and the definition itself is science of life.",
  },
  {
    question: "How does Ayurveda approach to diagnose and treat the disease?",
    answer:
      " methodologies used  in Ayurveda 1. Observation, physical examination, asking questions . 2. Observing clinical signs and symptoms,Diagnosing disease and its prognosis according to clinical symptoms, Differential diagnosis of the above using textual references. 3. Eight fold examination ( ashtasthana pareeksha)- This will cover personalized diagnosis 4. Use of modern technological advancements like imaging techniques, blood biochemistry at its best for diagnosis.Treatments depend upon final diagnosis and personalized medicine ( unique to Ayurveda) are postulated.",
  },
];

const Questions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className=" flex flex-col md:flex-row gap-12 py-12 container mx-auto">
      {/* Left Side: FAQ Intro and Card */}
      <div className="flex-1 flex flex-col gap-8">
        <div>
          <h2
            className="text-3xl md:text-5xl font-bold text-primary mb-2"
            data-aos="fade-down"
          >
            Frequently Asked
            <br />
            Questions
          </h2>
          <p className="text-textColor max-w-lg" data-aos="fade-down">
            Find answers to frequently asked questions about your child's care,
            including vaccination schedules, visiting hours, appointments, and
            more. Designed to support parents with clear, helpful information
            every step of the way.
          </p>
        </div>
        <div
          className="bg-white border-2 border-primary rounded-xl shadow p-6 max-w-lg"
          data-aos="fade-down"
        >
          <h3 className="text-2xl font-bold text-primary mb-2">
            Still have a Question?
          </h3>
          <p className="text-textColor mb-4">
            Can't find the answer to your question? Send us an email and we'll
            get back to you as soon as possible!
          </p>
          <a
            href="mailto:punarvasuayurveda@gmail.com"
            className="bg-primary text-white font-bold px-6 py-2 rounded-lg hover:bg-primary/80 transition"
          >
            Send Email
          </a>
        </div>
      </div>
      {/* Right Side: FAQ Accordions */}
      <div className="flex-1 flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4"
            data-aos="fade-down"
          >
            <button
              className="flex justify-between items-center w-full text-left font-bold text-primary text-base md:text-lg focus:outline-none"
              onClick={() => handleToggle(idx)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === idx && (
              <div className="mt-2 text-textColor text-sm md:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
