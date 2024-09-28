import React, { useEffect, useRef } from 'react';
// import './Stars.css'; // Importe o arquivo CSS para as animações

const StarCanvas: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const starCount = 100; // Número de estrelas
  const starsRef = useRef<HTMLDivElement[]>([]); // Referência para armazenar as estrelas

  useEffect(() => {
    if (darkMode) {
      createStars();
    } else {
      removeStars();
    }
  }, [darkMode]);

  const createStars = () => {
    const container = document.getElementById('star-container');
    if (container) {
      // Limpa estrelas existentes
      container.innerHTML = '';

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`; // Posição aleatória horizontal
        star.style.animationDuration = `${Math.random() * 2 + 30}s`; // Duração aleatória da animação (3s a 5s)
        star.style.animationDelay = `${Math.random() * 10}s`; // Atraso aleatório da animação (0s a 5s)

        // Adiciona a estrela ao container
        container.appendChild(star);
        starsRef.current.push(star);
      }
    }
  };

  const removeStars = () => {
    const container = document.getElementById('star-container');
    if (container) {
      container.innerHTML = '';
      starsRef.current = []; // Limpa as referências
    }
  };

  return (
    <div id="star-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden' }} />
  );
};

export default StarCanvas;
