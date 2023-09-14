import React from 'react';
import styled from 'styled-components';
import { heights } from '@/assets';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 40px;
`;

const NavLeft = styled.div`
display: flex;
align-self: flex-start;
flex-direction: row;
`;

const NavRight = styled.div`
display: flex;
align-items: flex-end;
flex-direction: row;
`;
const index = () => {
  return <Nav>
    <NavLeft>On left</NavLeft>
    <NavRight>On right</NavRight>
  </Nav>;
};

export default index;
