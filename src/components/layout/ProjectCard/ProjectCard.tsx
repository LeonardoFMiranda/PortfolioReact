import React, { useEffect } from 'react'
import './ProjectCard.css'
import ImageTeste from '../../../assets/img/Clinkz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import ProjectSmallCard from '../ProjectSmallCard/ProjectSmallCard';

interface ProjectsCardProps {
    ProjectName: string;
    ProjectDescription: string;
    ProjectImg: string;
    ProjectUrl: string;
    ProjectGithubUrl: string;
    ProjectTech: string[];
}

function ProjectCard({ ProjectName, ProjectDescription, ProjectImg, ProjectUrl, ProjectTech, ProjectGithubUrl }: ProjectsCardProps) {
    const { t, i18n: { changeLanguage, language } } = useTranslation();

    useEffect(() => {
        console.log(ProjectName, ProjectDescription, ProjectImg, ProjectUrl, ProjectTech, ProjectGithubUrl, 'Aqui esta o projeto')
    }, [ProjectName, ProjectDescription, ProjectImg, ProjectUrl, ProjectTech, ProjectGithubUrl])
    return (
        <div className='project-card'>
            <div className="image-container">
                <img style={{ objectFit: "cover" }} src={ProjectImg} alt="Project Thumbnail" />
                <div className="overlay">
                    <h3 className='fnt-color-white fw-bold '>{ProjectName}</h3>
                    <span>{ProjectDescription}</span>
                    <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer" className="overlay-button">
                        <FontAwesomeIcon icon={faArrowCircleUp} size="2x" /> {t('portfolio.overlay-text')}
                    </a>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <h3 className='fnt-color-primary fw-bold text-start'>{ProjectName}</h3>
                <div className='d-flex gap-3'>
                    <a href={ProjectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faLink} />
                    </a>
                    <a href={ProjectGithubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
            <div className='d-flex justify-content-start gap-2 flex-wrap'>

                {ProjectTech.map((tech, index) => (
                    <ProjectSmallCard tech={tech} />
                ))}
            </div>
        </div>
    )
}

export default ProjectCard