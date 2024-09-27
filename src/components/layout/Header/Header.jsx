import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import styled from "styled-components";
import EUAFlag from "../../../assets/icons/estados-unidos.png"
import BRFlag from "../../../assets/icons/brasil.png"

//ReactBootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const HeaderWrapper = styled.header`
  position: absolute;
  width: 100%;
  background-color: transparent;
  transition: background-color 0.3s ease, position 0.3s ease;
  top: 0;
  padding: 20px;
  z-index: 1000;

}
`;

const NavbarWrapper = styled.nav`
  margin: auto;
  padding: 1rem 2.4rem;
  @media screen and (min-width: 1024px) {
    width: 75rem;
    margin: auto;
    padding: 1rem 2.4rem;
  }
`

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
`


const HeaderUl = styled.ul`
  position:relative;
  display: none;
  margin-bottom: 0;
  @media screen and (min-width: 1024px) {
    display: flex;
    list-style-type: none;
    gap: 20px;
    align-items: center;
  }
`;

const HeaderLi = styled.li`
  padding: 0.5rem;
    border-radius: 0.5rem;
    transition: 0.4s all ease 0s;
    border: 1px solid transparent;

`

const LogoStyle = styled(Link)`
  font-size: 3rem;
  color: #3e82b8;
  font-family: "Orbitron", sans-serif;
  font-weight: 800;
  letter-spacing: -0.4rem;
  text-decoration: none;
  transition: all 0.4s ease 0s;
`
const NavbarItem = styled(Link)`
    padding: 0.5rem;
    border-radius: 0.5rem;
    text-transform:uppercase;
    transition: 0.4s all ease 0s;
    border: 1px solid transparent;
    &:hover{
    background-color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    
    }
  @media screen and (min-width: 1024px) {
    color: var(--fnt-color-primary);
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 3px;
    cursor: pointer;
    padding: 0.5rem;
  }
`
const NavbarSubMenuLi = styled.li`
    
    transition: 0.4s all ease 0s;
    width: 100%;
    text-align: start;
    padding:8px 0 ;
    &:hover{
      background-color: var(--secondary-color);
    }
`

const NavbarSubMenuItem = styled(Link)`
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: 0.4s all ease 0s;
    border: 1px solid transparent;

  @media screen and (min-width: 1024px) {
    color:var(--fnt-color-primary);
    text-decoration:none;
    font-weight: 300;
    padding: 8px 20px;
    width: 100%;
  }
`

const NavbarSubMenuList = styled.ul`
    display: none;
    position: relative;
    list-style-type: none;
`


const NavbarItemDropdown = styled.div`
  color:var(--fnt-color-primary) !important;
  text-transform:uppercase;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 0.4s all ease 0s;
  border: 1px solid transparent;
  &:hover{
    background-color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    ${NavbarSubMenuList} {
      display: block;
      list-style-type: none;
      position: absolute;
      top: 51px;
      list-style-type: none !important;
      padding: 0 !important;
      background-color: var(--card-box-color);
      }
  }
  @media screen and (min-width: 1024px) {
    color: var(--fnt-color-primary);
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 3px;
    cursor: pointer;
    padding: 0.5rem;
  }
`

const NavbarItemButton = styled.button`
  color: var(--fnt-color-primary);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 3px;
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  background:transparent;
  :focus-visible{
    border:none;
  }
`



