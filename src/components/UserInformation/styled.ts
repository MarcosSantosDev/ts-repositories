import styled from 'styled-components';

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
      "image"
      "informations";
  grid-row-gap: 10px;
`;

export const ContainerAvatar = styled.div`
  grid-area: image;
  display: flex;
  justify-content: center;
`;

export const ImgAvatar = styled.img`
  border-radius: 50%;
  height: 276px;
`;

export const ContainerInformation = styled.div`
  grid-area: informations;
  margin: 0 30px;

  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-areas: 
      "name"
      "loginName"
      "biograph"
      "actives";
  grid-row-gap: 8px
`;

export const ContentName = styled.h1`
  grid-area: name;
`;

export const ContentLoginName = styled.h2`
  grid-area: loginName;
  font-size: 20px;
  font-weight: 300;
  color: #666;
`;

export const ContentBiograph = styled.p`
  grid-area: biograph;
  font-size: 16px;
`;

export const ContentActives = styled.div`
  grid-area: actives;
  display: flex;
  aling-items: center;
`;

export const Active = styled.span`
  display: flex;
  margin: 5px;

  > svg {
    margin-right: 5px;
    margin-left: 0;
  }
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.text};
  max-width: 280px;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    opacity: 0.8;
  }
`;
