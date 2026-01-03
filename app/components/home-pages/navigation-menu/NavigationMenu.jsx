"use client";
import Image from "next/image";
import { useState } from "react";
// import OutsideClickHandler from "react-outside-click-handler";
import CartModal from "../../modal/cart-modal/CartModal";
// import { Link } from "react-router-dom";

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
          <Image
            className="mob-menu-icon"
            src={"/images/mob-menu.svg"}
            alt="mob-menu"
            fill
            priority
          />
          <Image
            src={"/images/company-logo.png"}
            fill
            priority
            alt="company-logo"
          />
        </div>

        {/* <nav className="home-page-nav">
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
        </nav> */}
        <div className="navbar-icons">
          <Image
            className="navbar-icon"
            src={"/images/search 02.png"}
            alt="search-icon"
            fill
            priority
          />
          <Image
            className="navbar-icon"
            src={"/images/user-circle.png"}
            alt="profile-icon"
            fill
            priority
          />
          <Image
            className="cart-icon"
            src={"/images/cart-button.png"}
            alt="cart-icon"
            fill
            priority
            onClick={(e) => handleCartModal(e, !openCartModal)}
          />
        </div>
      </div>
      {/* <OutsideClickHandler
        onOutsideClick={() => {
          setOpenCartModal(false);
          targetFadedBgRef?.current?.classList.remove("faded-bg-for-modal");
        }}
      >
        <CartModal openCartModal={openCartModal} />
      </OutsideClickHandler> */}
    </>
  );
};

export default NavigationMenu;
