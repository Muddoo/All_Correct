import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  *, *::before, *::after {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }

  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    font-size: 62.5%;
    overflow-x: hidden;
  }


  body {
    overflow-x: hidden;
    overflow-y: auto;
    -moz-transition: all 350ms ease-in-out;
    -o-transition: all 350ms ease-in-out;
    -webkit-transition: all 350ms ease-in-out;
    transition: all 350ms ease-in-out;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyles;
