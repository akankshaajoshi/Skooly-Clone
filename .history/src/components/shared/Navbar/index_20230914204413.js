import React from 'react';
import styled from 'styled-components';
import { navItems } from '@/utils/constants';
import logo from '@/assets/images/skooly-logo.png';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  min-height: 80px;
  z-index: 10000;
  position: fixed;
  width: 100%;
`;

const NavLeft = styled.div`
  left: 0;
  padding: 10px 0px 10px 50px;
`;

const NavRight = styled.div`
  right: 0;
`;

const NavComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Img = styled.img`
  height: 40px;
  width: 100px;
`;

const index = () => {
  return (
    <Nav>
      <NavLeft>
        <Img src={logo} />
      </NavLeft>
      <NavRight>
        {navItems.map((item) => (
          <NavComponent>{item}</NavComponent>
        ))}
      </NavRight>
    </Nav>
  );
};

export default index;
