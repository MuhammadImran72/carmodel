import React, { useState } from "react";

const FAQAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    { question: "What is your return policy?", answer: "You can return items within 30 days of purchase with a receipt." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship to select countries worldwide." },
    { question: "How can I track my order?", answer: "You can track your order using the tracking number provided in the confirmation email." },
    { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and bank transfers." },
    { question: "How can I contact customer service?", answer: "You can contact us via email at support@example.com or call us at 123-456-7890." },
    { question: "Are there any discounts available?", answer: "Yes, we offer seasonal discounts. Subscribe to our newsletter to stay updated." },
    { question: "How do I reset my password?", answer: "Click on 'Forgot Password' on the login page and follow the instructions." },
    { question: "Can I change my order after placing it?", answer: "You can modify your order within 24 hours of placing it by contacting customer support." },
    { question: "Do you offer gift wrapping services?", answer: "Yes, gift wrapping is available at checkout for an additional fee." },
    { question: "What is your cancellation policy?", answer: "Orders can be canceled within 24 hours. After that, cancellation may not be guaranteed." },
  ];

  return (

    <section className="commonhomepagespacetopandbottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="commonheadingyellow spacebtm">
          <h3> Tyres: Frequently Asked Questions</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-10 m-auto">
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
};

export default FAQAccordion;
