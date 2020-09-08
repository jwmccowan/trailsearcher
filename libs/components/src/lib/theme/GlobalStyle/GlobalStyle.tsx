import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Theme } from '../theme';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${normalize}

  html {
    font-size: 16px;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.5px;
  }
`;
