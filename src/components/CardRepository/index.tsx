import React from 'react';

import { Card, Link } from './styled';

interface PropsCardRepository {
  repository?: any;
}

const CardRepository: React.FC<PropsCardRepository> = ({ repository }) => (
  <Card>
    <Link href={repository?.html_url} target="blank">{repository?.name}</Link>
  </Card>
);

export default CardRepository;
