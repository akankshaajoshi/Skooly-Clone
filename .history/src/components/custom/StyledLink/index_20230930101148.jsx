import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import { colors } from '@/assets';

interface StyledLinkProps extends LinkProps {
  hoverColor?: string;
  [propName: string]: any; // Rest property to accept any other props
}

const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: ${colors.black};

  &:hover {
    color: ${(props) => props.hoverColor || colors.tertiary};
  }

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles as CSSObject}
    `}
`;

StyledLink.defaultProps = {
  hoverColor: colors.tertiary,
  customStyles: undefined, // You can add default custom styles here if needed
};

export default StyledLink;
