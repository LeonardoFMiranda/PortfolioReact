import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/layout/Header/Header';
import Home from './components/pages/Home/Home';
import Footer from './components/layout/Footer/Footer';
import GlobalStyle from './components/Style/GlobalStyle';
import './components/Style/animations.css'
import './App.css'; // Import the CSS file
import './i18n.ts'
import './components/Style/mediaScreen.css'
import StarCanvas from './components/layout/BackgroundStars/Stars';
import Rotas from './routes/routes';




function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'enabled');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    if (darkMode) {
      setDarkMode(false);
      console.log(darkMode)
      localStorage.setItem('darkMode', 'disabled');
    } else {
      setDarkMode(true);
      localStorage.setItem('darkMode', 'enabled');
    }
  };

  return (
    <>
      <div id="main-container">
        {darkMode &&
          (
            <StarCanvas darkMode={darkMode} />
          )}
      </div>
      <div className="App" id='content'>
        <BrowserRouter>
          <GlobalStyle />
          <Navbar darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />
          <Rotas />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;