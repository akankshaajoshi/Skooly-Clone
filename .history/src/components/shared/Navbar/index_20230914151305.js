import React from 'react';
import styled from 'styled-components';
import { navItems } from '@/utils/constants';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  min-height: 80px;
  padding: 10px;
`;

const NavLeft = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  flex: 1;
`;

const NavRight = styled.div`
  display: flex;
  flex-direction: row;
  flex: 3;
`;

const NavComponent = styled.div`
display: flex;
text-align: center;
padding: 10px;
`;

const index = () => {
  return (
    <Nav>
      <NavLeft>On left</NavLeft>
      <NavRight>
        {navItems.map((item) => (
          <NavComponent>{item}</NavComponent>
        ))}
      </NavRight>
    </Nav>
  );
};

export default index;
