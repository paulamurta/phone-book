import { createGlobalStyle } from "styled-components";

import Inter200 from "../fonts/inter-v13-latin-200.woff2";
import Inter400 from "../fonts/inter-v13-latin-400.woff2";
import Inter600 from "../fonts/inter-v13-latin-600.woff2";
import Inter800 from "../fonts/inter-v13-latin-800.woff2";

const GlobalStyle = createGlobalStyle`

@font-face {
font-family: 'Inter 200';
  src: url(${Inter200}) format('woff2'),
}

@font-face {
font-family: 'Inter 400';
  src: url(${Inter400}) format('woff2'),
}

@font-face {
font-family: 'Inter 600';
  src: url(${Inter600}) format('woff2'),
}

@font-face {
font-family: 'Inter 800';
  src: url(${Inter800}) format('woff2'),
}

body {
	height: 100vh;
	width: 100vw;
	background-color: var(--color-background);
}

* {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    font-family: 'Visby Medium', sans-serif;
    scroll-behavior: smooth;
    font-weight: normal;
    
  }

  body {
    background: ${({
      theme,
    }: {
      theme: { colors: { background: Record<string, string> } };
    }) => theme.colors.background};
    width: 100vw;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: hidden;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    transition: all 0.2s ease-in;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
    transition: all 0.2s ease-in;

  }

  button {
    cursor: pointer;
    
    &:disabled {
    cursor: not-allowed;
    background-color: #c6c6c6;
    color: #ffffff;
    border: none;

      &:hover {
        background-color: #c6c6c6;
      }

      &:active {
        background-color: #c6c6c6;
      }
    }
  }

  button, input {
    outline: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #575757;
    font-weight: bold;
  }

  h1 {
    font-size: 1.375rem;
  }

  h2 {
    font-size: 20px;
  }

  h5 {
    font-size: 14px;
  }

  small {
    color: #575757;
    font-size: 0.65rem;
    font-weight: 400;
  }

  input[type=password]::-ms-clear{
    display: none;
  }

  input[type=password]::-ms-reveal{
    display: none;
  }
`;
