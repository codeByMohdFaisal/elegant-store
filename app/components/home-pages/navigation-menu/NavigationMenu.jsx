"use client";
import Image from "next/image";
import "../../../home-page/HomePage.css";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import CartModal from "../../modal/cart-modal/CartModal";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationMenu = ({ targetFadedBgRef }) => {
  const pathname = usePathname();
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
            width={100}
            height={100}
            priority
          />
          <Image
            src={"/images/company-logo.png"}
            width={100}
            height={100}
            priority
            alt="company-logo"
          />
        </div>

        <nav className="home-page-nav">
          <ul className="navbar-parent">
            <li>
              <Link
                className={`navbar-items ${
                  pathname.includes("home-page") ? "selected-nav-items" : ""
                }`}
                href={"/home-page"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`navbar-items ${
                  pathname.includes("shop") ? "selected-nav-items" : ""
                }`}
                href={"/"}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className={`navbar-items ${
                  pathname.includes("product-details")
                    ? "selected-nav-items"
                    : ""
                }`}
                href={"/product-details"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className={`navbar-items ${
                  pathname.includes("contact-us") ? "selected-nav-items" : ""
                }`}
                href={"/"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-icons">
          <Image
            className="navbar-icon"
            src={"/images/search 02.png"}
            alt="search-icon"
            width={100}
            height={100}
          />
          <Image
            className="navbar-icon"
            src={"/images/user-circle.png"}
            alt="profile-icon"
            width={100}
            height={100}
          />
          <Image
            className="cart-icon"
            src={"/images/cart-button.png"}
            alt="cart-icon"
            width={100}
            height={100}
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
