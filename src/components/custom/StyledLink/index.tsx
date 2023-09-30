import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '@/assets';

export const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: ${colors.black};
    &:hover {
      color: ${colors.tertiary};
    }
  }
`;
