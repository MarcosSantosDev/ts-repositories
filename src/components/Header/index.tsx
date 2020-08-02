import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { shade } from 'polished';

import {
  Container,
} from './styled';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      GitHub / Repositories

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        uncheckedIcon={false}
        checkedIcon={false}
        height={18}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;
