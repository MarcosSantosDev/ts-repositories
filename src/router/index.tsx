import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Main from '../pages/Main';
import Navbar from '../components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/:username" component={Main} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
