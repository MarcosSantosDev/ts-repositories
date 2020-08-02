import React, { useState, useEffect } from 'react';

import { listRepositoriesByUserName } from '../../services/GitHub/repositories';
import CardRepository from '../../components/CardRepository';
import {
  WrapperCard,
} from './styled';

interface Repository {
  id: number
  name: string
}

const ListRepositoriesByUser = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleRepositories = async () => {
    const { data } = await listRepositoriesByUserName('MarcosSantosDev');
    setRepositories(data);
  };

  useEffect(() => {
    handleRepositories();
  }, []);

  return (
    <div className="ListRepositoriesByUser">
      <WrapperCard>
        {
          repositories.map((repository) => (
            <CardRepository key={repository.id}>
              {repository.name}
            </CardRepository>
          ))
        }
      </WrapperCard>
    </div>
  );
};

export default ListRepositoriesByUser;
