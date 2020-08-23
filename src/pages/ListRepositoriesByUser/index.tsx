/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import {
  listRepositoriesByUserName,
  getUser,
} from '../../services/GitHub/repositories';

import CardRepository from '../../components/CardRepository';

import { iconLoader } from '../../utils/iconLoader';

import {
  Container,
  ContainerInformationUser,
  ContainerAvatar,
  ImgAvatar,
  ContainerInformation,
  ContentActives,
  ContainerCard,
  ContentDescription,
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
        <ContainerAvatar>
          {userInfo?.avatar_url && <ImgAvatar src={userInfo?.avatar_url} alt="Avatar user" />}
        </ContainerAvatar>
        <ContainerInformation>
          <h1>{userInfo?.name}</h1>
          <ContentDescription>{userInfo?.bio}</ContentDescription>

          <ContentActives>
            <div>
              {iconLoader({ iconName: 'peoples', fontSize: 18 })}
              {userInfo?.followers}
              {' '}
              followers
            </div>
            <div>
              {'        · '}
              {userInfo?.following}
              {' '}
              following
            </div>
          </ContentActives>
        </ContainerInformation>
      </ContainerInformationUser>

      <ContainerCard>
        {
        repositories.map((repository) => (
          <CardRepository
            key={repository.id}
            repository={repository}
          />
        ))
      }
      </ContainerCard>
    </Container>
  );
};

export default ListRepositoriesByUser;
