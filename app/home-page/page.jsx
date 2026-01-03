"use client";
import Image from "next/image";
import { useRef } from "react";
import "./HomePage.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import HomePageHeader from "../components/home-pages/header/HomePageHeader";
import SecondaryBtn from "../components/buttons/SecondaryBtn";
import AuthenticationBtn from "../components/buttons/AuthenticationBtn";
import NavigationMenu from "../components/home-pages/navigation-menu/NavigationMenu";
import Footer from "../components/home-pages/footer/Footer";
import ContactUs from "../layouts/contact-us/ContactUs";

const HomePage = () => {
  const targetFadedBgRef = useRef(null);

  return (
    <div
      ref={targetFadedBgRef}
      style={{
        position: "relative",
      }}
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
        <div className="home-page-carousel">
          <CCarousel controls indicators>
            <CCarouselItem>
              <CImage
                className="carousel-img d-block w-100"
                src={"/images/carousel-slide-1.png"}
                alt="slide 1"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="carousel-img d-block w-100"
                src={"/images/carousel-slide-2.jpg"}
                alt="slide 2"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="carousel-img d-block w-100"
                src={"/images/carousel-slide-3.jpg"}
                alt="slide 3"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="carousel-img d-block w-100"
                src={"/images/carousel-slide-4.jpg"}
                alt="slide 3"
              />
            </CCarouselItem>
          </CCarousel>
        </div>
        <div className="carousel-content-div">
          <p className="left-carousel-content heading-72">
            Simply Unique<span className="carousel-content-left-span">/</span>{" "}
            Simply Better<span className="carousel-content-left-span">.</span>
          </p>
          <p className="right-carousel-content text-18-regular">
            <span className="carousel-content-right-span">3legant</span> is a
            gift & decorations store based in HCMC, Vietnam. Est since 2019.{" "}
          </p>
        </div>
      </div>
      <div className="home-page-container">
        <section className="home-page-products-section">
          <div className="left-product-div common-centered-img-properties">
            <p className="product-heading heading-34">Living Room</p>
            <SecondaryBtn btnText={"Shop Now"} arrowColor={"#121212"} />
          </div>
          <div className="right-product-div">
            <div className="right-product-sub-div1 common-centered-img-properties">
              {" "}
              <p className="product-heading heading-34">Bedroom</p>
              <SecondaryBtn btnText={"Shop Now"} arrowColor={"#121212"} />
            </div>
            <div className="right-product-sub-div2 common-centered-img-properties">
              {" "}
              <p className="product-heading heading-34">Kitchen</p>
              <SecondaryBtn btnText={"Shop Now"} arrowColor={"#121212"} />
            </div>
          </div>
        </section>
      </div>
      <div className="home-page-container">
        <section className="new-arival-section">
          <div className="new-arival-title-section">
            <p className="new-arival-title heading-40">New Arrivals</p>
            <div className="web-secondary-btn">
              <SecondaryBtn btnText={"More products"} arrowColor={"#121212"} />
            </div>
          </div>
          <div className="new-arival-product-list-div">
            <div className="new-arival-product-card-parent">
              <div
                className="new-arival-product-card common-centered-img-properties"
                style={{
                  backgroundImage: `url(${"/images/new-arrival-sofa.png"})`,
                }}
              >
                <div className="card-header">
                  <Image
                    src={"/images/newtag.png"}
                    alt="50% off"
                    width={100}
                    height={100}
                  />
                  <Image
                    src={"/images/wishlist.png"}
                    width={100}
                    height={100}
                    alt="wishlist-icon"
                  />
                </div>
                <div className="card-btn-div">
                  <AuthenticationBtn text={"Add to cart"} />
                </div>
              </div>
              <div className="product-description-div">
                <Image
                  src={"/images/ratings.png"}
                  width={100}
                  height={100}
                  alt="ratings"
                  className="ratings-img"
                />
                <p className="product-name text-16-semi-bold">Loveseat Sofa</p>
                <div className="product-pricing-div">
                  <p className="actual-product-pricing text-16-semi-bold">
                    $199.00
                  </p>
                  <p className="old-product-pricing text-16-regular">$400.00</p>
                </div>
              </div>
            </div>
            <div className="new-arival-product-card-parent">
              <div
                className="new-arival-product-card common-centered-img-properties"
                style={{
                  backgroundImage: `url(${"/images/table-lamp.png"})`,
                }}
              >
                <div className="card-header">
                  <Image
                    src={"/images/newtag.png"}
                    width={100}
                    height={100}
                    alt="new tag"
                  />
                </div>
              </div>
              <div className="product-description-div">
                <Image
                  src={"/images/ratings.png"}
                  width={100}
                  height={100}
                  alt="ratings"
                  className="ratings-img"
                />
                <p className="product-name text-16-semi-bold">Table Lamp</p>
                <div className="product-pricing-div">
                  <p className="actual-product-pricing text-16-semi-bold">
                    $24.99
                  </p>
                </div>
              </div>
            </div>
            <div className="new-arival-product-card-parent">
              <div
                className="new-arival-product-card common-centered-img-properties"
                style={{
                  backgroundImage: `url(${"/images/beige-table-lamp.png"})`,
                }}
              >
                <div className="card-header">
                  <Image
                    src={"/images/newtag.png"}
                    width={100}
                    height={100}
                    alt="new tag"
                  />
                </div>
              </div>
              <div className="product-description-div">
                <Image
                  src={"/images/ratings.png"}
                  width={100}
                  height={100}
                  alt="ratings"
                  className="ratings-img"
                />
                <p className="product-name text-16-semi-bold">
                  Beige Table Lamp
                </p>
                <div className="product-pricing-div">
                  <p className="actual-product-pricing text-16-semi-bold">
                    $24.99
                  </p>
                </div>
              </div>
            </div>
            <div className="new-arival-product-card-parent">
              <div
                className="new-arival-product-card common-centered-img-properties"
                style={{
                  backgroundImage: `url(${"/images/bamboo-basket.png"})`,
                }}
              >
                <div className="card-header">
                  <Image
                    src={"/images/newtag.png"}
                    width={100}
                    height={100}
                    alt="new tag"
                  />
                </div>
              </div>
              <div className="product-description-div">
                <Image
                  src={"/images/ratings.png"}
                  width={100}
                  height={100}
                  alt="ratings"
                  className="ratings-img"
                />
                <p className="product-name text-16-semi-bold">Bamboo basket</p>
                <div className="product-pricing-div">
                  <p className="actual-product-pricing text-16-semi-bold">
                    $24.99
                  </p>
                </div>
              </div>
            </div>
            <div className="new-arival-product-card-parent">
              <div
                className="new-arival-product-card common-centered-img-properties"
                style={{
                  backgroundImage: `url(${"/images/table-lamp.png"})`,
                }}
              >
                <div className="card-header">
                  <Image
                    src={"/images/newtag.png"}
                    width={100}
                    height={100}
                    alt="new tag"
                  />
                </div>
              </div>
              <div className="product-description-div">
                <Image
                  src={"/images/ratings.png"}
                  width={100}
                  height={100}
                  alt="ratings"
                  className="ratings-img"
                />
                <p className="product-name text-16-semi-bold">Table Lamp</p>
                <div className="product-pricing-div">
                  <p className="actual-product-pricing text-16-semi-bold">
                    $24.99
                  </p>
                </div>
              </div>
            </div>
            <div className="new-arival-product-card-parent">
              <div
                className="new-arival-product-card common-centered-img-properties"
                style={{
                  backgroundImage: `url(${"/images/bamboo-basket.png"})`,
                }}
              >
                <div className="card-header">
                  <Image
                    src={"/images/newtag.png"}
                    width={100}
                    height={100}
                    alt="new tag"
                  />
                </div>
              </div>
              <div className="product-description-div">
                <Image
                  src={"/images/ratings.png"}
                  width={100}
                  height={100}
                  alt="ratings"
                  className="ratings-img"
                />
                <p className="product-name text-16-semi-bold">Bamboo basket</p>
                <div className="product-pricing-div">
                  <p className="actual-product-pricing text-16-semi-bold">
                    $24.99
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mob-secondary-btn">
            <SecondaryBtn btnText={"More products"} arrowColor={"#121212"} />
          </div>
        </section>
      </div>

      <section className="features-section">
        <div className="home-page-container parent-features-div">
          <div className="feature-card">
            <div className="feature-card-inside-div">
              <Image
                className="feature-card-img"
                src={"/images/fast-delivery.svg"}
                width={100}
                height={100}
                alt="feature-icon"
              />
              <p className="feature-card-title heading-20">Free Shipping</p>
              <p className="feature-card-description text-14-regular">
                orders over $100
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inside-div">
              <Image
                className="feature-card-img"
                src={"/images/money.svg"}
                width={100}
                height={100}
                alt="feature-icon"
              />
              <p className="feature-card-title heading-20">Money-back</p>
              <p className="feature-card-description text-14-regular">
                30 days guarantee
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inside-div">
              <Image
                className="feature-card-img"
                src={"/images/lock 01.svg"}
                width={100}
                height={100}
                alt="feature-icon"
              />
              <p className="feature-card-title heading-20">Secure Payments</p>
              <p className="feature-card-description text-14-regular">
                Secured by Stripe
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inside-div">
              <Image
                className="feature-card-img"
                src={"/images/call.svg"}
                width={100}
                height={100}
                alt="feature-icon"
              />
              <p className="feature-card-title heading-20">24/7 Support</p>
              <p className="feature-card-description text-14-regular">
                Phone and Email support
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="banner-ad-section">
        <div className="banner-img-div">
          <Image
            src={"/images/banner-sofa.png"}
            width={100}
            height={100}
            alt="banner-ad"
          />
        </div>
        <div className="banner-desc-div">
          <p className="banner-sale heading-20">SALE UP TO 35% OFF</p>
          <p className="banner-title heading-40">
            HUNDREDS of New lower prices!
          </p>
          <p className="banner-description text-18-regular">
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <SecondaryBtn btnText="Shop Now" arrowColor="#141718" />
        </div>
      </section>
      <section className="article-section">
        <div className="home-page-container">
          <div className="new-arival-title-section">
            <p className="new-arival-title heading-40">Articles</p>
            <SecondaryBtn btnText={"More products"} arrowColor={"#121212"} />
          </div>
          <div className="article-cards-parent">
            <div className="article-card">
              <Image
                className="article-card-img"
                src={"/images/article-1.png"}
                width={100}
                height={100}
                alt="article-card"
              />
              <p className="article-card-title heading-16">
                7 ways to decor your home
              </p>
              <SecondaryBtn btnText="Read more" arrowColor="#141718" />
            </div>
            <div className="article-card">
              <Image
                className="article-card-img"
                src={"/images/article-2.png"}
                width={100}
                height={100}
                alt="article-card"
              />
              <p className="article-card-title heading-16">
                Kitchen organization
              </p>
              <SecondaryBtn btnText="Read more" arrowColor="#141718" />
            </div>
            <div className="article-card">
              <Image
                className="article-card-img"
                src={"/images/article-3.png"}
                width={100}
                height={100}
                alt="article-card"
              />
              <p className="article-card-title heading-16">
                Decor your bedroom
              </p>
              <SecondaryBtn btnText="Read more" arrowColor="#141718" />
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
