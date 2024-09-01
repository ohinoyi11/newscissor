import React from "react";
import "./Hero.css";
import Button from "./Button";
import heroshapes from "../../assets/heroshapes.svg";
import flatcone from "../../assets/flatcone.svg";
import splash from "../../assets/splash.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="centertext">
        <h2>
          Optimize Your Online Experience with Our Advanced{" "}
          <span style={{ color: "#005AE2" }}>URL Shortening </span>
          Solution
        </h2>
        <img
          style={{ marginTop: "-60px", position: "absolute" }}
          src={splash}
          alt=""
        />
        <p>
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        <Button label="Sign Up" onClick={""} className="my-custom-class" />
        <Button
          label="Learn More"
          onClick={""}
          className="my-custom-class"
          style={{ backgroundColor: "white", color: "#0065FE" }}
        />
      </div>
      <div className="heroshapes">
        <img src={heroshapes} alt="vbcvbc" />
      </div>
      <img className="flatcone" src={flatcone} alt="" />
    </div>
  );
}

export default Hero;
