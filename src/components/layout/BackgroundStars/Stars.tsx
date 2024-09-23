import React, { useEffect, useRef } from 'react';

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


const StarCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const starCount = 1000; // Número de estrelas animadas
      const fixedStarCount = 10; // Número de estrelas fixas
      const stars: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];

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

      // Função para animar as estrelas
      const animateStars = () => {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

        //   // Desenha estrelas fixas
        //   for (let i = 0; i < fixedStarCount; i++) {
        //     const x = random() * canvas.width;
        //     const y = random() * canvas.height;
        //     const size = random() * 2; // Tamanho aleatório entre 1px e 2px
        //     drawStar(x, y, size, 1);
        //   }

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

      // Inicializa as estrelas animadas
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: random() * canvas.width,
          y: random() * canvas.height,
          size: random() * 2, // Tamanho aleatório entre 1px e 2px
          alpha: 0.5 + random() * 0.5, // Transparência aleatória entre 0.5 e 1
          speed: 0.1 + random() * 0.2 // Velocidade aleatória entre 0.5 e 1
        });
      }

      // Ajusta o tamanho do canvas
      const resizeCanvas = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      };

      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      animateStars();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }
  }, []);

  return <canvas ref={canvasRef} id="star-canvas" />;
};

export default StarCanvas;