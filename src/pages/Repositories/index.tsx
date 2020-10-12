import React, { useState, useEffect } from 'react';

import {
  listRepositoriesByUserName,
  getUser,
} from '../../services/GitHub/repositories';

import { iconLoader } from '../../utils/iconLoader';

import CardRepository from '../../components/CardRepository';
import UserInformation from '../../components/UserInformation';

import { RepositoryProps, UserProps } from '../../types';

import {
  Container,
  ContainerInformationUser,
  ContainerRepositories,
  SubMenu,
  ContentTitle,
  ContainerCard,
} from './styled';

const Repositories = () => {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [userData, setUserData] = useState<UserProps>();

  const handleGetUser = async () => {
    const user = await getUser('MarcosSantosDev');
    setUserData(user);
  };

  const handleRepositories = async () => {
    const repositoriesList = await listRepositoriesByUserName('MarcosSantosDev');
    const repositoriesPersonal = repositoriesList.filter((repository) => repository.fork === false);
    repositoriesPersonal.length = 6;
    setRepositories(repositoriesPersonal);
  };

  useEffect(() => {
    handleGetUser();
    handleRepositories();
  }, []);

  return (
    <Container>
      <SubMenu>
        <ContentTitle>
          {iconLoader('book', 18)}
          <h3>Overview</h3>
        </ContentTitle>
      </SubMenu>

      <ContainerInformationUser>
        {
          userData && <UserInformation userInfo={userData} />
        }
      </ContainerInformationUser>

      <ContainerRepositories>
        <ContainerCard>
          {
            repositories
              .map((repository) => (
                <CardRepository key={repository.id} repository={repository} />
              ))
          }
        </ContainerCard>
      </ContainerRepositories>
    </Container>
  );
};

export default Repositories;
