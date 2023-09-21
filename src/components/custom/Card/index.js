import styled from 'styled-components';
import { borderRadius } from '@/assets';

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 300px;
  flex: 1;
  border-radius: ${borderRadius.xLarge};
  padding: 15px 15px 0px 15px;
  overflow: hidden;
`;
