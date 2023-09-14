import React from 'react';
import styled from 'styled-components';
import { heights } from '@/assets';

const Nav = styled.Nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 40px;
`;

const NavLeft = styled.div``;

const NavRight = styled.div``;
const index = () => {
  return <Nav></Nav>;
};

export default index;
