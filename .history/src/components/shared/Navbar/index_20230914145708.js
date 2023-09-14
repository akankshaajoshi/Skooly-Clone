import React from 'react';
import styled from 'styled-components';
import { heights } from '@/assets';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 40px;
`;

const NavLeft = styled.div``;

const NavRight = styled.div``;
const index = () => {
  return <Nav>
    Written here
  </Nav>;
};

export default index;
