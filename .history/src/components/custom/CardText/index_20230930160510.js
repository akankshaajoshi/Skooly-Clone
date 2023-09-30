import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface CardTextProps extends HTMLAttributes<HTMLDivElement> {
  // Add any specific props you want to pass here
}

const CardTextContainer = styled.div<CardTextProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CardText: React.FC<CardTextProps> = ({ ...rest }) => {
  return <CardTextContainer {...rest} />;
};

