import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 350px auto;
  grid-template-rows: auto;
  grid-row-gap: 20px;
  margin-top: 40px;
`;

export const ContainerInformationUser = styled.div`
  grid-column: 1 / 2;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgAvatar = styled.img`
  border-radius: 50%;
  height: 280px;
`;

export const ContainerInformation = styled.div`
  padding: 10px 30px;
`;

export const ContentDescription = styled.span`
  font-size: 16px;
`;

export const ContentActives = styled.div`
  display: flex;
  margin: 20px 0;

  > div {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 5px;
  
    aling-items: center;
  }
`;

export const ContainerCard = styled.div`
  grid-column: 2 / 3;
`;
