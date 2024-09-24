import React from "react";
import "./Home.css";
import Banner from "../layout/Banner/Banner";
import SmallCard from "../layout/SmallCard/SmallCard";
import SmallButtonBox from "../layout/SmallButtonBox/SmallButtonBox";
import lucifer from "../../assets/img/image3.png"
import styled from "styled-components";

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

  max-width: 710px;
  padding: 1rem;
  margin-bottom: 5rem;
  border: 2px solid #0c91ae;
  border-radius: 0.4rem;
  background-color: var(--card-box-color);

  transition: ease 0.5s;
`


function Home() {
  return (
    <MainContainer className="">
      <Banner />
      <SectionContainers>
        <SectionBox>
          <span className="container__title">
            <h3 className="FST__font">My Achievements</h3>
          </span>
          <div className="content__wrap">
            <p className="content__title">
              A summary of all achievements developed to date.
            </p>
            <div className="achivs__container">
              {/* <SmallCard projectNumber={8} projectType={"Projetos Autorais"} />
              <SmallCard projectNumber={8} projectType={"Projetos Autorais"} />
              <SmallCard projectNumber={8} projectType={"Projetos Autorais"} />
              <SmallCard projectNumber={8} projectType={"Projetos Autorais"} />
              <SmallCard projectNumber={8} projectType={"Projetos Autorais"} />
              <SmallButtonBox buttonTitle={"Explore my portfolio"} /> */}
            </div>
          </div>
        </SectionBox>

        <section className="section__box">
          <span className="container__title">
            <h3 className="FST__font">Last Upload</h3>
          </span>
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
