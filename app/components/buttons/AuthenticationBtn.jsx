import React from "react";
import "./all-btn.css";
const AuthenticationBtn = ({ text }) => {
  return (
    <button className="authentication-btn" type="button">
      {text}
    </button>
  );
};

export default AuthenticationBtn;
