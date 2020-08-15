import * as React from 'react';
import { StyleThemeProvider } from '@trailsearcher/components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OldApp from './Views/OldApp/app';
import { Home } from './Views/Home/Home';
import { Builder } from './Views/Builder/Builder';

export const App: React.FC = () => {
  return (
    <StyleThemeProvider>
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
    </StyleThemeProvider>
  );
}