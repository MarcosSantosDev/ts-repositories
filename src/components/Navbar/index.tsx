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
  AlingCenter,
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
          uncheckedIcon={(
            <AlingCenter>
              {iconLoader('sun', 14)}
            </AlingCenter>
          )}
          checkedIcon={(
            <AlingCenter>
              {iconLoader('moon', 14)}
            </AlingCenter>
          )}
          height={20}
          width={48}
          handleDiameter={20}
          offColor={shade(0.15, colors.secondary)}
          onColor={colors.secondary}
        />
      </NavbarActions>
    </Container>
  );
};

export default Navbar;
