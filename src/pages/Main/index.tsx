import React from 'react';
import { connect } from 'react-redux';

import Repositories from '../Repositories';
import Menu from '../../components/Menu';
import MenuOption from '../../components/Menu/Option';
import { UserProps } from '../../types';

interface MainProps {
  user: UserProps | null
}

const Main = ({ user }: MainProps) => (
  <>
    <Menu profileUrlImg={user?.avatar_url || ''} profileLoginName={user?.login || ''}>
      <MenuOption iconName="openedbook" label="Overview" active />
      <MenuOption iconName="closedbook" label="Repositories" counter={user?.public_repos} />
      <MenuOption iconName="project" label="Projects" />
      <MenuOption iconName="box" label="Packages" />
    </Menu>
    <Repositories />
  </>
);

const mapStateToProps = (state: any) => ({
  user: state.gitHub.user.data,
});

export default connect(mapStateToProps)(Main);
