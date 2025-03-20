
import React, { useState } from "react";
export default function AboutFaqs() {
    const [openAccordion, setOpenAccordion] = useState(null);
  
    const toggleAccordion = (index) => {
      setOpenAccordion(openAccordion === index ? null : index);
    };
  
    const faqs = [
      { question: "How does mobile tyre fitting work?", answer: "Our mobile tyre fitters come to your home, workplace, or any specified location to replace your tyres on-site." },
      { question: "Do you offer same-day tyre fitting?", answer: "Yes! In most cases, we can offer same-day mobile tyre fitting across London and the UK." },
      { question: "What areas do you cover?", answer: "We provide tyre fitting services across London and other regions in the UK. Contact us to check availability." },
      { question: "Can I book your tyre fitting services online?", answer: "Yes, simply book through our website or call us to schedule an appointment at your preferred location." },
      { question: "What types of tyres do you offer?", answer: "We stock various cheap and premium tyre brands, 4x4 tyres, van tyres, winter tyres, all weather tyres and more." },
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
