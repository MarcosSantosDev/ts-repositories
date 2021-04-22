import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  background: #161b22;
  color: #FFF;
  padding: 16px 32px;
  width: 100%;
  height: 62px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-shrink: 1;
`;

export const InputWrapper = styled.div`
  position: relative;

  & > .input-hack {
    width: 20px;
    height: 20px;
    color: #85898b;
    background: #0d1117;
    border: 1px solid #21262d;
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    line-height: 1.5;
    position: absolute;
    right: 8px;
    top: 5px;
  }
`;

export const InputSearch = styled.input`
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
    width: 542px;
  }

  &::placeholder {
    color: #c9d1d9;
    font-size: 14px;
  }
`;

export const Ul = styled.ul`
  display: inline-flex;
  list-style: none;
  padding: 0 16px;
  
  & > li {
    margin-right: 16px;
  }

  & > li:last-child {
    margin-right: 0px;
  }
`;

export const Li = styled.li`
  font-weight: 600;
  white-space: nowrap;

  & > a {
    text-decoration: none;
    color: #f0f6fc;

    &:hover {
      opacity: .5;
      transition: .4s;
    }
  }
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  margin-right: 15px;

  > svg {
    fill: #f0f8ff;
    
    &:hover {
      fill: #c9d1d9;
      transition: .4s;
    }
  }
`;
