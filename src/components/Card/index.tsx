import React, { memo } from 'react';
// import moment from 'moment';

import { iconLoader } from '../../utils/iconLoader';

import { languages_colors } from '../../helpers/colors.json';

import { RepositoryProps } from '../../types';

import {
  Container,
  RepositoryWrapper,
  IconWrapper,
  RepositoryName,
  RepositoryLink,
  DescriptionWrapper,
  Description,
  RepositoryInformationWrapper,
  Information,
  LanguageCircle,
  InformationIconWrapper,
  Language,
} from './styled';

export type CardProps = {
  repository: RepositoryProps;
}

export type languageColorProps = {
  [key: string]: string | null
}

const limitTextOnCard = (text: string, limit: number) => {
  if (text.length <= limit) {
    return text;
  }
  return `${text.slice(0, limit)}...`;
};

const handleGetColor = (color: any) => {
  const languageColor: languageColorProps = languages_colors;

  return languageColor[color] || '#000';
};

const Card = ({ repository }: CardProps) => (
  <Container>
    <RepositoryWrapper>
      <IconWrapper>{iconLoader('closedbook', 16)}</IconWrapper>
      <RepositoryLink href="/">
        <RepositoryName>{repository.name}</RepositoryName>
      </RepositoryLink>
    </RepositoryWrapper>
    <DescriptionWrapper>
      <Description>{limitTextOnCard(repository.description, 200)}</Description>
    </DescriptionWrapper>
    <RepositoryInformationWrapper>
      <Information>
        <LanguageCircle color={handleGetColor(repository.language)} />
        <Language>{repository.language || 'Static'}</Language>
      </Information>
      <Information>
        <InformationIconWrapper>{iconLoader('star', 16)}</InformationIconWrapper>
        <Language>{repository.stargazers_count}</Language>
      </Information>
    </RepositoryInformationWrapper>
  </Container>
);

export default memo(Card);
