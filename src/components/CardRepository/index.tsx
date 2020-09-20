import React, { memo } from 'react';
import moment from 'moment';

import { iconLoader } from '../../utils/iconLoader';

import { languages_colors } from '../../helpers/colors.json';

import { RepositoryProps } from '../../types';

import {
  Card,
  Link,
  WrapperRepository,
  RepositoryName,
  RepositoryDescription,
  WrapperFeature,
  FeatureDetails,
  CircleColor,
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
      <WrapperRepository>

        <RepositoryName>
          <Link href={repository.html_url} target="blank">
            {repository.name}
          </Link>
        </RepositoryName>

        <RepositoryDescription>
          {repository.description}
        </RepositoryDescription>

      </WrapperRepository>
      <WrapperFeature>
        <FeatureDetails>
          <CircleColor bgColor={handleGetColor(repository.language)} />
          <span>{ repository.language || 'Static' }</span>
        </FeatureDetails>
        <FeatureDetails>
          <span>{iconLoader('star', 16)}</span>
          <span>{repository.stargazers_count}</span>
        </FeatureDetails>
        <FeatureDetails>
          <span>{iconLoader('forked', 16)}</span>
          <span>{repository.forks}</span>
        </FeatureDetails>
        {
          repository.license
          && (
            <FeatureDetails>
              <span>{iconLoader('law', 16)}</span>
              <span>{repository.license?.name}</span>
            </FeatureDetails>
          )
        }
        {
          repository.updated_at
          && (
            <FeatureDetails>
              <span>Updated on </span>
              <span>{moment(repository.updated_at).format('D MMM YYYY')}</span>
            </FeatureDetails>
          )
        }
      </WrapperFeature>
    </Card>
  );
};

export default memo(CardRepository);
