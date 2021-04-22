import React from 'react';
import { Provider } from 'react-redux';

import store from '../../redux/store';

import GlobalStyle from '../../styles/global';

import Routes from '../../router';

import { Container } from './styled';

const Main = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        <Routes />
      </Container>
    </Provider>
  </React.StrictMode>
);

export default Main;
