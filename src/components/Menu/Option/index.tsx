import React from 'react';
import { iconLoader } from '../../../utils/iconLoader';

import {
  Container,
  OptionWrapper,
  OptionIcon,
  OptionLabel,
  OptionCounter,
} from './styled';

interface OptionProps {
  iconName: string;
  label: string;
  active?: boolean;
  counter?: number;
}

const Option = ({
  iconName, label, active, counter,
}: OptionProps) => {
  return (
    <Container className={active ? 'active' : ''}>
      <OptionWrapper>
        <OptionIcon>{iconLoader(iconName, 18)}</OptionIcon>
        <OptionLabel>{label}</OptionLabel>
        {counter && <OptionCounter>{counter}</OptionCounter>}
      </OptionWrapper>
    </Container>
  );
};

export default Option;
