import React from "react";
import "./Revolution.css";
import blue1 from "../../assets/blue1.svg";
import blue2 from "../../assets/blue2.svg";
import Button from "./Button";

function Revolution() {
  return (
    <div className="revolution">
      <div className="revimg">
        <img className="blue1" src={blue1} alt="" />
        <img className="blue2" src={blue2} alt="" />
      </div>

      <div className="revolutiontext">
        <h3>Revolutionizing Link Optimization</h3>
        <Button label="Get Started" />
      </div>
    </div>
  );
}

export default Revolution;
