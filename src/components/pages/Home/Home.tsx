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
import { Link, useLocation } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

const MainContainer = styled.div`
  margin-top: 6.5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
`

const SectionContainers = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
`;

const ButtonContact = styled.button`
  color:var(--fnt-color-primary);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.4rem;
  background-color: var(--sm-box-bg);
  outline: 3px solid transparent;
  transition: background 1s, outline 1s, transform 1s;
  background-size: 250%;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const HomeModal = styled(Modal)`
  .modal-content {
    background-color: var(--card-box-color) !important;
    color: var(--fnt-color-primary);
  }
  .modal-footer button {
    background-color: var(--sm-box-bg);
    color: var(--fnt-color-primary);
  }
`;

function Home() {
  const sectionIntroRefs = useRef<(Element | null)[]>([]);
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [myData, setMyData] = useState<MyData>()
  const [visibleSections, setVisibleSections] = useState<Element[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://raw.githubusercontent.com/LeonardoFMiranda/Portfolio/main/data/profile.json')
        .then((response: any) => response.json())
        .then((data: any) => setMyData(data))
    }
    fetchData()
  }, [])

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeoCh1-Iw22p7DMu-od66zBclt6l4Wk-GMWGWy1C6QtEnKNXg/formResponse';
    const formData = new FormData();
    formData.append('entry.1187180635', name); // Substitua pelo ID do campo "Name"
    formData.append('entry.1082201105', email); // Substitua pelo ID do campo "Email"
    formData.append('entry.986492936', message); // Substitua pelo ID do campo "Message"

    fetch(formUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    }).then(() => {
      setShow(true)
      setName('');
      setEmail('');
      setMessage('');
    }).catch((error) => {
      alert('Error sending message.');
      console.error('Error:', error);
    });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

            <section className="section__box flex-column flex-md-row">
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
                  <Link to={'/Portfólio'} style={{ textDecoration: "none" }} className="portfolio-btn fw-boldw">{t('home.portfolio-button')}</Link>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section id="contact" className={`neon__container ${visibleSections.includes(sectionIntroRefs.current[2] as Element) ? 'visible' : ''}`} ref={(el) => (sectionIntroRefs.current[2] = el)}>
          <span className="container__title">
            <h3 className="FST__font">{t('home.contact')}</h3>
          </span>
          <div className="box__neon portfolio__box">

            <SectionItem>
              <h2 className="mt-3 fnt-color-primary">{t('home.contact-title')}</h2>
              <ContactForm onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder={t('home.contact-placehouder-name')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder={t('home.contact-placehouder-email')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextArea
                  placeholder={t('home.contact-placehouder-message')}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <ButtonContact type="submit">{t('home.contact-button')}</ButtonContact>
                
              </ContactForm>
            </SectionItem>
          </div>
        </section>
      </SectionContainers>

      <HomeModal show={show} onHide={handleClose}>
        <HomeModal.Header closeButton>
          <HomeModal.Title>{t('home.ModalTitle')}</HomeModal.Title>
        </HomeModal.Header>
        <HomeModal.Body>{t('home.ModalBody')}</HomeModal.Body>
        <HomeModal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          {t('home.ModalButton')}
          </Button>
        </HomeModal.Footer>
      </HomeModal>
    </MainContainer>
  );
}

export default Home;
