import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import GamePage from './Pages/GamePage';
import SettingsPage from './Pages/SettingsPage';
import FeedbackPage from './Pages/FeedbackPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/game" component={GamePage} />
      <Route path="/feedback" component={FeedbackPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
