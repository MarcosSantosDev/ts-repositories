import React, { PropsWithChildren } from 'react';

import {
  Container,
  MenuWrapper,
  MenuSmallProfile,
  MenuOptionsWrapper,
  SmallImgAvatar,
} from './styled';

interface MenuProps {
  profileUrlImg: string;
  profileLoginName: string;
}

const Menu = ({ children, profileUrlImg, profileLoginName }: PropsWithChildren<MenuProps>) => {
  return (
    <Container>
      <MenuWrapper>
        <MenuSmallProfile>
          <SmallImgAvatar src={`${profileUrlImg}`} alt="small profile" />
          <h3>{profileLoginName}</h3>
        </MenuSmallProfile>
        <MenuOptionsWrapper>
          {children}
        </MenuOptionsWrapper>
      </MenuWrapper>
    </Container>
  );
};

export default Menu;
