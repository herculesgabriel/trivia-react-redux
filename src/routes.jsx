import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import GamePage from './Pages/GamePage';
import SettingsPage from './Pages/SettingsPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/game" component={GamePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
