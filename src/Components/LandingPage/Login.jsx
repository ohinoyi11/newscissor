import React from "react";
import "../LoginPage/Login.css";
import Footer from "./Footer";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import Button from "./Button";

function Login() {
  return (
    <div>
      <div className="loginpage">
        <div className="logincard">
          <div className="upper">
            <div className="upperdetails">
              <p>Log in with:</p>
              <div className="alterlog">
                <div className="logos">
                  <span>
                    <img src={google} alt="" />
                  </span>
                  <h4>Google</h4>
                </div>
                <div className="logos">
                  <span>
                    <img src={apple} alt="" />
                  </span>
                  <h4>Apple</h4>
                </div>
              </div>
              <p
                style={{
                  padding: "10px",
                  background: "white",
                  marginTop: "150px",
                  zIndex: "1",
                  position: "absolute",
                }}
              >
                Or
              </p>
            </div>
            <div className="details">
              <form action="">
                <input type="text" placeholder="Email address or username" />
                <input type="text" placeholder="Password" />
              </form>
              <p className="fp">Forgot your password?</p>
            </div>
          </div>

          <div className="lower">
            <Button
              label="Log In"
              style={{
                width: "500px",
                height: "50px",

                padding: "12px 24px 12px 24px",
                borderradius: "100px",
              }}
            />
            <p>
              Don't have an Account?
              <span style={{ color: "blue", cursor: "pointer" }}> Sign Up</span>
            </p>
            <p className="other">
              By signing in with an account, you agree to <br />
              Sciccor's <span> </span>
              <span style={{ color: "black" }}>
                Terms of Service, Privacy Policy
              </span>{" "}
              <span> </span>
              and <span> Acceptable Use Policy.</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
