import React from 'react';
import { connect } from 'react-redux';

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

interface StateProps {}

interface RepositoriesProps {
  getAllRepositories: Function;
  getUser: Function;
  repositories: any[];
  user: UserProps;
}

class Repositories extends React.Component<RepositoriesProps, StateProps> {
  componentDidMount() {
    const { getAllRepositories, getUser } = this.props;
    const user = 'MarcosSantosDev';

    getAllRepositories(user);
    getUser(user);
  }

  render() {
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
            this.props?.user && <UserInformation userInfo={this.props?.user} />
          }
        </ContainerInformationUser>

        <ContainerRepositories>
          <ContainerCard>
            {
              this.props?.repositories
                .map((repository: any) => (
                  <CardRepository key={repository.id} repository={repository} />
                ))
            }
          </ContainerCard>
        </ContainerRepositories>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  repositories: state.gitHub.repositories,
  user: state.gitHub.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  getAllRepositories: (user: string) => dispatch(thunkRepositories.getAllRepositories(user)),
  getUser: (user: string) => dispatch(thunkRepositories.getUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
