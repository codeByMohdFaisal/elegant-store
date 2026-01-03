import React, { useState } from "react";
import companyLogo from "../../../assets/images/company-logo.png";
import mobMenuIcon from "../../../assets/images/mob-menu.svg";
import searchIcon from "../../../assets/images/search 02.png";
import profileIcon from "../../../assets/images/user-circle.png";
import cartIcon from "../../../assets/images/Cart Button.png";
import OutsideClickHandler from "react-outside-click-handler";
import CartModal from "../../modal/cart-modal/CartModal";
import { Link } from "react-router-dom";

const NavigationMenu = ({ targetFadedBgRef }) => {
  const [openCartModal, setOpenCartModal] = useState(false);
  const handleCartModal = (e, val) => {
    setOpenCartModal(val);
    if (val) {
      targetFadedBgRef?.current?.classList.add("faded-bg-for-modal");
    } else {
      targetFadedBgRef?.current?.classList.remove("faded-bg-for-modal");
    }
  };
  return (
    <>
      <div className="home-page-top-section">
        <div className="mob-menu-parent">
          <img className="mob-menu-icon" src={mobMenuIcon} alt="mob-menu" />
          <img src={companyLogo} alt="company-logo" />
        </div>

        <nav className="home-page-nav">
          <ul className="navbar-parent">
            <li>
              <Link
                className={`navbar-items ${
                  window.location.pathname.includes("home-page")
                    ? "selected-nav-items"
                    : ""
                }`}
                to={"/home-page"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`navbar-items ${
                  window.location.pathname.includes("shop")
                    ? "selected-nav-items"
                    : ""
                }`}
                to={"/"}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className={`navbar-items ${
                  window.location.pathname.includes("product-details")
                    ? "selected-nav-items"
                    : ""
                }`}
                to={"/product-details"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className={`navbar-items ${
                  window.location.pathname.includes("contact-us")
                    ? "selected-nav-items"
                    : ""
                }`}
                to={"/"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-icons">
          <img className="navbar-icon" src={searchIcon} alt="search-icon" />
          <img className="navbar-icon" src={profileIcon} alt="profile-icon" />
          <img
            className="cart-icon"
            src={cartIcon}
            alt="cart-icon"
            onClick={(e) => handleCartModal(e, !openCartModal)}
          />
        </div>
      </div>
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpenCartModal(false);
          targetFadedBgRef?.current?.classList.remove("faded-bg-for-modal");
        }}
      >
        <CartModal openCartModal={openCartModal} />
      </OutsideClickHandler>
    </>
  );
};

export default NavigationMenu;
