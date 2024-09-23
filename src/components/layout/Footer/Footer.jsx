import React from "react";
import "./Footer.css";
import styled from "styled-components";

function Footer() {
  return (
    <footer className="footer__container">
      <p className="text-center">Created by <a href="/">Leonardo Miranda</a></p>
      <ul>
        <li>
          <a
            className="link"
            href="https://github.com/LeonardoFMiranda"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M84,240a23.9,23.9,0,0,0,24-24V168"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              ></path>
              <path
                d="M172,240a23.9,23.9,0,0,1-24-24V168"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              ></path>
              <path
                d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              ></path>
              <path
                d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              ></path>
              <path
                d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://www.linkedin.com/in/leonardo-f-miranda/"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <rect
                x="36"
                y="36"
                width="184"
                height="184"
                rx="8"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              ></rect>
              <line
                x1="120"
                y1="112"
                x2="120"
                y2="176"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              ></line>
              <line
                x1="88"
                y1="112"
                x2="88"
                y2="176"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              ></line>
              <path
                d="M120,140a28,28,0,0,1,56,0v36"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              ></path>
              <circle cx="88" cy="80" r="8"></circle>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
