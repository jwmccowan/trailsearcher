import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { getBackgroundColor } from '../themeUtils';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    
  }
  html, body {
    background-color: ${({ theme }) => getBackgroundColor(theme)};
    height: 100%;
    width: 100%;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    margin: 0px;
    padding: 0px;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;