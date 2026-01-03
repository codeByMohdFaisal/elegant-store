import React from "react";
import companyWhiteLogo from "../../../assets/images/white-logo.svg";
import instagram from "../../../assets/images/instagram.svg";
import facebook from "../../../assets/images/facebook.svg";
import youTube from "../../../assets/images/youtube.svg";

const Footer = () => {
  return (
    <footer className="home-page-footer">
      <div className="home-page-container">
        <div className="hp-footer-menu">
          <div className="hp-footer-menu-left-div">
            <img src={companyWhiteLogo} alt="company-logo" />
            <div className="hp-footer-center-line"></div>
            <p className="hp-footer-store-name">Gift & Decoration Store</p>
          </div>
          <ul className="hp-footer-menu-right-div">
            <li className="hp-menu-li text-14-semi-bold">Home</li>
            <li className="hp-menu-li text-14-semi-bold">Shop</li>
            <li className="hp-menu-li text-14-semi-bold">Product</li>
            <li className="hp-menu-li text-14-semi-bold">Blog</li>
            <li className="hp-menu-li text-14-semi-bold">Contact Us</li>
          </ul>
        </div>
        <div className="hp-copyright-div">
          <div className="hp-copyright-left-div">
            <p className="copyright-text">
              Copyright © 2023 3legant. All rights reserved
            </p>
            <p className="privacy-policy">Privacy Policy</p>
            <p className="privacy-policy">Terms of Use</p>
          </div>
          <div className="hp-copyright-right-div">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={youTube} alt="you tube" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
