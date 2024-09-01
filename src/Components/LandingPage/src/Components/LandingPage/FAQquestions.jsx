import React, { useState } from "react";
import "./faqquestions.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        <span>{question}</span>
        <span className={`faq-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQDropdown = ({ faqs }) => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQDropdown;
