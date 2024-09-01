import React, { useState } from "react";
import "./SignUp.css";
import Footer from "./Footer";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import Button from "./Button";
import { Eye, EyeOff } from "lucide-react";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <div className="loginpage">
          <div className="logincard">
            <div className="upper">
              <div className="upperdetails">
                <p>Sign Up with:</p>
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
                  <input type="text" placeholder="Email address " />
                  <input type="text" placeholder="username" />
                  <div className="password-input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="password-toggle-button"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <div className="password-input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Retype Password"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="password-toggle-button"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="lower">
              <Button
                label="Sign Up with Email"
                style={{
                  width: "500px",
                  height: "50px",
                  padding: "12px 24px 12px 24px",
                  borderRadius: "100px",
                }}
              />
              <p className="other">
                By signing up with an account, you agree to <br />
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
    </div>
  );
}

export default SignUp;
