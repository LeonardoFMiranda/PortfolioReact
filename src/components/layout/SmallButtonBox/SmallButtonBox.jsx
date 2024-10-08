import React from "react";
import './SmallButtonBox.css'

function SmallButtonBox({ buttonTitle }) {
  return (
    <div className="smallBoxButton">
      <h2>{buttonTitle}</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="40"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        ></line>
        <polyline
          points="144 56 216 128 144 200"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        ></polyline>
      </svg>
    </div>
  );
}

export default SmallButtonBox;
