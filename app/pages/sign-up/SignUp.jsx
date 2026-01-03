import React from "react";
import "./sign-up.css";
import webChairImg from "../../assets/images/web-sign-in-chair.png";
import mobChairImg from "../../assets/images/mob-sign-in-chair.png";
import AuthenticationBtn from "../../components/buttons/AuthenticationBtn";
import companyLogo from "../../assets/images/company-logo.png";
import { useState } from "react";

const SignUp = () => {
  const [nameVal, setNameVal] = useState("");
  const [usernameVal, setUsernameVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const handlePassword = (e) => {
    setPasswordVal(e.target.value);
  };
  const handleEmail = (e) => {
    setEmailVal(e.target.value);
  };
  const handleUsername = (e) => {
    setUsernameVal(e.target.value);
  };
  const handleName = (e) => {
    setNameVal(e.target.value);
  };
  return (
    <div className="signup-div">
      <div className="signup-left-div">
        <div className="signup-left-img-div">
          <img
            className="signup-left-div-img web-sign-img"
            src={webChairImg}
            alt="chair"
          />
          <img
            className="signup-left-div-img mob-sign-img"
            src={mobChairImg}
            alt="chair"
          />
        </div>

        <div className="logo-div">
          <img src={companyLogo} alt="company-logo" />
        </div>
      </div>
      <div className="signup-right-div">
        <div className="signup-right-div-parent">
          <h4 className="signup-title">Sign up</h4>
          <p className="signup-text">
            Already have an account?{" "}
            <span className="sign-in-text">Sign in</span>
          </p>
          <div className="signup-form">
            <div className="signup-input-div">
              <input
                className="signup-input name-input"
                type="text"
                value={nameVal}
                onChange={handleName}
                placeholder="Your name"
              />
            </div>
            <div className="signup-input-div">
              <input
                className="signup-input username-input"
                type="text"
                value={usernameVal}
                onChange={handleUsername}
                placeholder="Username"
              />
            </div>
            <div className="signup-input-div">
              <input
                className="signup-input email-input"
                type="email"
                value={emailVal}
                onChange={handleEmail}
                placeholder="Email address"
              />
            </div>
            <div className="signup-input-div password-field">
              <input
                className="signup-input password-input"
                type="password"
                value={passwordVal}
                onChange={handlePassword}
                placeholder="Password"
              />

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C19.1745 16.2047 15.8155 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C4.82549 7.79533 8.18448 5 12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531Z"
                  stroke="#6C7275"
                  strokeWidth="1.5"
                />
                <path
                  d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                  stroke="#6C7275"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
          <div className="policy-div">
            <input className="signu-checkbox" type="checkbox" />
            <p className="policy-text">
              I agree with{" "}
              <span className="policy-span-text">Privacy Policy</span> and{" "}
              <span className="policy-span-text">Terms of Use</span>
            </p>
          </div>
          <AuthenticationBtn text={"Sign up"} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
