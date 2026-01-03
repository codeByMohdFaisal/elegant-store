import Image from "next/image";

const Footer = () => {
  return (
    <footer className="home-page-footer">
      <div className="home-page-container">
        <div className="hp-footer-menu">
          <div className="hp-footer-menu-left-div">
            <Image
              width={100}
              height={100}
              src={"/images/white-logo.svg"}
              alt="company-logo"
            />
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
            <Image
              width={100}
              height={100}
              src={"/images/instagram.svg"}
              alt="instagram"
            />
            <Image
              width={100}
              height={100}
              src={"/images/facebook.svg"}
              alt="facebook"
            />
            <Image
              width={100}
              height={100}
              src={"/images/youtube.svg"}
              alt="you tube"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
