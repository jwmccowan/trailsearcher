import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { getBackgroundColor } from '../themeUtils';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }
  body {
    background-color: ${({ theme }) => getBackgroundColor(theme)};
  }
`;