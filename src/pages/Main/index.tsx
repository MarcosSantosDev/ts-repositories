import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import GlobalStyle from '../../styles/global';

import usePersistedState from '../../hooks/usePersistedState';

import Navbar from '../../components/Navbar';
import Repositories from '../Repositories';

import { Container } from './styled';

const Main = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Navbar toggleTheme={toggleTheme} />
          <Repositories />
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default Main;
