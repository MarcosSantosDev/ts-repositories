/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import {
  listRepositoriesByUserName,
  getUser,
} from '../../services/GitHub/repositories';

import { iconLoader } from '../../utils/iconLoader';

import CardRepository from '../../components/CardRepository';
import UserInformation from '../../components/UserInformation';

import {
  Container,
  ContainerInformationUser,
  ContainerRepositories,
  ContentActions,
  ContentTitle,
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

      <ContainerRepositories>
        <ContentActions>
          <ContentTitle>
            {iconLoader({ iconName: 'repository', fontSize: 20 })}
            <h2>Personal Projects</h2>
          </ContentTitle>
        </ContentActions>
        <ContainerCard>
          {
            repositories
              .filter((repository) => repository.fork === false)
              .map((repository) => (
                <CardRepository key={repository.id} repository={repository} />
              ))
          }
        </ContainerCard>
      </ContainerRepositories>
    </Container>
  );
};

export default ListRepositoriesByUser;
