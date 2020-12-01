import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import GamePage from './Pages/GamePage';
import SettingsPage from './Pages/SettingsPage';
import FeedbackPage from './Pages/FeedbackPage';
import RankingPage from './Pages/RankingPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/game" component={GamePage} />
      <Route path="/feedback" component={FeedbackPage} />
      <Route path="/ranking" component={RankingPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
