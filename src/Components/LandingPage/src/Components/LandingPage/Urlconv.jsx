import React from "react";
import "./Urlconv.css";
import rurl from "../../assets/rurl.svg";
import lurl from "../../assets/lurl.svg";
import Button from "./Button";

function Urlconv() {
  return (
    <div className="urlconv">
      <img className="lurl" src={lurl} alt="" />
      <img className="rurl" src={rurl} alt="" />
      <div className="shortcard">
        <div className="input">
          <input
            type="text"
            placeholder="Paste URL here..."
            className="uppertext"
          />
          <div className="lowerinput">
            <input type="text" className="suppertext" />
            <input type="text" className="tuppertext" />
          </div>
        </div>
        <div className="submit">
          <Button label="Trim URL" style={{ width: "418px" }} />
          <p>
            By clicking TrimURL, I agree to the Terms of Service, Privacy Policy
            and Use of Cookies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Urlconv;