const Header = ({ darkMode, onDarkModeToggle }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const { translation, i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)



  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.clientHeight;
        if (window.scrollY > headerHeight) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <header className={isFixed ? 'fixed' : 'container__header'}>
        <NavbarWrapper>
          <ItemsWrapper className="item-wrapper">
            <span>
              <LogoStyle to={"/"}>LM</LogoStyle>
            </span>
            <HeaderUl>
              <HeaderLi>
                <NavbarItem to={"/"}>FEED</NavbarItem>
              </HeaderLi>

              <HeaderLi>
                <NavbarItem to={"/portfólio"}>PORTFOLIO</NavbarItem>
              </HeaderLi>

              <HeaderLi>
                <NavbarItemDropdown>
                  {t('header.About')}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <polyline
                      points="208 96 128 176 48 96"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="8"
                    ></polyline>
                  </svg>
                  <NavbarSubMenuList>
                    <NavbarSubMenuLi>
                      <NavbarSubMenuItem to={"/"}>ABOUT ME</NavbarSubMenuItem>
                    </NavbarSubMenuLi>
                    <NavbarSubMenuLi>
                      <NavbarSubMenuItem to={"/certificados"}>CERTIFICATES</NavbarSubMenuItem>
                    </NavbarSubMenuLi>
                  </NavbarSubMenuList>
                </NavbarItemDropdown>

              </HeaderLi>

              <HeaderLi>
                <NavbarItem to={"/#contact"}>{t('header.Contact')}</NavbarItem>
              </HeaderLi>

              <HeaderLi>
                <img style={{ width: "32px" }} src={currentLanguage === 'pt' ? BRFlag : EUAFlag} alt="Language flag" />
                <NavbarItemButton onClick={handleChangeLanguage}>{t('header.Language')}</NavbarItemButton>
              </HeaderLi>

              <HeaderLi>
                <div className="center">
                  <label class="switch">
                    <input id="darkModeToggle" type="checkbox" checked={darkMode} onChange={onDarkModeToggle} />
                    <div class="slider" >

                      <div class="sun">
                        <div class="sun-glow"></div>
                      </div>

                      <div class="moon">
                        <div class="moon-glow"></div>
                        <div class="impact-sm"></div>
                        <div class="impact-md"></div>
                        <div class="impact-lg"></div>
                      </div>

                    </div>
                  </label>
                </div>
              </HeaderLi>

            </HeaderUl>


            {menuOpen && (
              <button className="navbar__btnIcon" onClick={toggleMenu}>
                {/* Adicionei a chamada da função onClick para ativar o toggleMenu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className={menuOpen ? "open-icon" : ""}
                /* Adicionei a classe "open-icon" apenas quando o menu está aberto */
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="40"
                    y1="128"
                    x2="216"
                    y2="128"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></line>
                  <line
                    x1="40"
                    y1="64"
                    x2="216"
                    y2="64"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></line>
                  <line
                    x1="40"
                    y1="192"
                    x2="216"
                    y2="192"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></line>
                </svg>
              </button>
            )}

            {!menuOpen && (
              /* Renderiza o conteúdo do menu apenas quando menuOpen é true */
              <div className="container__menu">
                <nav className="menu__box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    class="close-icon"
                    onClick={toggleMenu}
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="200"
                      y1="56"
                      x2="56"
                      y2="200"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="8"
                    ></line>
                    <line
                      x1="200"
                      y1="200"
                      x2="56"
                      y2="56"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="8"
                    ></line>
                  </svg>
                  <div>
                    <ul className="menu__list">
                      <li className="menu__item">
                        <Link to={"/"}>FEED</Link>
                      </li>
                      <li className="menu__item">
                        <Link to={"/portfólio"}>{t('header.Portfolio')}</Link>
                      </li>
                      <li className="menu__item" onClick={toggleDropDown}>
                        <div className="item__dropdown">
                          {t('header.About')}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <polyline
                              points="208 96 128 176 48 96"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="8"
                            ></polyline>
                          </svg>
                        </div>
                        {!dropdownOpen && (
                          <ul className="submenu__list">
                            <li className="submenu__item">{t('header.AboutMe')}</li>
                            <li className="submenu__item">
                              <Link to={"/certificados"}>{t('header.Certificados')}</Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="menu__item">
                        <Link style={{ textTransform: "uppercase" }} to={"/#contact"}>{t('header.Contact')}</Link>
                      </li>
                      <li className="menu__item">
                        <div>
                          <img style={{ width: "32px" }} src={currentLanguage === 'pt' ? BRFlag : EUAFlag} alt="Language flag" />
                          <NavbarItemButton onClick={handleChangeLanguage}>{t('header.Language')}</NavbarItemButton>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            )}
          </ItemsWrapper>
        </NavbarWrapper>
      </header>


    </>




    // <HeaderWrapper expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand>
    //       <span>
    //         <LogoStyle to={"/"}>LM</LogoStyle>
    //       </span>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <NavbarItem to={"/"}>FEED</NavbarItem>
    //         <NavbarItem to={"/"}>PORTFOLIO</NavbarItem>
    //         <NavbarItemDropdown title="ABOUT" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">ABOUT ME</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">CERTIFICATES</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavbarItemDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </HeaderWrapper>
  );
};

export default Header;
