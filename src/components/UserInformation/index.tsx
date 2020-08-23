import React from 'react';

import { iconLoader } from '../../utils/iconLoader';

import {
  ContainerAvatar,
  ContainerInformation,
  ContentName,
  ContentBiograph,
  ContentActives,
  Active,
  ImgAvatar,
  ListBody,
  ListItem,
  Link,
} from './styled';

interface PropsUserInformation {
  userInfo?: Record<string, any>;
}

const UserInformation: React.FC<PropsUserInformation> = ({ userInfo }) => (
  <>
    <ContainerAvatar>
      <ImgAvatar src={userInfo?.avatar_url} alt="Avatar user" />
    </ContainerAvatar>
    <ContainerInformation>
      <ContentName>{userInfo?.name}</ContentName>
      <ContentBiograph>{userInfo?.bio}</ContentBiograph>

      <ContentActives>
        <Active>
          {iconLoader({ iconName: 'peoples', fontSize: 18 })}
          {`${userInfo?.followers} followers`}
        </Active>
        <Active>·</Active>
        <Active>
          {`${userInfo?.following} following`}
        </Active>
      </ContentActives>
      <ContentActives>
        <ListBody>
          <ListItem>
            {iconLoader({ iconName: 'officeBuilding', fontSize: 16 })}
            {userInfo?.company}
          </ListItem>
          <ListItem>
            {iconLoader({ iconName: 'location', fontSize: 16 })}
            {userInfo?.location}
          </ListItem>
          <ListItem>
            {iconLoader({ iconName: 'link', fontSize: 16 })}
            <Link href={userInfo?.blog}>{userInfo?.blog}</Link>
          </ListItem>
        </ListBody>
      </ContentActives>
    </ContainerInformation>
  </>
);

export default UserInformation;
