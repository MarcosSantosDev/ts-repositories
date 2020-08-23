import React from 'react';

import { Card } from './styled';

interface PropsCardRepository {
  repository?: any;
}

const CardRepository: React.FC<PropsCardRepository> = (props) => (
  <Card>
    {props?.repository?.name}
  </Card>
);

export default CardRepository;
