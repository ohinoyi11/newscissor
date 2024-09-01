import React from "react";
import Footer from "./Footer";
import "./Custom-Pricing.css";
import Button from "./Button";

function CustomPricing() {
  return (
    <div>
      <div className="custompage">
        <div className="quotecard">
          <h3>Let's get in touch</h3>
          <form className="form">
            <div className="form-row">
              <div className="form-group half-width">
                <label className="label" htmlFor="first-name">
                  First Name*
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="name"
                />
              </div>
              <div className="form-group half-width">
                <label className="label" htmlFor="last-name">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="name"
                />
              </div>
            </div>
            {[
              "Company Name",
              "Business Email Address",
              "Phone Number",
              "Job Title",
              "Company Size",
              "Primary Use Case",
              "Country",
            ].map((label, index) => (
              <div key={index} className="form-group">
                <label
                  className="label"
                  htmlFor={label.toLowerCase().replace(/\s+/g, "-")}
                >
                  {label}*
                </label>
                <input
                  className="quoteinput"
                  type="text"
                  id={label.toLowerCase().replace(/\s+/g, "-")}
                  name={label.toLowerCase().replace(/\s+/g, "-")}
                />
              </div>
            ))}
            <p className="para">
              Scissor requires the contact information you provide in order to
              reach out to you regarding our products and services. You have the
              option to unsubscribe from these communications whenever you wish.
              To learn more about how to unsubscribe, our privacy practices, and
              our dedication to safeguarding your privacy, please refer to our
              Privacy Policy.
            </p>
            <Button
              label="Submit"
              style={{
                width: "492px",
                height: "36px",
                // padding: "12px 24px 12px 24px",
              }}
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomPricing;
