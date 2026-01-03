import React from "react";
import "./CartModal.css";
import cartModalImg1 from "../../../assets/images/cart-modal-img-1.png";
import cartModalImg2 from "../../../assets/images/cart-modal-img-2.png";
import cartModalImg3 from "../../../assets/images/cart-modal-img-3.png";
import cartModalCross from "../../../assets/images/cart-modal-cross.svg";
import cartModalPlus from "../../../assets/images/cart-modal-plus.svg";
import cartModalMinus from "../../../assets/images/cart-modal-minus.svg";
import AuthenticationBtn from "../../buttons/AuthenticationBtn";

const CartModal = ({ openCartModal }) => {
  return (
    <div
      className={`cart-modal-main  ${
        openCartModal ? "open-cart-modal" : "close-cart-modal"
      }`}
    >
      <div className="cart-modal-parent">
        <div className="cart-modal-top">
          <p className="heading-28 cart-modal-title">Cart</p>
          <div className="product-main-div">
            <div className="product-parent-product-desc-div">
              <div className="cart-modal-product-img">
                <img src={cartModalImg1} alt="item" />
              </div>
              <div className="cart-modal-product-desc">
                <p className="cart-modal-product-name">Tray Table</p>
                <p className="cart-modal-product-color-heading">
                  Color : Black
                </p>
                <div className="cart-modal-quantity-selector">
                  <img src={cartModalMinus} alt="minus" />
                  <p className="cart-modal-number-of-product">2</p>
                  <img src={cartModalPlus} alt="plus" />
                </div>
              </div>
            </div>
            <div className="cart-modal-price-div">
              <p className="cart-modal-price">$299.00</p>
              <div className="cart-modal-cross-img-div">
                <img src={cartModalCross} alt="plus" />
              </div>
            </div>
          </div>
          <div className="product-main-div">
            <div className="product-parent-product-desc-div">
              <div className="cart-modal-product-img">
                <img src={cartModalImg2} alt="item" />
              </div>
              <div className="cart-modal-product-desc">
                <p className="cart-modal-product-name">Tray Table</p>
                <p className="cart-modal-product-color-heading">Color : Red</p>
                <div className="cart-modal-quantity-selector">
                  <img src={cartModalMinus} alt="minus" />
                  <p className="cart-modal-number-of-product">4</p>
                  <img src={cartModalPlus} alt="plus" />
                </div>
              </div>
            </div>
            <div className="cart-modal-price-div">
              <p className="cart-modal-price">$499.00</p>
              <div className="cart-modal-cross-img-div">
                <img src={cartModalCross} alt="plus" />
              </div>
            </div>
          </div>
          <div className="product-main-div">
            <div className="product-parent-product-desc-div">
              <div className="cart-modal-product-img">
                <img src={cartModalImg3} alt="item" />
              </div>
              <div className="cart-modal-product-desc">
                <p className="cart-modal-product-name">Table Lamp</p>
                <p className="cart-modal-product-color-heading">
                  Color : Green
                </p>
                <div className="cart-modal-quantity-selector">
                  <img src={cartModalMinus} alt="minus" />
                  <p className="cart-modal-number-of-product">1</p>
                  <img src={cartModalPlus} alt="plus" />
                </div>
              </div>
            </div>
            <div className="cart-modal-price-div">
              <p className="cart-modal-price">$99.00</p>
              <div className="cart-modal-cross-img-div">
                <img src={cartModalCross} alt="plus" />
              </div>
            </div>
          </div>
        </div>
        <div className="cart-modal-bottom">
          <div className="cart-modal-sub-total-div">
            <p className="cart-modal-sub-total-heading">Subtotal</p>
            <p className="cart-modal-sub-total-price">$99.00</p>
          </div>
          <div className="cart-modal-total-div">
            <p className="cart-modal-total-heading">Total</p>
            <p className="cart-modal-total-price">$1099.00</p>
          </div>
          <AuthenticationBtn text={"Checkout"} />
          <p className="cart-modal-view-cart-btn">View Cart</p>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
