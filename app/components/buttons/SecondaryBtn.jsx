import React from "react";

const SecondaryBtn = ({ btnText, arrowColor }) => {
  return (
    <div
      className="secondary-btn"
      type="button"
      style={{
        borderBottom: `1px solid ${arrowColor}`,
      }}
    >
      <p className="secondary-btn-text" style={{ color: arrowColor }}>
        {btnText}
      </p>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 9H14.25"
          stroke={arrowColor}
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.75 13.5L14.25 9"
          stroke={arrowColor}
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.75 4.5L14.25 9"
          stroke={arrowColor}
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default SecondaryBtn;
