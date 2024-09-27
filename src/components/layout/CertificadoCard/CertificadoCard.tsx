import React, { useEffect } from 'react'
import './CertificadoCard.css'
import ImageTeste from '../../../assets/img/Clinkz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faGraduationCap, faClock } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import ProjectSmallCard from '../ProjectSmallCard/ProjectSmallCard';

interface CertificadoCardProps {
    CertificadoName: string;
    CertificadoEducation: string;
    CertificadoUrl: string;
    CertificadoHour: string;
}

function CertificadoCard({ CertificadoName, CertificadoEducation, CertificadoUrl, CertificadoHour }: CertificadoCardProps) {
    const { t, i18n: { changeLanguage, language } } = useTranslation();

    return (

        <div className='certificado-card'>
            <div className='d-flex justify-content-between'>
                <h3 className='fnt-color-primary fw-bold text-start'>{CertificadoName}</h3>
                <a href={CertificadoUrl} target="_blank" rel="noopener noreferrer" className="certificado-link">
                    <FontAwesomeIcon style={{ color: "var(--fnt-color-primary)" }} icon={faLink} />
                </a>
            </div>
            <div className='d-flex justify-content-start gap-2 flex-wrap'>
                <div className='d-flex gap-3'>
                    <FontAwesomeIcon style={{ color: "var(--fnt-color-primary)" }} icon={faGraduationCap} /> <span style={{ color: "var(--fnt-color-primary)" }}>{CertificadoEducation}</span>
                    <FontAwesomeIcon style={{ color: "var(--fnt-color-primary)" }} icon={faClock} /> <span style={{ color: "var(--fnt-color-primary)" }}>{CertificadoHour}</span>
                </div>
            </div>
        </div>
    )
}

export default CertificadoCard