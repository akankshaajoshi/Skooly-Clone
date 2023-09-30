import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface CopyrightProps extends HTMLAttributes<HTMLSpanElement> {}

const CopyrightComponent = styled.span<CopyrightProps>`
  display: flex;
  align-self: center;
  justify-content: center;
  margin: 30px;
`;

export const Copyright: React.FC<CopyrightProps> = ({ children, ...rest }) => {
  return <CopyrightComponent {...rest}>{children}</CopyrightComponent>;
};
