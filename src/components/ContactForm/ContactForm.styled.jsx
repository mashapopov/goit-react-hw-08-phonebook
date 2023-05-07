import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 350px;

  border: 1px solid;
  border-radius: 10px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  padding: 5px 10px;
  max-width: 200px;

  background-color: #f6bb8a;
`;
export const Button = styled.button`
  max-width: 150px;
`;
