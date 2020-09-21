import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';

import { iconLoader } from '../../utils/iconLoader';

import {
  Container,
  ContentHeaderActions,
  HeaderAction,
  ContentTitle,
  Title,
  IconTitle,
} from './styled';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <ContentTitle>
        <IconTitle>{iconLoader('github', 32)}</IconTitle>
        <Title>GitHub API</Title>
      </ContentTitle>
      <ContentHeaderActions>
        <HeaderAction>
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
        </HeaderAction>
      </ContentHeaderActions>
    </Container>
  );
};

export default Header;
