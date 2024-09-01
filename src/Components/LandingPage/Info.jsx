import React from "react";
import "./info.css";
import link from "../../assets/link.svg";
import qrcode from "../../assets/qrcode.svg";
import analysis from "../../assets/analysis.svg";
import edit from "../../assets/analysis.svg";

function Info() {
  return (
    <div className="info">
      <div className="stats">
        <div className="title">
          One Stop. <br /> Four
          <span style={{ color: "#005AE2" }}> Possibilities.</span>
        </div>
        <div className="mainstat">
          <div>
            <h3>3M</h3>
            <p>Active users</p>
          </div>
          <div>
            <h3>60M</h3>
            <p>Links & QR codes created</p>
          </div>
          <div>
            <h3>1B</h3>
            <p>Clicked & Scanned connections</p>
          </div>
          <div>
            <h3>300K</h3>
            <p>App Integrations</p>
          </div>
        </div>
      </div>
      <div className="why">
        <div className="half1">
          <h3>Why choose Scissors</h3>
          <p>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </div>
        <div className="half2">
          <div className="halflabel">
            <div className="individual">
              <img src={link} alt="" />
              <h3>URL Shortening</h3>
              <p>
                Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.
              </p>
            </div>
            <div className="individual">
              <img src={edit} alt="" />
              <h3>Custom URLs</h3>
              <p>
                With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </div>
          </div>
          <div className="halflabel">
            <div className="individual">
              <img src={qrcode} alt="" />
              <h3>QR Codes</h3>
              <p>
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
            <div className="individual">
              <img src={analysis} alt="" />
              <h3>Data Analytics</h3>
              <p>
                Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
