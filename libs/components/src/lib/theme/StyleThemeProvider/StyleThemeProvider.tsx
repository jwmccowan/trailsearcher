import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import { defaultTheme } from '../theme';

export const StyleThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)