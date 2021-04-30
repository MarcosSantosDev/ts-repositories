import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(30px, auto) auto 30px;
  padding: 16px;
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
`;

export const RepositoryWrapper = styled.div`
  grid-row: 1 / 2;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
`;

export const RepositoryLink = styled.a`
  display: flex;
  color: #58a6ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const RepositoryName = styled.h4`
  display: flex;
  flex: auto;
`;

export const DescriptionWrapper = styled.div`
  grid-row: 2 / 3;
  max-width: 100%;
  max-height: 100px;
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #8b949e;
  margin: 8px 0 16px 0;
`;

export const RepositoryInformationWrapper = styled.div`
  grid-row: 3 / 4;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 1;
  margin: 0 5px;
`;

export const LanguageCircle = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
  top: 1px;
  border-radius: 50%;
  margin: 0 5px;
`;

export const InformationIconWrapper = styled.div`
  margin-right: 5px;
`;

export const Language = styled.p`
  font-size: 12px;
  color: #8b949e;
  margin: 0;
`;
