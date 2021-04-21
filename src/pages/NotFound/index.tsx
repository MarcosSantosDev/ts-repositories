import React from 'react';

import { Container } from './styled';

const NotFound: React.FC = () => (
  <Container>
    <div className="notFound-404">404</div>
    <div className="notFound-message">Ops, page not found!</div>
  </Container>
);

export default NotFound;
