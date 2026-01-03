import React from "react";
import contactUsImg from "../../assets/images/banner-img-2.png";
import email from "../../assets/images/email.svg";

const ContactUs = () => {
  return (
    <section className="contact-us-section">
      <div
        className="contact-us-container common-centered-img-properties"
        style={{
          backgroundImage: `url(${contactUsImg})`,
        }}
      >
        <div className="contact-us-desc">
          <p className="ad-title heading-40">Join Our Newsletter</p>
          <p className="ad-desc text-18-regular">
            Sign up for deals, new products and promotions
          </p>
          <div className="cu-email-input-div">
            <input className="cu-email-input" type="text" />
            <div className="cu-sign-up-div">
              <div className="email-img-div">
                <img src={email} alt="email" />

                <p className="input-text text-16-regular">Email address</p>
              </div>
              <p className="input-text cu-sign-up-text text-16-regular">
                Signup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
