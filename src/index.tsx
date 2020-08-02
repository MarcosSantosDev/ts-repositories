import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styled.global';
import ListRepositoriesByUser from './pages/ListRepositoriesByUser';

const App = (
  <>
    <React.StrictMode>
      <GlobalStyle dark />
      <ListRepositoriesByUser />
    </React.StrictMode>
  </>
);

ReactDOM.render(App, document.getElementById('root'));
