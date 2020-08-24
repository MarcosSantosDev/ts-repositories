import styled from 'styled-components';

export const ContainerAvatar = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgAvatar = styled.img`
  border-radius: 50%;
  height: 276px;
`;

export const ContainerInformation = styled.div`
  padding: 10px 30px;
`;

export const ContentName = styled.h1`
  width: 100%;
  margin-top: 10px;
`;

export const ContentLoginName = styled.h2`
  width: 100%;
  margin: 8px auto;
  font-size: 20px;
  font-weight: 300;
  color: #666;
`;

export const ContentBiograph = styled.p`
  width: 100%;
  font-size: 16px;
`;

export const ContentActives = styled.div`
  display: flex;
  margin: 20px 0;
`;

export const Active = styled.div`
  display: flex;
  aling-items: center;

  margin-right: 5px;

  > svg {
    margin: 0 5px;
  }
`;

export const ListBody = styled.div``;

export const ListItem = styled.div`
  display: flex;
  aling-items: center;

  margin: 10px 0;
  list-style: none;

  > svg {
    margin: 0 5px;
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
