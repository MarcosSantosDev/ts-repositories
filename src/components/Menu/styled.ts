import styled from 'styled-components';

export const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 80px;
  background: #0d1117;
  border-bottom: 1px solid #21262d;
  z-index: 2;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

export const MenuSmallProfile = styled.div`
  display: flex;
  align-items: center;
  max-width: 360px;
  width: 100%;
  height: 100%;
  margin-left: 40px;
  
  & {
    img {
      margin-right: 10px;
    }
  }
`;

export const SmallImgAvatar = styled.img`
  border-radius: 50%;
  width: 35px;
  height: auto;
  background-size: cover;
`;

export const MenuOptionsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
