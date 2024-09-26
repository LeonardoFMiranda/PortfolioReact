import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Banner from "../../layout/Banner/Banner";
import SmallCard from "../../layout/SmallCard/SmallCard";
import SmallButtonBox from "../../layout/SmallButtonBox/SmallButtonBox";
import lucifer from "../../assets/img/image3.png"
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MyData } from "../../interface/profile";
import ProgrammerIcon from "../../../assets/icons/Programming-icon.svg"
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  margin-top: 6.5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
`

const SectionContainers = styled.div`
  margin-top: 5rem;
  gap:20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`

const SectionItem = styled.section`
  position: relative;
  z-index: 1;
  width: 97%;
  height:97%;
  padding: 1rem;
  border: 2px solid #0c91ae;
  border-radius: 0.4rem;
  background-color: var(--card-box-color);
  transition: ease 0.5s;
`

const NeonContainer = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;


function Home() {
  const sectionIntroRefs = useRef<(Element | null)[]>([]);
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [myData, setMyData] = useState<MyData>()
  const [visibleSections, setVisibleSections] = useState<Element[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://raw.githubusercontent.com/LeonardoFMiranda/Portfolio/main/data/profile.json')
        .then((response :any) => response.json())
        .then((data: any) => setMyData(data))
    }
    fetchData()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target as Element]);
          } else {
            setVisibleSections((prev) => prev.filter((el) => el !== entry.target));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionIntroRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionIntroRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <MainContainer className="">
      <Banner />
      <SectionContainers>
        <section className={`neon__container ${visibleSections.includes(sectionIntroRefs.current[0] as Element) ? 'visible' : ''}`} ref={(el) => (sectionIntroRefs.current[0] = el)} >
          <span className="container__title">
            <h3 className="FST__font">Hard Skills</h3>
          </span>
          <div className="box__neon hard-skill__box" >
            <SectionItem>
              <div className="content__wrap">
                <p className="content__title">
                  {t('home.hardskills-description')}
                </p>
                <div className="achivs__container">
                  {myData && myData.skills.hardSkills.map((hardSkill) => (
                    <>
                      <SmallCard
                        key={hardSkill.name}
                        hardSkillLogo={hardSkill.logo}
                        hardSkillNome={hardSkill.name}
                      />
                    </>
                  ))}
                </div>
              </div>
            </SectionItem>
          </div>
        </section>

        <section className={`neon__container ${visibleSections.includes(sectionIntroRefs.current[1] as Element) ? 'visible' : ''}`} ref={(el) => (sectionIntroRefs.current[1] = el)}>
          <span className="container__title">
            <h3 className="FST__font">{t('home.portfolio-title')}</h3>
          </span>
          <div className="box__neon portfolio__box">

            <section className="section__box">
              <div className="content__wrap">
                <div className="project__container">
                  <div className="projectImg__container">
                    <img src={ProgrammerIcon} alt="" />
                  </div>
                </div>
              </div>
              <div className="content__wrap" style={{ height: "80%" }}>
                <p className="content__title text-center">{t('home.portfolio-description')}</p>
                <div className="text-center mt-4">
                  <Link to={'/Portfólio'} style={{textDecoration:"none"}} className="portfolio-btn fw-boldw">{t('home.portfolio-button')}</Link>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="third__section"></section>
      </SectionContainers>
    </MainContainer>
  );
}

export default Home;
