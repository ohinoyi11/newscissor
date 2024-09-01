import React from "react";
import "./Footer.css";
import whitelogo from "../../assets/Logo.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import rfooter from "../../assets/rfooter.svg";
import lfooter from "../../assets/lfooter.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="unity">
        <div className="title">
          <img className="footlogo" src={whitelogo} alt="" />
          <ul className="logo">
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
            <li>
              <img src={linkedin} alt="" />
            </li>
          </ul>
        </div>
        <div className="moreinfo">
          <div className="firstquarter">
            <span className="spanup">
              <h4>Why Scissor ?</h4>
              <ul className="lists">
                <li>
                  <a href="">Scissor 101</a>
                </li>
                <li>
                  <a href="">Integrations & API</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
              </ul>
            </span>
            <span className="spanup">
              <h4>Resources</h4>
              <ul className="lists">
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Resource Library</a>
                </li>
                <li>
                  <a href="">App Connectors</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Trust Center</a>
                </li>
                <li>
                  <a href="">Browser Extension</a>
                </li>
                <li>
                  <a href="">Mobile App</a>
                </li>
              </ul>
            </span>
          </div>
          <div className="firstquarter">
            <span className="spanup">
              <h4>Solutions</h4>
              <ul className="lists">
                <li>
                  <a href="">Social Media</a>
                </li>
                <li>
                  <a href="">Digital Marketing</a>
                </li>
                <li>
                  <a href="">Customer Service</a>
                </li>
                <li>
                  <a href="">For Developers</a>
                </li>
              </ul>
            </span>
            <span className="spanup">
              <h4>Features</h4>
              <ul className="lists">
                <li>
                  <a href="">Branded Links</a>
                </li>
                <li>
                  <a href="">Mobile Links</a>
                </li>
                <li>
                  <a href="">Campaign</a>
                </li>
                <li>
                  <a href="">Management & Analytics</a>
                </li>
                <li>
                  <a href="">QR Code generation</a>
                </li>
              </ul>
            </span>
          </div>
          <div className="firstquarter">
            <span className="spanup">
              <h4>Products</h4>
              <ul className="lists">
                <li>
                  <a href="">Link Management</a>
                </li>
                <li>
                  <a href="">QR Codes</a>
                </li>
                <li>
                  <a href="">Link-in-bio</a>
                </li>
              </ul>
            </span>
            <span className="spanup">
              <h4>Legal</h4>
              <ul className="lists">
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Cookie Policy</a>
                </li>
                <li>
                  <a href="">Terms of Service</a>
                </li>
                <li>
                  <a href="">Acceptable Use Policy</a>
                </li>
                <li>
                  <a href="">Code of Conduct</a>
                </li>
              </ul>
            </span>
          </div>
          <div className="firstquarter">
            <span className="spanup">
              <h4>Company</h4>
              <ul className="lists">
                <li>
                  <a href="">About Scissor</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Press</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Reviews</a>
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div className="footimg">
          <img src={lfooter} alt="" />
          <img src={rfooter} alt="" />
        </div>
      </div>
      <div className="tagline">
        <p>Term of Service | Security | ⓒ Scissor 2023</p>
      </div>
    </div>
  );
}

export default Footer;
