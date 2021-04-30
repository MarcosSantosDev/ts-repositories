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

export const FormWrapper = styled.main`
  position: relative;
  display: flex;
  margin: 50px 0px;
`;

export const Input = styled.input`
  width: 272px;
  padding: 6px 12px;
  min-height: 28px;
  background: #0d1117;
  color: #f0f6fc;
  border: 1px solid #21262d;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  transition: .5s;
  
  &:focus {
    width: 300px;
  }

  &::placeholder {
    color: #c9d1d960;
    font-size: 14px;
  }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 1;
    padding: 5px 16px;
    margin: 0px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    cursor: pointer;
    user-select: none;
    border: 1px solid;
    border-radius: 5px;
    appearance: none;
    color: #c9d1d9;
    background-color: #21262d;
    border-color: #30363d;
    transition: .2s;

    &:hover {
      opacity: .5;
    }

    svg {
      margin: 0 5px;
    }
`;
