import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Repositories from '../pages/Repositories';
import NotFound from '../pages/NotFound';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/:username" component={Repositories} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
