import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="container__navbar">
      <nav className="container__navbarItens">
        <div className="container__itens">
          <span>
            <Link to={"/"}>LM</Link>
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
            class="open-icon"
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
            <line
              x1="40"
              y1="64"
              x2="216"
              y2="64"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
            ></line>
            <line
              x1="40"
              y1="192"
              x2="216"
              y2="192"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
            ></line>
          </svg>
          <div>
            <nav>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                class="close-icon"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="200"
                  y1="56"
                  x2="56"
                  y2="200"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                ></line>
                <line
                  x1="200"
                  y1="200"
                  x2="56"
                  y2="56"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                ></line>
              </svg>
              <ul className="navbar__listContainer">
                <li className="menu__item">
                  <Link to={"/"}>FEED</Link>
                </li>

                <li className="menu__item">
                  <Link to={"/"}>PORTFOLIO</Link>
                </li>

                <li className="menu__item">
                  <div className="container__dropdown">
                    ABOUT ME
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <polyline
                        points="208 96 128 176 48 96"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="8"
                      ></polyline>
                    </svg>
                  </div>
                  <ul className="container__submenu">
                    <li className="submenu-item">
                      <Link to={"/"}>ABOUT ME</Link>
                    </li>
                    <li className="submenu-item">
                      <Link to={"/"}>CERTIFICATES</Link>
                    </li>
                  </ul>
                </li>

                <li className="menu__item">
                  <Link to={"/"}>CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>

          <ul className="navbar__listContainer">
            <li className="menu__item">
              <Link to={"/"}>FEED</Link>
            </li>

            <li className="menu__item">
              <Link to={"/"}>PORTFOLIO</Link>
            </li>

            <li className="menu__item">
              <div className="container__dropdown">
                ABOUT ME
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <polyline
                    points="208 96 128 176 48 96"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></polyline>
                </svg>
              </div>
              <ul className="container__submenu">
                <li className="submenu-item">
                  <Link to={"/"}>ABOUT ME</Link>
                </li>
                <li className="submenu-item">
                  <Link to={"/"}>CERTIFICATES</Link>
                </li>
              </ul>
            </li>

            <li className="menu__item">
              <Link to={"/"}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
