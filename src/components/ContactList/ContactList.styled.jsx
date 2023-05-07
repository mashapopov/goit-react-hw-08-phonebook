import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 10px;
  max-width: 450px;
`;

export const Li = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const P = styled.p`
  font-size: 20px;
`;
export const Span = styled.span`
  font-size: 20px;
`;
export const Button = styled.button`
padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 200ms;

  &:hover {
    color: red;
  }
}
`;
