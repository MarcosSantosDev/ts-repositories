import React from 'react';
import moment from 'moment';

import { iconLoader } from '../../utils/iconLoader';

import {
  Card,
  Link,
  WrapperRepository,
  RepositoryName,
  RepositoryDescription,
  WrapperFeature,
  FeatureDetails,
} from './styled';

interface PropsCardRepository {
  repository?: any;
}

const CardRepository: React.FC<PropsCardRepository> = ({ repository }) => (
  <Card>
    <WrapperRepository>
      <RepositoryName>
        <Link href={repository?.html_url} target="blank">{repository?.name}</Link>
      </RepositoryName>
      <RepositoryDescription>
        {repository?.description}
      </RepositoryDescription>
    </WrapperRepository>
    <WrapperFeature>
      <FeatureDetails>
        <span
          style={{
            background: 'yellow',
            position: 'relative',
            top: '1px',
            display: 'inline-block',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
          }}
        />
        <span>{repository?.language}</span>
      </FeatureDetails>
      <FeatureDetails>
        <span>{iconLoader({ iconName: 'star', fontSize: 16 })}</span>
        <span>{repository?.stargazers_count}</span>
      </FeatureDetails>
      <FeatureDetails>
        <span>{iconLoader({ iconName: 'forked', fontSize: 16 })}</span>
        <span>{repository?.forks}</span>
      </FeatureDetails>
      {
        repository?.license
        && (
          <FeatureDetails>
            <span>{iconLoader({ iconName: 'law', fontSize: 16 })}</span>
            <span>{repository?.license?.name}</span>
          </FeatureDetails>
        )
      }
      {
        repository?.updated_at
        && (
          <FeatureDetails>
            <span>Updated on </span>
            <span>{moment(repository?.updated_at).format('D MMM YYYY')}</span>
          </FeatureDetails>
        )
      }
    </WrapperFeature>
  </Card>
);

export default CardRepository;
