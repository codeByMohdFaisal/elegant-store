"use client";
import Image from "next/image";
import React, { useRef } from "react";
import "./ProductDetails.css";
import HomePageHeader from "../components/home-pages/header/HomePageHeader";
import NavigationMenu from "../components/home-pages/navigation-menu/NavigationMenu";
import ContactUs from "../layouts/contact-us/ContactUs";
import Footer from "../components/home-pages/footer/Footer";
import Breadcrumb from "../components/home-pages/breadcrumbs/Breadcrumb";
import AuthenticationBtn from "../components/buttons/AuthenticationBtn";
import RatingBox from "../components/ratings/RatingBox";

const ProductDetails = () => {
  const targetFadedBgRef = useRef(null);
  return (
    <div
      ref={targetFadedBgRef}
      style={{
        position: "relative",
      }}
      className="product-details-page"
    >
      <HomePageHeader
        bgColor={"#F3F5F7"}
        textColor={"#343839"}
        ntfText={"30% off storewide — Limited time!"}
      />
      <div className="home-page-container">
        <NavigationMenu targetFadedBgRef={targetFadedBgRef} />
      </div>
      <div className="home-page-container">
        <Breadcrumb />
      </div>
      <section className="product-details-section">
        <div className="home-page-container">
          <div className="product-details-img-desc-parent-div">
            <div className="product-details-images">
              <div className="product-details-main-img-div">
                <Image
                  className="product-details-main-img"
                  src="/images/product-detail-img1.png"
                  alt="img-1"
                  width={100}
                  height={100}
                />
                <div className="new-tag-div">
                  <div className="new-tag">
                    <p className="new-tag-text">New</p>
                  </div>
                  <div className="discount-div">
                    <p className="discount-text">-%50</p>
                  </div>
                </div>
                <div className="carousel-parent-div">
                  <div className="carousel-left-arrow-img-div">
                    <Image
                      className="carousel-left-arrow-img"
                      src="/images/carousel-arrow-left.svg"
                      alt="carousel-left-arrow"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="carousel-left-arrow-img-div">
                    <Image
                      className="carousel-right-arrow-img"
                      src="/images/carousel-arrow-right.svg"
                      alt="carousel-right-arrow"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
              <div className="product-other-related-images">
                <div className="product-related-image-div">
                  <Image
                    className="product-related-image"
                    src="/images/product-detail-img2.png"
                    alt="img-2"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="product-related-image-div">
                  <Image
                    className="product-related-image"
                    src="/images/product-detail-img3.png"
                    alt="img-3"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="product-related-image-div">
                  <Image
                    className="product-related-image"
                    src="/images/product-detail-img4.png"
                    alt="img-4"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>

            <div className="product-details-description">
              <div className="product-details-top-desc-div">
                <div className="rating-review-div">
                  <RatingBox />
                  <p className="no-of-reviews-text">11 Reviews</p>
                </div>
                <p className="product-details-title heading-54">Tray Table</p>
                <p className="product-details-description-text">
                  Buy one or buy a few and make every space where you sit more
                  convenient. Light and easy to move around with removable tray
                  top, handy for serving snacks.
                </p>
                <div className="product-details-price-div">
                  <p className="product-details-actual-price">$199.00</p>
                  <p className="product-details-old-price">$400.00</p>
                </div>
              </div>
              <div className="sale-end-timer-div">
                <p className="offer-expire-title">Offer expires in:</p>
                <div className="timer-clock-parent-div">
                  <div className="timer-clock-div">
                    <div className="time-container">
                      <div className="actual-time">
                        <p className="timer-number heading-34">02</p>
                      </div>
                      <p className="time-duration">Days</p>
                    </div>
                  </div>
                  <div className="timer-clock-div">
                    <div className="time-container">
                      <div className="actual-time">
                        <p className="timer-number heading-34">12</p>
                      </div>
                      <p className="time-duration">Hours</p>
                    </div>
                  </div>
                  <div className="timer-clock-div">
                    <div className="time-container">
                      <div className="actual-time">
                        <p className="timer-number heading-34">45</p>
                      </div>
                      <p className="time-duration">Minutes</p>
                    </div>
                  </div>
                  <div className="timer-clock-div">
                    <div className="time-container">
                      <div className="actual-time">
                        <p className="timer-number heading-34">05</p>
                      </div>
                      <p className="time-duration">Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-attributes-div">
                <p className="measurement-title">Measurements</p>
                <p className="measurement-title-desc">17 1/2x20 5/8 "</p>
                <div className="product-choose-color-heading-div">
                  <p className="product-choose-color-heading">Choose Color</p>
                  <Image
                    src="/images/choose-color-right-arrow.svg"
                    alt="right-arrow"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="product-color-name">Black</p>
                <div className="product-images-color-div">
                  <div className="color-image-div">
                    <Image
                      src="/images/product-detail-img5.png"
                      className="color-image"
                      alt="color-img-1"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="color-image-div">
                    <Image
                      src="/images/product-detail-img6.png"
                      className="color-image"
                      alt="color-img-2"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="color-image-div">
                    <Image
                      src="/images/product-detail-img7.png"
                      className="color-image"
                      alt="color-img-3"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="color-image-div">
                    <Image
                      src="/images/product-detail-img8.png"
                      className="color-image"
                      alt="color-img-4"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="product-quantity-selector-parent-div">
                  <div className="quantity-wishlist-parent">
                    <div className="quantity-selector">
                      <Image
                        src="/images/quantity-plus-icon.svg"
                        className="quantity-selector-minus-icon"
                        alt="minus-icon"
                        width={100}
                        height={100}
                      />
                      <p className="quantity-selector-text">1</p>
                      <Image
                        src="/images/quantity-minus-icon.svg"
                        className="quantity-selector-plus-icon"
                        alt="plus-icon"
                        width={100}
                        height={100}
                      />
                    </div>
                    <button className="wishllist-btn">
                      <Image
                        src="/images/btn-wishlist-icon.svg"
                        className="wishlist-btn-icon"
                        alt="wishlist-btn-icon"
                        width={100}
                        height={100}
                      />
                      Wishlist
                    </button>
                  </div>
                  <AuthenticationBtn text={"Add to cart"} />
                </div>
              </div>
              <div className="product-category-div">
                <div className="product-category-top-div">
                  <p className="product-cat-heading">SKU</p>
                  <p className="product-cat-desc">1117</p>
                </div>
                <div className="product-category-bottom-div">
                  <p className="product-cat-heading">CATEGORY</p>
                  <p className="product-cat-desc">Living Room, Bedroom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customer-section">
        <div className="home-page-container">
          <ul className="customer-menu">
            <li className="customer-menu-item">Additional Info</li>
            <li className="customer-menu-item">Questions</li>
            <li className="customer-menu-item selected-customer-menu-item">
              Reviews
            </li>
          </ul>

          <div className="customer-review-div">
            <p className="customer-review-heading">Customer Reviews</p>
            <div className="rating-review-div">
              <RatingBox />
              <p className="no-of-reviews-text">11 Reviews</p>
            </div>
            <p className="product-name-title">Tray Table</p>
            <div className="write-review-div">
              {/* <div className="emoji-parent-div">
                <div className="emoji-img-div">
                  <img src={heartEmoji} className="emoji-img" alt="emoji-img" />
                </div>
                <div className="emoji-img-div">
                  <img src={handEmoji} className="emoji-img" alt="emoji-img" />
                </div>
                <div className="emoji-img-div">
                  <img src={okEmoji} className="emoji-img" alt="emoji-img" />
                </div>
                <div className="emoji-img-div">
                  <img
                    src={smileyEmoji}
                    className="emoji-img"
                    alt="emoji-img"
                  />
                </div>
                <div className="emoji-img-div">
                  <img
                    src={laughingEmoji}
                    className="emoji-img"
                    alt="emoji-img"
                  />
                </div>
                <div className="emoji-img-div">
                  <img src={AngryEmoji} className="emoji-img" alt="emoji-img" />
                </div>
              </div> */}
              <input className="write-review-text-area" />
              <button className="write-review-btn">Write Review</button>
            </div>
          </div>
          <div className="customer-reviews-list-parent-div">
            <div className="customer-reviews-list-parent-top-div">
              <p className="review-top-heading heading-28">11 Reviews</p>
              <div className="review-dropdown-div"></div>
            </div>
            <div className="customer-reviews-listing-div">
              <div className="customer-reviews-list-div">
                <div className="customer-img-name-parent-div">
                  <Image
                    className="customer-profile-img"
                    src="/images/profile-pic2.png"
                    alt="profile-img"
                    width={100}
                    height={100}
                  />
                  <div className="customer-reviews-list-right-div">
                    <p className="customer-review-list-title">Sofia Harvetz</p>
                    <div className="rating-box-parent">
                      <RatingBox />
                    </div>
                  </div>
                </div>
                <div className="review-desc-parent-div">
                  <p className="customer-review-list-comment">
                    I bought it 3 weeks ago and now come back just to say
                    “Awesome Product”. I really enjoy it. At vero eos et
                    accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupt et quas
                    molestias excepturi sint non provident.
                  </p>
                  <div className="customer-reaction-div">
                    <p className="like-text ">Like</p>
                    <p className="like-text reply-text">Reply</p>
                  </div>
                </div>
              </div>
              <div className="customer-reviews-list-div">
                <div className="customer-img-name-parent-div">
                  <Image
                    className="customer-profile-img"
                    src="/images/profile-pic3.png"
                    alt="profile-img"
                    width={100}
                    height={100}
                  />
                  <div className="customer-reviews-list-right-div">
                    <p className="customer-review-list-title">Sofia Harvetz</p>
                    <div className="rating-box-parent">
                      <RatingBox />
                    </div>
                  </div>
                </div>
                <div className="review-desc-parent-div">
                  <p className="customer-review-list-comment">
                    I bought it 3 weeks ago and now come back just to say
                    "Awesome Product". I really enjoy it. At vero eos et
                    accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupt et quas
                    molestias excepturi sint non provident.
                  </p>
                  <div className="customer-reaction-div">
                    <p className="like-text ">Like</p>
                    <p className="like-text reply-text">Reply</p>
                  </div>
                </div>
              </div>
              <div className="customer-reviews-list-div">
                <div className="customer-img-name-parent-div">
                  <Image
                    className="customer-profile-img"
                    src="/images/profile-pic4.png"
                    alt="profile-img"
                    width={100}
                    height={100}
                  />
                  <div className="customer-reviews-list-right-div">
                    <p className="customer-review-list-title">Sofia Harvetz</p>
                    <div className="rating-box-parent">
                      <RatingBox />
                    </div>
                  </div>
                </div>
                <div className="review-desc-parent-div">
                  <p className="customer-review-list-comment">
                    I bought it 3 weeks ago and now come back just to say
                    "Awesome Product". I really enjoy it. At vero eos et
                    accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupt et quas
                    molestias excepturi sint non provident.
                  </p>
                  <div className="customer-reaction-div">
                    <p className="like-text ">Like</p>
                    <p className="like-text reply-text">Reply</p>
                  </div>
                </div>
              </div>
              <div className="customer-reviews-list-div">
                <div className="customer-img-name-parent-div">
                  <Image
                    className="customer-profile-img"
                    src="/images/profile-pic5.png"
                    alt="profile-img"
                    width={100}
                    height={100}
                  />
                  <div className="customer-reviews-list-right-div">
                    <p className="customer-review-list-title">Sofia Harvetz</p>
                    <div className="rating-box-parent">
                      <RatingBox />
                    </div>
                  </div>
                </div>
                <div className="review-desc-parent-div">
                  <p className="customer-review-list-comment">
                    I bought it 3 weeks ago and now come back just to say
                    “Awesome Product”. I really enjoy it. At vero eos et
                    accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupt et quas
                    molestias excepturi sint non provident.
                  </p>
                  <div className="customer-reaction-div">
                    <p className="like-text ">Like</p>
                    <p className="like-text reply-text">Reply</p>
                  </div>
                </div>
              </div>

              <button className="load-more-btn">Load More</button>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ProductDetails;
