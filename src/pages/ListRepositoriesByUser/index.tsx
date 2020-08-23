/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import {
  listRepositoriesByUserName,
  getUser,
} from '../../services/GitHub/repositories';

import CardRepository from '../../components/CardRepository';
import UserInformation from '../../components/UserInformation';

import {
  Container,
  ContainerInformationUser,
  ContainerCard,
} from './styled';

const ListRepositoriesByUser = () => {
  const [repositories, setRepositories] = useState<Record<string, any>[]>([]);
  const [userInfo, setUserInfo] = useState<Record<string, any>>();

  const handleGetUser = async () => {
    const { data } = await getUser('MarcosSantosDev');
    setUserInfo(data);
  };

  const handleRepositories = async () => {
    const { data } = await listRepositoriesByUserName('MarcosSantosDev');
    setRepositories(data);
  };

  useEffect(() => {
    handleGetUser();
    handleRepositories();
  }, []);

  return (
    <Container>
      <ContainerInformationUser>
        {userInfo && <UserInformation userInfo={userInfo} />}
      </ContainerInformationUser>

      <ContainerCard>
        {
          repositories.map((repository) => (
            <CardRepository key={repository.id} repository={repository} />
          ))
        }
      </ContainerCard>
    </Container>
  );
};

export default ListRepositoriesByUser;
