import React, { useRef, useState, useEffect } from "react";
import "./FAQs.css";
import faq1 from "../../assets/faq1.svg";
import faq2 from "../../assets/faq2.svg";
import FAQDropdown from "./FAQquestions";

function FAQ() {
  const faqs = [
    {
      question: "How does URL shortening work?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
    },
    {
      question:
        "Is it necessary to create an account to use the URL shortening service?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum. Fusce id vehicula leo. Nulla at pretium risus, eu pulvinar diam. Sed a metus imperdiet, porttitor felis eget, bibendum enim. Suspendisse non vulputate tortor. Ut eu lacus sed orci suscipit faucibus. Mauris ac massa in ante cursus imperdiet ac eget risus. Integer ac orci metus. Mauris libero diam, tincidunt non tortor ac, imperdiet efficitur dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id porta dolor, vel rutrum nunc. Phasellus turpis turpis, ultrices at blandit vel, ullamcorper non lectus.",
    },
    {
      question: "Are the shortened links permanent? Will they expire?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum. Fusce id vehicula leo. Nulla at pretium risus, eu pulvinar diam. Sed a metus imperdiet, porttitor felis eget, bibendum enim. Suspendisse non vulputate tortor. Ut eu lacus sed orci suscipit faucibus. Mauris ac massa in ante cursus imperdiet ac eget risus. Integer ac orci metus. Mauris libero diam, tincidunt non tortor ac, imperdiet efficitur dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id porta dolor, vel rutrum nunc. Phasellus turpis turpis, ultrices at blandit vel, ullamcorper non lectus.",
    },
    {
      question:
        "Are there any limitations on the number of URLs I can shorten?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum. Fusce id vehicula leo. Nulla at pretium risus, eu pulvinar diam. Sed a metus imperdiet, porttitor felis eget, bibendum enim. Suspendisse non vulputate tortor. Ut eu lacus sed orci suscipit faucibus. Mauris ac massa in ante cursus imperdiet ac eget risus. Integer ac orci metus. Mauris libero diam, tincidunt non tortor ac, imperdiet efficitur dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id porta dolor, vel rutrum nunc. Phasellus turpis turpis, ultrices at blandit vel, ullamcorper non lectus.",
    },
    {
      question:
        "Can I customize the shortened URLs to reflect my brand or content?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum. Fusce id vehicula leo. Nulla at pretium risus, eu pulvinar diam. Sed a metus imperdiet, porttitor felis eget, bibendum enim. Suspendisse non vulputate tortor. Ut eu lacus sed orci suscipit faucibus. Mauris ac massa in ante cursus imperdiet ac eget risus. Integer ac orci metus. Mauris libero diam, tincidunt non tortor ac, imperdiet efficitur dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id porta dolor, vel rutrum nunc. Phasellus turpis turpis, ultrices at blandit vel, ullamcorper non lectus.",
    },
    {
      question: "Can I track the performance of my shortened URLs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum. Fusce id vehicula leo. Nulla at pretium risus, eu pulvinar diam. Sed a metus imperdiet, porttitor felis eget, bibendum enim. Suspendisse non vulputate tortor. Ut eu lacus sed orci suscipit faucibus. Mauris ac massa in ante cursus imperdiet ac eget risus. Integer ac orci metus. Mauris libero diam, tincidunt non tortor ac, imperdiet efficitur dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id porta dolor, vel rutrum nunc. Phasellus turpis turpis, ultrices at blandit vel, ullamcorper non lectus.",
    },
    {
      question:
        "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum. Fusce id vehicula leo. Nulla at pretium risus, eu pulvinar diam. Sed a metus imperdiet, porttitor felis eget, bibendum enim. Suspendisse non vulputate tortor. Ut eu lacus sed orci suscipit faucibus. Mauris ac massa in ante cursus imperdiet ac eget risus. Integer ac orci metus. Mauris libero diam, tincidunt non tortor ac, imperdiet efficitur dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id porta dolor, vel rutrum nunc. Phasellus turpis turpis, ultrices at blandit vel, ullamcorper non lectus.",
    },
    {
      question: "What is a QR code and what can it do?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum. Fusce id vehicula leo. Nulla at pretium risus, eu pulvinar diam. Sed a metus imperdiet, porttitor felis eget, bibendum enim. Suspendisse non vulputate tortor. Ut eu lacus sed orci suscipit faucibus. Mauris ac massa in ante cursus imperdiet ac eget risus. Integer ac orci metus. Mauris libero diam, tincidunt non tortor ac, imperdiet efficitur dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id porta dolor, vel rutrum nunc. Phasellus turpis turpis, ultrices at blandit vel, ullamcorper non lectus.",
    },
    {
      question:
        "Is there an API available for integrating the URL shortening service into my own applications or websites?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis hendrerit ligula vitae condimentum. Fusce id vehicula leo. Nulla at pretium risus, eu pulvinar diam. Sed a metus imperdiet, porttitor felis eget, bibendum enim. Suspendisse non vulputate tortor. Ut eu lacus sed orci suscipit faucibus. Mauris ac massa in ante cursus imperdiet ac eget risus. Integer ac orci metus. Mauris libero diam, tincidunt non tortor ac, imperdiet efficitur dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id porta dolor, vel rutrum nunc. Phasellus turpis turpis, ultrices at blandit vel, ullamcorper non lectus.",
    },
  ];
  return (
    <div className="faq">
      <img className="faq1" src={faq1} alt="" />
      <img className="faq2" src={faq2} alt="" />
      <div className="faqcard">
        <FAQDropdown faqs={faqs} />
      </div>
    </div>
  );
}

export default FAQ;
