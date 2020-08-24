import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  grid-template-columns: auto;

  width: 100%;
  min-height: 80px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border-bottom: 1px solid  ${(props) => props.theme.colors.text};
  padding: 18px 0;
`;

export const Link = styled.a`
  max-width: 280px;
  color: ${(props) => props.theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

export const WrapperRepository = styled.div``;

export const RepositoryName = styled.h2``;

export const RepositoryDescription = styled.div`
  padding: 10px 0;
`;

export const WrapperFeature = styled.div`
  display: flex;
  aling-items: center;
  width: 100%;
  margin-top: 5px;
`;

export const FeatureDetails = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 5px;
  aling-items: center;
  margin-right: 15px;
`;

export const ContentRepository2 = styled.div``;
