import React from "react";
import "./RatingBox.css";
import whiteStar from "../../assets/images/white-star.svg";
import blackStar from "../../assets/images/black-star.svg";

const RatingBox = () => {
  return (
    <div className="rating-div">
      <div className="rating-img-div">
        <img className="rating-img" src={blackStar} alt="black-star" />
      </div>
      <div className="rating-img-div">
        <img className="rating-img" src={blackStar} alt="black-star" />
      </div>
      <div className="rating-img-div">
        <img className="rating-img" src={blackStar} alt="black-star" />
      </div>
      <div className="rating-img-div">
        <img className="rating-img" src={blackStar} alt="black-star" />
      </div>
      <div className="rating-img-div">
        <img className="rating-img" src={whiteStar} alt="white-star" />
      </div>
    </div>
  );
};

export default RatingBox;
