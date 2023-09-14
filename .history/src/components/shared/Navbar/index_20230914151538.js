import React from 'react';
import styled from 'styled-components';
import { navItems } from '@/utils/constants';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  min-height: 80px;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding: 10px;
`;

const NavRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const NavComponent = styled.div`
display: flex;
justify-content: center;
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
