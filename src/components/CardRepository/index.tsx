import React from 'react';

import {
  Card,
} from './styled';

interface PropsCardRepository {
  children: any
}

const CardRepository = ({ children }:PropsCardRepository) => (
  <Card>
    <div>ICON</div>
    {' '}
    {children}
  </Card>
);

export default CardRepository;
