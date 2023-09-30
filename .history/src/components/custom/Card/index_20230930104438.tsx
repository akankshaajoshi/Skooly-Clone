import styled from 'styled-components';
import { borderRadius } from '@/assets/index.tsx';

interface CardProps {
  [propName: string]: any;
}
export const Card = styled.div<CardProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 300px;
  flex: 1;
  border-radius: ${borderRadius.xLarge};
  padding: 15px 15px 0px 15px;
  overflow: hidden;
`;
