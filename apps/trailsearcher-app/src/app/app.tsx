import * as React from 'react';
import { CharacterSheetProvider, theme } from '@trailsearcher/components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OldApp from './Views/OldApp/app';
import { Home } from './Views/Home/Home';
import { Builder } from './Views/Builder/Builder';
import { ThemeProvider } from 'styled-components';
import { NoSsr, MuiThemeProvider, CssBaseline } from '@material-ui/core';

const Providers: React.FC = ({ children }) => (
  <NoSsr>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CharacterSheetProvider>{children}</CharacterSheetProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  </NoSsr>
);

const Routing: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/build">
        <Builder />
      </Route>
      <Route path="/old">
        <OldApp />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export const App: React.FC = () => {
  return (
    <Providers>
      <Routing />
    </Providers>
  );
};
