import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';

import { iconLoader } from '../../utils/iconLoader';

import {
  Container,
  NavbarLogo,
  NavbarActions,
  IconTitle,
} from './styled';

interface NavbarProps {
  toggleTheme(): void;
}

const Navbar = ({ toggleTheme }: NavbarProps) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <NavbarLogo>
        <IconTitle>{iconLoader('github', 32)}</IconTitle>
        <h3>GitHub API</h3>
      </NavbarLogo>
      <NavbarActions>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          uncheckedIcon={false}
          checkedIcon={false}
          height={18}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.secondary)}
          onColor={colors.secondary}
        />
      </NavbarActions>
    </Container>
  );
};

export default Navbar;
