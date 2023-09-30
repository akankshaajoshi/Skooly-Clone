import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input<InputProps>`
  width: 100%;
  border: 1px solid gray;
`;

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;
