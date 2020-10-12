import React, { memo } from 'react';
import moment from 'moment';

import { iconLoader } from '../../utils/iconLoader';

import { languages_colors } from '../../helpers/colors.json';

import { RepositoryProps } from '../../types';

import {
  Card,
  Link,
  RepositoryName,
  RepositoryDescription,
  CircleColor,
  WrapperFeature,
  FeatureDetails,
  Feature,
} from './styled';

export type PropsCardRepository = {
  repository: RepositoryProps;
}

export type languageColorProps = {
  [key: string]: string | null
}

const CardRepository = ({ repository }: PropsCardRepository) => {
  const handleGetColor = (color: any) => {
    const languageColor: languageColorProps = languages_colors;

    return languageColor[color] || '#000';
  };

  return (
    <Card>
      <RepositoryName>
        {iconLoader('repository', 16)}
        {' '}
        <Link href={repository.html_url} target="blank">
          {repository.name}
        </Link>
      </RepositoryName>

      <RepositoryDescription>
        {repository.description}
      </RepositoryDescription>

      <WrapperFeature>
        <FeatureDetails>
          <CircleColor bgColor={handleGetColor(repository.language)} />
          <Feature>{repository.language || 'Static'}</Feature>
        </FeatureDetails>
        <FeatureDetails>
          <Feature>{iconLoader('star', 16)}</Feature>
          <Feature>{repository.stargazers_count}</Feature>
        </FeatureDetails>
        <FeatureDetails>
          <Feature>{iconLoader('forked', 16)}</Feature>
          <Feature>{repository.forks}</Feature>
        </FeatureDetails>
        {
          repository.license
          && (
            <FeatureDetails>
              <Feature>{iconLoader('law', 16)}</Feature>
              <Feature>{repository.license?.name}</Feature>
            </FeatureDetails>
          )
        }
        {
          repository.updated_at
          && (
            <FeatureDetails style={{ cursor: 'pointer' }}>
              <Feature
                title={moment(repository.updated_at).format('D MMM YYYY')}
              >
                Updated at
              </Feature>
              <Feature
                title={moment(repository.updated_at).format('D MMM YYYY')}
              >
                {iconLoader('calendar', 16)}
              </Feature>
            </FeatureDetails>
          )
        }
      </WrapperFeature>
    </Card>
  );
};

export default memo(CardRepository);
