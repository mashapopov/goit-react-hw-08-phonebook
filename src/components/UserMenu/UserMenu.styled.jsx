import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const P = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  transition: color 200ms;
  :hover,
  :focus {
    color: red;
  }
`;
