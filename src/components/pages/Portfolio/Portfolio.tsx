import React, { useEffect, useState } from 'react'
import './Portfolio.css'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../../layout/ProjectCard/ProjectCard'
import { MyPortfolio, Project } from '../../interface/portfolio'
import { useLocation } from 'react-router-dom';

const MainContainer = styled.div`
  margin-top: 6.5rem;
  margin-bottom: 11rem;
  color: #fff;
  display: flex;
  flex-direction: column;
`

const SectionContainers = styled.div`
  margin-top: 5rem;
  gap:4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`



function Portfolio() {
  const { t, i18n } = useTranslation();
  const [myData, setMyData] = useState<MyPortfolio>()
  const { pathname } = useLocation();
  const [loadingPage, setLoadingPage] = useState<boolean | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/LeonardoFMiranda/Portfolio/main/data/portfolio.json');
      const data: MyPortfolio = await response.json();
      setMyData(data);
      if (data) {
        setLoadingPage(true);
      }

      // Adiciona as traduções dinamicamente
      i18n.addResourceBundle('en', 'translation', {
        portfolio: {
          projects: data.projects.map(project => ({
            name: project.name,
            description: translateToEnglish(project.description),
            url: project.url,
            githubUrl: project.githubUrl,
            image: project.image,
            tech: project.tech
          }))
        }
      }, true, true);

      i18n.addResourceBundle('pt', 'translation', {
        portfolio: {
          projects: data.projects.map(project => ({
            name: project.name,
            description: project.description,
            url: project.url,
            githubUrl: project.githubUrl,
            image: project.image,
            tech: project.tech
          }))
        }
      }, true, true);
    };

    fetchData();
  }, [i18n]);

  if (loadingPage === null) {
    return (
      <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p className="loader"></p>
      </div>
    )
  }


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
          <div style={{ width: "95%", height: "100%", padding: "10px 10px 10px 10px" }} className="box__neon ">
            <div className="projects-box">
              {myData && Array.isArray(myData.projects) && myData.projects.map((project: Project, index: number) => {
                console.log(project.description);
                return (
                  <ProjectCard
                    key={index}
                    ProjectDescription={t(`portfolio.projects.${index}.description`)}
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

function translateToEnglish(text: string): string {
  const descriptionTranslation: { [key: string]: string } = {
    "Réplica do HBO. Desafio da formação de Css da DIO": "HBO Replica. CSS challenge from DIO course",
    "Loja de café virtual. Projeto de aprendizado da formação Css da DIO": "Virtual coffee shop. Learning project from DIO CSS course",
    "Réplica do HBO. Projeto de aprendizado da formação Javascript da DIO": "HBO Replica. Learning project from DIO Javascript course"
  };
  return descriptionTranslation[text] || text;
}


export default Portfolio