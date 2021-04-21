import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { iconLoader } from '../../utils/iconLoader';

import CardRepository from '../../components/CardRepository';
import UserInformation from '../../components/UserInformation';
import * as thunkRepositories from '../../redux/thunks/gitHub';

import { UserProps } from '../../types';

import {
  Container,
  ContainerInformationUser,
  ContainerRepositories,
  SubMenu,
  ContentTitle,
  ContainerCard,
} from './styled';

interface ProfileProps {
  user: UserProps | null;
  repositories: never[];
}

interface RepositoriesProps {
  getAllRepositories: Function;
  getUser: Function;
  user: {
    data: UserProps | null;
    isFetching: boolean;
    error: null;
  };
  repositories: {
    data: never[];
    isFetching: boolean;
    error: null;
  }
}

const Repositories = ({
  getAllRepositories, getUser, user, repositories,
}: RepositoriesProps) => {
  const [profile, setProfile] = useState<ProfileProps>({
    user: null,
    repositories: [],
  });
  const { username } = useParams<{ username: string }>();
  const history = useHistory();

  useEffect(() => {
    if (username) {
      getAllRepositories(username);
      getUser(username);
    }
  }, [getAllRepositories, getUser, username]);

  useEffect(() => {
    if (user.data) {
      setProfile((profileCurrent) => ({
        ...profileCurrent,
        user: user.data,
      }));
    } else if (user.error) {
      history.push('/404');
    }
  }, [history, user.data, user.error]);

  useEffect(() => {
    if (repositories.data) {
      setProfile((profileCurrent) => ({
        ...profileCurrent,
        repositories: repositories.data,
      }));
    } else if (repositories.error) {
      history.push('/404');
    }
  }, [history, repositories.data, repositories.error]);

  return (
    <Container>
      <SubMenu>
        <ContentTitle>
          {iconLoader('book', 18)}
          Overview
        </ContentTitle>
      </SubMenu>

      <ContainerInformationUser>
        {
          profile.user && <UserInformation userInfo={profile.user} />
        }
      </ContainerInformationUser>

      <ContainerRepositories>
        <ContainerCard>
          {
            profile.repositories
              .map((repository: any) => (
                <CardRepository key={repository.id} repository={repository} />
              ))
          }
        </ContainerCard>
      </ContainerRepositories>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  repositories: state.gitHub.repositories,
  user: state.gitHub.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  getAllRepositories: (user: string) => dispatch(thunkRepositories.getAllRepositories(user)),
  getUser: (user: string) => dispatch(thunkRepositories.getUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
