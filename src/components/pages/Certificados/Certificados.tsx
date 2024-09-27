import React, { useEffect, useState } from 'react'
import './Certificados.css'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../../layout/ProjectCard/ProjectCard'
import CertificadoCard from '../../layout/CertificadoCard/CertificadoCard'
import { Certificado, MyCertificados } from '../../interface/certificados'
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



function Certificados() {
    const { t, i18n } = useTranslation();
    const [certificadoData, setCertificadoData] = useState<any>()
    const { pathname } = useLocation();
    const [loadingPage, setLoadingPage] = useState<boolean | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://raw.githubusercontent.com/LeonardoFMiranda/Portfolio/main/data/certificates.json');
            const data: MyCertificados = await response.json();
            setCertificadoData(data)
            if (data) {
                setLoadingPage(true);
            }

            // Adiciona as traduções dinamicamente
            i18n.addResourceBundle('en', 'translation', {
                certificados: {
                    certificado: data.certificados.map(certificado => ({
                        name: translateToEnglish(certificado.name),
                        url: certificado.url,
                        education: certificado.education,
                        hour: certificado.hour
                    }))
                }
            }, true, true);

            i18n.addResourceBundle('pt', 'translation', {
                certificados: {
                    certificado: data.certificados.map(certificado => ({
                        name: certificado.name,
                        url: certificado.url,
                        education: certificado.education,
                        hour: certificado.hour
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
                        <h1 style={{ marginBottom: "0px" }} className='fnt-color-primary certificado-title'>{t('certificado.page-title')}</h1>
                        <div className="divider"></div>
                    </div>
                    <p className='certificado-subtitle'>{t('certificado.page-description')}</p>
                </section>
                <section className='certificados-container'>
                    <div style={{ width: "95%", height: "100%", padding: "10px 10px 10px 18px" }} className="box__neon ">
                        <div className="certificados-box">
                            {certificadoData && Array.isArray(certificadoData.certificados) && certificadoData.certificados.map((certificado: any, index: number) => {
                                return (
                                    <>
                                        <CertificadoCard
                                            CertificadoEducation={certificado.education}
                                            CertificadoHour={certificado.hour}
                                            CertificadoName={t(`certificados.certificado.${index}.name`)}
                                            CertificadoUrl={certificado.url} />
                                    </>
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
        "Formação: WordPress: crie sites do zero": "WordPress: build sites from scratch",
        "Curso: Laravel: criando uma aplicação com MVC": "Laravel: Creating an Application with MVC",
        "Formação TypeScript Fullstack Developer": "TypeScript Fullstack Developer Training",
        "Formação JavaScript Developer": "JavaScript Developer Training",
        "Formação HTML Web Developer": "Formação HTML Web Developer Training",
        "Formação CSS Web Developer": "Formação CSS Web Developer Training"
    };
    return descriptionTranslation[text] || text;
}

export default Certificados