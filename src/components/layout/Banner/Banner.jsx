import React, { useEffect, useRef, useState } from "react";
import "./Banner.css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Banner() {

  const { translation, i18n: { changeLanguage, language } } = useTranslation();
  const bannerIntroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (window.matchMedia("(min-width: 1366px)").matches) {
              entry.target.classList.add('slideInFromLeft');
              entry.target.classList.remove('fadeIn');
            } else {
              entry.target.classList.add('fadeIn');
              entry.target.classList.remove('slideInFromLeft');
            }
          } else {
            entry.target.classList.remove('slideInFromLeft');
            entry.target.classList.remove('fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (bannerIntroRef.current) {
      observer.observe(bannerIntroRef.current);
    }

    return () => {
      if (bannerIntroRef.current) {
        observer.unobserve(bannerIntroRef.current);
      }
    };
  }, []);

  return (
    <div className="container__banner" ref={bannerIntroRef}>
      <div >
        <div className="banner__intro">
          <p className="title_banner montserrat">{t('banner.row1')}</p>
          <h1 className="title_banner montserrat">{t('banner.row2')}</h1>
          <h2 className="title_banner montserrat">{t('banner.row3')}</h2>
        </div>
        <div className="socials__links">
          <a
            className="link"
            href="https://github.com/LeonardoFMiranda"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            className="link"
            href="https://www.linkedin.com/in/leonardo-f-miranda/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      <div className="banner__text-container">
        <div className="banner__text">
          <p className="text">
            <span className="bracket__icon">❴ </span>
            {t('banner.title')}
            <span className="bracket__icon"> ❵</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
