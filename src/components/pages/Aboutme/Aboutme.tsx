import React, { useEffect, useState } from 'react'
import './Aboutme.css'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
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



function Aboutme() {
    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <MainContainer>
            <SectionContainers>
                <section className='d-flex flex-column'>
                    <div>
                        <h1 style={{ marginBottom: "0px" }} className='fnt-color-primary aboutme-title'>{t('aboutme.page-title')}</h1>
                        <div className="divider"></div>
                    </div>
                    <p className='aboutme-subtitle'>{t('aboutme.page-description')}</p>
                </section>
                <section className='aboutme-container'>
                    <div style={{ width: "95%", height: "100%", padding: "10px 10px 10px 18px" }} className="box__neon flex-column">
                        <div className="aboutme-box flex-column align-items-center  flex-md-row">
                            <div className="aboutme-img">
                                <img src="https://avatars.githubusercontent.com/u/107367947?v=4" alt="" />
                            </div>
                            <div className="aboutme-content text-start fnt-color-primary">
                                <h3>{t('aboutme.row1-description')}</h3>
                                <p>
                                    {t('aboutme.row2-description')}
                                </p>

                            </div>
                        </div>
                        <div className='aboutme-box text-start'>
                            <p className='fnt-color-primary'>
                                {t('aboutme.row3-description')}
                            </p>
                        </div>
                    </div>
                </section>
            </SectionContainers>
        </MainContainer>
    )
}




export default Aboutme