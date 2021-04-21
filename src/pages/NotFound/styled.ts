import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 62px);
  background-color: #0d1117;

  & > div:nth-child(1) {
    font-size: 52px;
    color: #f0f8ff;
  }

  & > div:nth-child(2) {
    font-size: 52px;
    color: #f0f8ff;
  }
`;
