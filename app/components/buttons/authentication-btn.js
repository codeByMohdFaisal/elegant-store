import React from "react";
import "./authentication-btn.css";
const AuthenticationBtn = ({ text }) => {
  return (
    <button className="authentication-btn" type="button">
      {text}
    </button>
  );
};

export default AuthenticationBtn;
