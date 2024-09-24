import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Banner from "../layout/Banner/Banner";
import SmallCard from "../layout/SmallCard/SmallCard";
import SmallButtonBox from "../layout/SmallButtonBox/SmallButtonBox";
import lucifer from "../../assets/img/image3.png"
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MyData } from "../interface/profile";

const MainContainer = styled.div`
  margin-top: 6.5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  
`

const SectionContainers = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`

const SectionBox = styled.section`
  position: relative;
  z-index: 1;
  width: 98%;
  height:98%;
  padding: 1rem;
  border: 2px solid #0c91ae;
  border-radius: 0.4rem;
  background-color: var(--card-box-color);
  transition: ease 0.5s;
`


function Home() {
  const sectionIntroRef = useRef(null);
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [myData, setMyData] = useState<MyData>()

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://raw.githubusercontent.com/LeonardoFMiranda/Portfolio/main/data/profile.json')
        .then((response) => response.json())
        .then((data) => setMyData(data))
    }
    fetchData()
  }, [])


  return (
    <MainContainer className="">
      <Banner />
      <SectionContainers>
        <div className="container__teste">
          <span className="container__title">
            <h3 className="FST__font">My Achievements</h3>
          </span>
          <div className="box__neon">
            <SectionBox>
              <div className="content__wrap">
                <p className="content__title">
                  A summary of all achievements developed to date.
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
            </SectionBox>
          </div>
        </div>

        <div className="container__teste">
          <span className="container__title">
            <h3 className="FST__font">Last Upload</h3>
          </span>
          <div className="box__neon">
            <section className="section__box">
              <div className="content__wrap">
                <p className="content__title">Latest project I developed:</p>
                <div className="project__container">
                  <div className="projectImg__container">
                    <img src={lucifer} alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="section__box">
          <div className="content__wrap">
            <p className="content__title">Latest project I developed:</p>
            <div className="project__container">
              <div className="projectImg__container">
                <img src={lucifer} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="third__section"></section>
      </SectionContainers>
    </MainContainer>
  );
}

export default Home;
