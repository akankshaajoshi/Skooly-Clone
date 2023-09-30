import React, { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const CardImageContainer = styled.img<CardImageProps>`
  display: flex;
  align-self: center;
  border-radius: 20px;
  flex: 1;
  max-width: 175px;
  max-height: 300px;
  padding: 0px 10px 0px 10px;
`;

// eslint-disable-next-line react/function-component-definition
export const CardImage: React.FC<CardImageProps> = ({ ...rest }) => {
  return <CardImageContainer {...rest} />;
};
