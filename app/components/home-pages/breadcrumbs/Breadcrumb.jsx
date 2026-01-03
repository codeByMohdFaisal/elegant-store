import React from "react";
import breadCrumbArrow from "../../../assets/images/breadcrumb-arrow.svg";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <ul className="header-breadcrumb">
      <li className="header-breadcrumb-item">
        <p className="header-breadcrumb-label">Home</p>
        <img
          className="header-breadcrumb-icon"
          src={breadCrumbArrow}
          alt="header-breadcrumb arrow"
        />
      </li>
      <li className="header-breadcrumb-item">
        <p className="header-breadcrumb-label">Shop</p>
        <img
          className="header-breadcrumb-icon"
          src={breadCrumbArrow}
          alt="header-breadcrumb arrow"
        />
      </li>
      <li className="header-breadcrumb-item">
        <p className="header-breadcrumb-label">Living Room</p>
        <img
          className="header-breadcrumb-icon"
          src={breadCrumbArrow}
          alt="header-breadcrumb arrow"
        />
      </li>
      <li className="header-breadcrumb-item">
        <p className="header-breadcrumb-label selected-header-breadcrumb-label">
          Product
        </p>
        <img
          className="header-breadcrumb-icon"
          src={breadCrumbArrow}
          alt="header-breadcrumb arrow"
        />
      </li>
    </ul>
  );
};

export default Breadcrumb;
