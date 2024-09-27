import React, { useEffect, useRef, useState } from 'react';

function seededRandom(seed: number) {
  let m = 0x80000000; // 2**31
  let a = 1103515245;
  let c = 12345;
  let state = seed;

  return function () {
    state = (a * state + c) % m;
    return state / (m - 1);
  };
}

const StarCanvas: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [starCount, setStarCount] = useState(1000);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');

      const cloudCount = 20; // Número de nuvens animadas
      const stars: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
      const clouds: { x: number; y: number; size: number; speed: number }[] = [];

      // Cria um gerador de números aleatórios com uma semente fixa
      const random = seededRandom(42);

      // Função para desenhar uma estrela
      const drawStar = (x: number, y: number, size: number, alpha: number) => {
        if (ctx) {
          ctx.beginPath();
          ctx.arc(x, y, size, 0, 2 * Math.PI);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();
        }
      };

      // Função para desenhar uma nuvem
      const drawCloud = (x: number, y: number, size: number) => {
        if (ctx) {
          ctx.beginPath();
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

          // Desenha várias elipses sobrepostas para criar uma nuvem cartunesca
          ctx.ellipse(x, y, size * 1.5, size, 0, 0, 2 * Math.PI);
          ctx.ellipse(x + size, y, size * 1.5, size, 0, 0, 2 * Math.PI);
          ctx.ellipse(x - size, y, size * 1.5, size, 0, 0, 2 * Math.PI);
          ctx.ellipse(x + size / 2, y - size / 2, size * 1.2, size * 0.8, 0, 0, 2 * Math.PI);
          ctx.ellipse(x - size / 2, y - size / 2, size * 1.2, size * 0.8, 0, 0, 2 * Math.PI);

          // Adiciona mais elipses para formas variadas
          ctx.ellipse(x + size / 3, y + size / 3, size * 1.1, size * 0.9, 0, 0, 2 * Math.PI);
          ctx.ellipse(x - size / 3, y + size / 3, size * 1.1, size * 0.9, 0, 0, 2 * Math.PI);
          ctx.ellipse(x, y + size / 2, size * 1.3, size * 0.7, 0, 0, 2 * Math.PI);

          ctx.fill();
        }
      };

      // Função para animar as estrelas
      const animateStars = () => {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Atualiza e desenha estrelas animadas
          for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            star.y -= star.speed; // Move a estrela para cima
            if (star.y < 0) {
              star.y = canvas.height; // Reposiciona a estrela no fundo
            }
            drawStar(star.x, star.y, star.size, star.alpha);
          }

          requestAnimationFrame(animateStars);
        }
      };

      // Função para animar as nuvens
      const animateClouds = () => {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Atualiza e desenha nuvens animadas
          for (let i = 0; i < clouds.length; i++) {
            const cloud = clouds[i];
            cloud.y -= cloud.speed; // Move a nuvem para cima
            if (cloud.y < 0) {
              cloud.y = canvas.height; // Reposiciona a nuvem no fundo
            }
            drawCloud(cloud.x, cloud.y, cloud.size);
          }

          requestAnimationFrame(animateClouds);
        }
      };

      // Inicializa as estrelas animadas
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: random() * canvas.width,
          y: random() * canvas.height,
          size: random() * 2, // Tamanho aleatório entre 1px e 2px
          alpha: 0.5 + random() * 0.5, // Transparência aleatória entre 0.5 e 1
          speed: 0.1 + random() * 0.2 // Velocidade aleatória entre 0.1 e 0.3
        });
      }

      // Inicializa as nuvens animadas
      for (let i = 0; i < cloudCount; i++) {
        clouds.push({
          x: random() * canvas.width,
          y: random() * canvas.height,
          size: 20 + random() * 30, // Tamanho aleatório entre 20px e 50px
          speed: 0.1 + random() * 0.2 // Velocidade aleatória entre 0.1 e 0.3
        });
      }

      // Ajusta o tamanho do canvas
      const resizeCanvas = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          console.log("Canvas width:", canvas.width, "Canvas height:", canvas.height);
        }
      };

      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      if (darkMode) {
        animateStars();
      } else {
        setStarCount(0)
      }

      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }
  }, [darkMode]);

  return <canvas ref={canvasRef} id="star-canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }} />;
};

export default StarCanvas;