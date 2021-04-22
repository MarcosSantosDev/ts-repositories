import React from 'react';
import { Link } from 'react-router-dom';
// import Switch from 'react-switch';
// import { shade } from 'polished';

import { iconLoader } from '../../utils/iconLoader';

import {
  Container,
  Nav,
  InputWrapper,
  InputSearch,
  IconWrapper,
  Ul,
  Li,
} from './styled';

const Navbar = () => (
  <Container>
    <Nav>
      <IconWrapper>{iconLoader('github', 32)}</IconWrapper>
      <InputWrapper>
        <InputSearch
          type="text"
          placeholder="Search or jump to…"
        />
        <div className="input-hack">/</div>
      </InputWrapper>
      <Ul>
        <Li><Link to={window.location.pathname}>Pull requests</Link></Li>
        <Li><Link to={window.location.pathname}>Issues</Link></Li>
        <Li><Link to={window.location.pathname}>Marketplace</Link></Li>
        <Li><Link to={window.location.pathname}>Explore</Link></Li>
      </Ul>
    </Nav>
  </Container>
);

export default Navbar;
