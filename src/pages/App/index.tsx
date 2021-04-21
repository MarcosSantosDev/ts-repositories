import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import store from '../../redux/store';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import GlobalStyle from '../../styles/global';

import usePersistedState from '../../hooks/usePersistedState';

import Navbar from '../../components/Navbar';
import Routes from '../../router';

import { Container } from './styled';

const Main = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Container>
            <GlobalStyle />
            <Navbar toggleTheme={toggleTheme} />
            <Routes />
          </Container>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default Main;
