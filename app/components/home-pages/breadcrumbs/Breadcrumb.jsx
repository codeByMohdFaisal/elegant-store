import breadCrumbArrow from "/images/breadcrumb-arrow.svg";
import Image from "next/image";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <ul className="header-breadcrumb">
      <li className="header-breadcrumb-item">
        <p className="header-breadcrumb-label">Home</p>
        <Image
          className="header-breadcrumb-icon"
          src={breadCrumbArrow}
          fill
          priority
          alt="header-breadcrumb arrow"
        />
      </li>
      <li className="header-breadcrumb-item">
        <p className="header-breadcrumb-label">Shop</p>
        <Image
          className="header-breadcrumb-icon"
          src={breadCrumbArrow}
          fill
          priority
          alt="header-breadcrumb arrow"
        />
      </li>
      <li className="header-breadcrumb-item">
        <p className="header-breadcrumb-label">Living Room</p>
        <Image
          className="header-breadcrumb-icon"
          src={breadCrumbArrow}
          fill
          priority
          alt="header-breadcrumb arrow"
        />
      </li>
      <li className="header-breadcrumb-item">
        <p className="header-breadcrumb-label selected-header-breadcrumb-label">
          Product
        </p>
        <Image
          className="header-breadcrumb-icon"
          src={breadCrumbArrow}
          fill
          priority
          alt="header-breadcrumb arrow"
        />
      </li>
    </ul>
  );
};

export default Breadcrumb;
