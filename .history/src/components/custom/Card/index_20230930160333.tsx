import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { borderRadius } from '@/assets';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const CardContainer = styled.div<CardProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 300px;
  flex: 1;
  border-radius: ${borderRadius.xLarge};
  padding: 15px 15px 0px 15px;
  overflow: hidden;
`;

const Card: React.FC<CardProps> = ({ ...rest }) => {
  return <CardContainer {...rest} />;
};
