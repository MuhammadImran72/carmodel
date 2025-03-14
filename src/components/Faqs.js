
import React, { useState } from "react";
export default function Faqs() {
    const [openAccordion, setOpenAccordion] = useState(null);
  
    const toggleAccordion = (index) => {
      setOpenAccordion(openAccordion === index ? null : index);
    };
  
    const faqs = [
      { question: "How much does mobile tyre fitting cost?", answer: "Our prices vary depending on your tyre size, type, and location. We offer affordable rates without hidden fees." },
      { question: "Do you offer same-day tyre fitting?", answer: "Yes! In most cases, we can offer same-day mobile tyre fitting across London and the UK." },
      { question: "What types of tyres do you supply?", answer: "We stock a wide range, including cheap tyres, premium 4x4 tyres, van tyres, and winter tyres." },
      { question: "Can you fit tyres at my home or workplace?", answer: "Absolutely! Our service is designed for convenience—we’ll come to your home, workplace, or any safe location." },
      { question: "Do you offer emergency tyre replacement services?", answer: "Yes, we provide 24-hour emergency mobile tyre fitting in London and surrounding areas. If you're stuck with a flat tyre, our team will reach you quickly to get you back on the road safely." },
    ];

  return (
    <section className="commonhomepagespacetopandbottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="commonheading spacebtm">
              <h3> Tyres: Frequently Asked Questions</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 ">
          <div className="accordion accordion-flush" id="accordionFlushExample">
      {faqs.map((faq, index) => (
        <div className="accordion-item rounded-3 border-0 shadow mb-2" key={index}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button fw-semibold d-flex justify-content-between align-items-center ${
                openAccordion === index ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(index)}
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${index}`}
              aria-expanded={openAccordion === index}
              aria-controls={`flush-collapse${index}`}
            >
              {faq.question}
              <i
                className={`ms-auto bi ${
                  openAccordion === index ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              ></i>
            </button>
          </h2>
          <div
            id={`flush-collapse${index}`}
            className={`accordion-collapse collapse ${
              openAccordion === index ? "show" : ""
            }`}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
          </div>
        </div>
      </div>
    </section>
  );
}
