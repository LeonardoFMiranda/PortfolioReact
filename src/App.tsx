import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/layout/Header/Header';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer/Footer';
import GlobalStyle from './components/Style/GlobalStyle';
import './App.css'; // Import the CSS file
import './i18n.ts'
import StarCanvas from './components/layout/BackgroundStars/Stars';

// Função para criar um gerador de números aleatórios com semente fixa
function seededRandom(seed: number) {
  let m = 0x80000000; // 2**31
  let a = 1103515245;
  let c = 12345;
  let state = seed;

  return function() {
    state = (a * state + c) % m;
    return state / (m - 1);
  };
}

function App() {
  // useEffect(() => {
  //   const container = document.getElementById('main-container');
  //   if (container) {
  //     const starCount = 100; // Número de estrelas animadas
  //     const fixedStarCount = 500; // Número de estrelas fixas

  //     // Cria um gerador de números aleatórios com uma semente fixa
  //     const random = seededRandom(42);

  //     // Função para adicionar uma estrela
  //     const addStar = (
  //       className: string,
  //       top: number,
  //       left: number,
  //       size?: number,
  //       animationDuration?: number,
  //       animationDelay?: number
  //     ) => {
  //       const star = document.createElement('div');
  //       star.classList.add(className);
  //       star.style.top = `${top}%`;
  //       star.style.left = `${left}%`;
  //       if (size) {
  //         star.style.width = `${size}px`;
  //         star.style.height = `${size}px`;
  //       }
  //       if (animationDuration) star.style.animationDuration = `${animationDuration}s`;
  //       if (animationDelay) star.style.animationDelay = `${animationDelay}s`;
  //       container.appendChild(star);
  //     };

  //     // // Adiciona estrelas animadas
  //     // for (let i = 0; i < starCount; i++) {
  //     //   const top = random() * 100;
  //     //   const left = random() * 100;
  //     //   const animationDuration = random() * 10 + 5; // Duração aleatória entre 5s e 15s
  //     //   const animationDelay = random() * 5; // Atraso aleatório até 5s
  //     //   addStar('estrela', top, left, undefined, animationDuration, animationDelay);
  //     // }
  //     // Adiciona estrelas fixas
  //     for (let i = 0; i < fixedStarCount; i++) {
  //       const top = random() * 100;
  //       const left = random() * 100;
  //       const size = random() * 2; // Tamanho aleatório entre 1px e 4px
  //       const animationDelay = random() * 20; // Atraso aleatório até 20s
  //       addStar('estrela-fixa', top, left, size, undefined, animationDelay);
  //     }
  //   }
  // }, []);

  return (
    <>
      <div id="main-container">
        <StarCanvas/>
      </div>
      <div className="App" id='content'>
        <BrowserRouter>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;