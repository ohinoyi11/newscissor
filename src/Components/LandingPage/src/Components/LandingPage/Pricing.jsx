import React from "react";
import "./Pricing.css";
import check from "../../assets/check.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const PricingTier = ({ className, title, price, description, features }) => (
  <div className={className}>
    <p
      className={`${
        className.includes("secondbox")
          ? "spricetag"
          : className.includes("thirdbox")
          ? "tpricetag"
          : "pricetag"
      }`}
    >
      {title}
    </p>
    <div
      className={`${
        className.includes("secondbox")
          ? "spricedetails"
          : className.includes("thirdbox")
          ? "tpricedetails"
          : "pricedetails"
      }`}
    >
      <div
        className={`${
          className.includes("secondbox")
            ? "spricetype"
            : className.includes("thirdbox")
            ? "tpricetype"
            : "pricetype"
        }`}
      >
        <h3>{price}</h3>
        <p>{description}</p>
      </div>
      <div
        className={`${
          className.includes("secondbox")
            ? "spricecontent"
            : className.includes("thirdbox")
            ? "tpricecontent"
            : "pricecontent"
        }`}
      >
        {features.map((feature, index) => (
          <p key={index}>
            <div></div>
            <span style={{ display: "flex", gap: "20px" }}>
              <img src={check} alt="" />
              {feature}
            </span>
          </p>
        ))}
      </div>
    </div>
  </div>
);

const pricingData = [
  {
    className: "firstbox",
    title: "Basic",
    price: "Free",
    description: "Free plan for all users",
    features: [
      "Unlimited URL Shortening",
      "Basic Link Analytics",
      "Customizable Short Links",
      "Standard Support",
      "Ad-Supported",
    ],
  },
  {
    className: "secondbox",
    title: "Professional",
    price: "$15/month",
    description: "Ideal for business creators",
    features: [
      "Enhanced Link Analytics",
      "Custom Branded Domains",
      "Advanced Link Customization",
      "Priority Support",
      "Ad-free Experience",
    ],
  },
  {
    className: "thirdbox",
    title: "Teams",
    price: "$25/month",
    description: "Share with up to 10 users",
    features: [
      "Team Collaboration",
      "User Roles and Permissions",
      "Enhanced Security",
      "API Access",
      "Dedicated Account Manager",
    ],
  },
];

function Pricing() {
  return (
    <div className="pricing">
      <div className="pricetitle">
        <h3>
          A <span style={{ color: "#005AE2" }}>price perfect</span> for your
          needs.
        </h3>
        <p>
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>

      <div className="price">
        {pricingData.map((tier, index) => (
          <PricingTier key={index} {...tier} />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Link to="/custom-pricing">
          <Button
            label="Get Custom Pricing"
            style={{
              backgroundColor: "white",
              color: "#0065FE",
              border: "1px solid #0065FE",
            }}
          />
        </Link>
        <Button label="Select Pricing" />
      </div>
    </div>
  );
}

export default Pricing;
