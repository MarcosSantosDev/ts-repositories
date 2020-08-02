import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import usePersistedState from './utils/usePersistedState';

import ListRepositoriesByUser from './pages/ListRepositoriesByUser';

import GlobalStyle from './styles/global';
import Header from './components/Header';

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="app">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <ListRepositoriesByUser />
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
