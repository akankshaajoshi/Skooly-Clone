import React from 'react';
import styled from 'styled-components';
import { navItems } from '@/utils/constants';
import HamburgerMenu from '@/components/custom/HamburgerMenu';
import { colors } from '@/assets';
import logo from '@/assets/images/skooly-logo.png';
import { StyledLink } from '@/components/custom/StyledLink';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  min-height: 80px;
  z-index: 10000;
  position: fixed;
  width: 100%;
  background-color: ${colors.primary};
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10px;
  justify-content: flex-start;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10px 70px 10px 10px;
  justify-content: flex-end;
`;

const NavComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;

const Img = styled.img`
  height: 40px;
  width: 100px;

  &:hover {
    cursor: pointer;
  }
`;

const index = () => (
  <Nav>
    <NavLeft>
      <Img src={logo} />
    </NavLeft>
    <NavRight>
      {navItems.map((item) => (
        <StyledLink to={item[0]}>
          {' '}
          <NavComponent>{item[1]}</NavComponent>{' '}
        </StyledLink>
      ))}
      <HamburgerMenu />
    </NavRight>
  </Nav>
);

export default index;
