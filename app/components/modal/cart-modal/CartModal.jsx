import Image from "next/image";
import "./CartModal.css";
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
                <Image fill src={"/images/cart-modal-img-1.png"} alt="item" />
              </div>
              <div className="cart-modal-product-desc">
                <p className="cart-modal-product-name">Tray Table</p>
                <p className="cart-modal-product-color-heading">
                  Color : Black
                </p>
                <div className="cart-modal-quantity-selector">
                  <Image
                    fill
                    src={"/images/cart-modal-minus.svg"}
                    alt="minus"
                  />
                  <p className="cart-modal-number-of-product">2</p>
                  <Image fill src={"/images/cart-modal-plus.svg"} alt="plus" />
                </div>
              </div>
            </div>
            <div className="cart-modal-price-div">
              <p className="cart-modal-price">$299.00</p>
              <div className="cart-modal-cross-img-div">
                <Image fill src={"/images/cart-modal-cross.svg"} alt="plus" />
              </div>
            </div>
          </div>
          <div className="product-main-div">
            <div className="product-parent-product-desc-div">
              <div className="cart-modal-product-img">
                <Image fill src={"/images/cart-modal-img-2.png"} alt="item" />
              </div>
              <div className="cart-modal-product-desc">
                <p className="cart-modal-product-name">Tray Table</p>
                <p className="cart-modal-product-color-heading">Color : Red</p>
                <div className="cart-modal-quantity-selector">
                  <Image
                    fill
                    src={"/images/cart-modal-minus.svg"}
                    alt="minus"
                  />
                  <p className="cart-modal-number-of-product">4</p>
                  <Image fill src={"/images/cart-modal-plus.svg"} alt="plus" />
                </div>
              </div>
            </div>
            <div className="cart-modal-price-div">
              <p className="cart-modal-price">$499.00</p>
              <div className="cart-modal-cross-img-div">
                <Image fill src={"/images/cart-modal-cross.svg"} alt="plus" />
              </div>
            </div>
          </div>
          <div className="product-main-div">
            <div className="product-parent-product-desc-div">
              <div className="cart-modal-product-img">
                <Image fill src={"/images/cart-modal-img-3.png"} alt="item" />
              </div>
              <div className="cart-modal-product-desc">
                <p className="cart-modal-product-name">Table Lamp</p>
                <p className="cart-modal-product-color-heading">
                  Color : Green
                </p>
                <div className="cart-modal-quantity-selector">
                  <Image
                    fill
                    src={"/images/cart-modal-minus.svg"}
                    alt="minus"
                  />
                  <p className="cart-modal-number-of-product">1</p>
                  <Image fill src={"/images/cart-modal-plus.svg"} alt="plus" />
                </div>
              </div>
            </div>
            <div className="cart-modal-price-div">
              <p className="cart-modal-price">$99.00</p>
              <div className="cart-modal-cross-img-div">
                <Image fill src={"/images/cart-modal-cross.svg"} alt="plus" />
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
