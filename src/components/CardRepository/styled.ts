import styled from 'styled-components';

type StyledProps = {
  bgColor: string;
}

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

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
      "repository"
      "description"
      "actives";
  grid-template-rows: 40px auto 40px;
  grid-row-gap: 10px;
  align-items: center;

  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid #e1e4e8;
  border-radius: 6px;
`;

export const RepositoryName = styled.h2`
  grid-area: repository;
  align-self: center;
  padding: 0 10px;
`;

export const RepositoryDescription = styled.div`
  grid-area: description;
  align-self: center;
  padding: 0 10px;
`;

export const WrapperFeature = styled.div`
  grid-area: actives;

  display: flex;
  aling-items: center;
  width: 100%;
  padding: 0 10px;
`;

export const FeatureDetails = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 5px;
  aling-items: center;
  margin-right: 15px;
`;

export const CircleColor = styled.span<StyledProps>`
  display: inline-block;
  position: relative;
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.bgColor};
  top: 1px;
  border-radius: 50%;
`;

export const Feature = styled.span``;
