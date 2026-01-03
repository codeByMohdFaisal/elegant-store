import Image from "next/image";
import "./RatingBox.css";

const RatingBox = () => {
  return (
    <div className="rating-div">
      <div className="rating-img-div">
        <Image
          width={100}
          height={100}
          className="rating-img"
          src="/images/black-star.svg"
          alt="black-star"
        />
      </div>
      <div className="rating-img-div">
        <Image
          width={100}
          height={100}
          className="rating-img"
          src="/images/black-star.svg"
          alt="black-star"
        />
      </div>
      <div className="rating-img-div">
        <Image
          width={100}
          height={100}
          className="rating-img"
          src="/images/black-star.svg"
          alt="black-star"
        />
      </div>
      <div className="rating-img-div">
        <Image
          width={100}
          height={100}
          className="rating-img"
          src="/images/black-star.svg"
          alt="black-star"
        />
      </div>
      <div className="rating-img-div">
        <Image
          width={100}
          height={100}
          className="rating-img"
          src="/images/white-star.svg"
          alt="white-star"
        />
      </div>
    </div>
  );
};

export default RatingBox;
