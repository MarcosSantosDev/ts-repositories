import React from 'react';

import { iconLoader } from '../../utils/iconLoader';

import { UserProps } from '../../types';

import {
  Main,
  ContainerAvatar,
  ContainerInformation,
  ContentName,
  ContentLoginName,
  ContentBiograph,
  ContentActives,
  Active,
  ImgAvatar,
  Link,
} from './styled';

interface UserInformationProps {
  userInfo: UserProps;
}

const UserInformation = ({ userInfo }: UserInformationProps) => (
  <Main>
    <ContainerAvatar>
      <ImgAvatar
        src={userInfo.avatar_url}
        alt="Avatar user"
      />
    </ContainerAvatar>
    <ContainerInformation>
      <ContentName>{userInfo.name}</ContentName>
      <ContentLoginName>{userInfo.login}</ContentLoginName>
      <ContentBiograph>{userInfo.bio}</ContentBiograph>

      <ContentActives>
        {
          userInfo.followers
          && (
            <>
              <Active>
                {iconLoader('organization', 18)}
                {`${userInfo.followers} followers`}
              </Active>
              <Active>·</Active>
            </>
          )
        }
        {
          userInfo.followers && (<Active>{`${userInfo.following} following`}</Active>)
        }
      </ContentActives>
      {
        userInfo.company
        && (
          <Active>
            {iconLoader('officeBuilding', 16)}
            {userInfo.company}
          </Active>
        )
      }
      {
        userInfo.location
        && (
          <Active>
            {iconLoader('location', 16)}
            {userInfo.location}
          </Active>
        )
      }
      {
        userInfo.blog
        && (
          <Active>
            {iconLoader('link', 16)}
            <Link href={userInfo.blog}>{userInfo.blog}</Link>
          </Active>
        )
      }
    </ContainerInformation>
  </Main>
);

export default UserInformation;
