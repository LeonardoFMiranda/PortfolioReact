import React, { useEffect, useState } from 'react'
import './Portfolio.css'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../../layout/ProjectCard/ProjectCard'
import { MyPortfolio, Project } from '../../interface/portfolio'

const MainContainer = styled.div`

  margin-top: 6.5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
`

const SectionContainers = styled.div`
  height:100vh;
  margin-top: 5rem;
  gap:4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`



function Portfolio() {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [myData, setMyData] = useState<MyPortfolio>()

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://raw.githubusercontent.com/LeonardoFMiranda/Portfolio/main/data/portfolio.json')
        .then((response: any) => response.json())
        .then((data: MyPortfolio) => {
          setMyData(data)
          console.log(data)
        })
    }
    fetchData()
  }, [])

  return (
    <MainContainer>
      <SectionContainers>
        <section className='d-flex flex-column'>
          <div>
            <h1 style={{ marginBottom: "0px" }} className='fnt-color-primary portfolio-title'>{t('portfolio.page-title')}</h1>
            <div className="divider"></div>
          </div>
          <p className='portfolio-subtitle'>{t('portfolio.page-description')}</p>
        </section>
        <section className='projects-container'>
          <div style={{ width: "95%", height: "100%", padding: "10px 10px 10px 18px" }} className="box__neon ">
            <div className="projects-box">
            {myData && Array.isArray(myData.projects) && myData.projects.map((project: Project, index: number) => {
                console.log(project.description);
                return (
                  <ProjectCard
                    key={index}
                    ProjectDescription={project.description}
                    ProjectGithubUrl={project.githubUrl}
                    ProjectImg={project.image}
                    ProjectName={project.name}
                    ProjectTech={project.tech}
                    ProjectUrl={project.url}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </SectionContainers>
    </MainContainer>
  )
}

export default Portfolio