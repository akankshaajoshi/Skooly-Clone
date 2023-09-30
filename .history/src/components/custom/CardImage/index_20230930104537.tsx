import styled from 'styled-components';

interface CardImageProps {
  [propName: string]: any;
}

export const CardImage = styled.img<CardImageProps>`
  display: flex;
  align-self: center;
  border-radius: 20px;
  flex: 1;
  max-width: 175px;
  max-height: 300px;
  padding: 0px 10px 0px 10px;
`;
