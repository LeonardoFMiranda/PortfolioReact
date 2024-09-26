import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

#main-container {
  position: fixed; /* Fixa o contêiner principal */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Altura fixa para evitar crescimento infinito */
  pointer-events: none; /* Permite interação com o conteúdo abaixo */
  z-index: -1; /* Coloca o contêiner atrás do conteúdo */
  overflow: hidden;
}

#main-container::before,
#main-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease;
  animation: moveGradient 8s ease-in-out infinite;
  z-index: -1;
}

#main-container::before {
  background: linear-gradient(to bottom,#bcdef8 , #fdf5ec); /* Gradiente do modo claro */
  background-size: 100% 200%; /* Permite que o gradiente se mova */
  opacity: 1;
  
}

@keyframes moveGradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

#main-container::after {
  background: linear-gradient(to bottom, black 0%, black 100%); /* Gradiente do modo escuro */
  opacity: 0;
}

.darkmode #main-container::before {
  opacity: 0;
}

.darkmode #main-container::after {
  opacity: 1;
}

  #content {
    position: relative;
    z-index: 1; /* Garante que o conteúdo esteja acima do contêiner principal */
    color: white; /* Ajuste a cor conforme necessário */
  }

.Button {
  background: 4px solid white;
  border: none;
  display: inline-block;
  height: 60px;
  overflow: hidden;
  padding: 0 40px;
  position: relative;
}

.Button,
svg {
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 24px;
  text-transform: uppercase;
}

.divider{
  height: 4px;
  background-color: var(--default-blue-color);
}




`;

export default GlobalStyle;


// .estrela {
//   position: absolute;
//   width: 2px;
//   height: 80px;
//   background: linear-gradient(45deg, white, transparent); 
//   border-radius: 50%;
//   opacity: 0; /* Inicialmente invisível */
//   transition: opacity 1s ease-in-out; /* Transição suave */
//   animation: fall linear infinite;
// }
// .estrela-fixa::before,
// .estrela-fixa::after {
//   content: '';
//   position: absolute;
//   background: white;
//   border-radius: 50%;
// }

// .estrela-fixa::before {
//   width: 2px; /* Largura do braço horizontal */
//   height: 10px; /* Altura do braço horizontal */
//   top: -2px; /* Ajuste a posição vertical */
//   left: 2px; /* Ajuste a posição horizontal */
// }

// .estrela-fixa {
//   position: absolute;
//   background: white;
//   border-radius: 50%;
//   transition: opacity 1s ease-in-out; /* Transição suave */
//   animation: pulse 2s infinite ease-in-out, rise 30s linear infinite; /* Adicionei a animação pulse */
// }



// .estrela-fixa::after {
// width: 10px; /* Largura do braço vertical */
// height: 2px; /* Altura do braço vertical */
// top: 2px; /* Ajuste a posição vertical */
// left: -2px; /* Ajuste a posição horizontal */
// }

// @keyframes fall {
// 0% {
//   transform: translate(0, 0) rotate(45deg);
//   opacity: 1;
// }
// 100% {
//   transform: translate(-100vw, 100vh) rotate(45deg);
//   opacity: 0;
// }
// }

// @keyframes pulse {
//   0%, 100% {
//     opacity: 0.5;
//   }
//   50% {
//     opacity: 1;
//   }
// }

// @keyframes rise {
//   0% {
//     transform: translateY(100vh);
//     opacity: 0;
//   }
//   25% {
//     opacity: 0.5;
//   }
//   50% {
//     transform: translateY(50vh);
//     opacity: 1;
//   }
//   75% {
//     opacity: 0.5;
//   }
//   100% {
//     transform: translateY(-100vh);
//     opacity: 0;
//   }
// }
//   @keyframes animStar {
// from {
//   transform: translateY(0px);
// }
// to {
//   transform: translateY(-2000px);
// }
// }