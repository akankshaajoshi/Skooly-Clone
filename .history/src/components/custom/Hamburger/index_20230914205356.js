import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  padding: 10px;
`;

const Line = styled.div`
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const MenuItem = styled.li`
  margin: 10px 0;
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerMenuWrapper>
      <HamburgerIcon onClick={toggleMenu}>
        <Line />
        <Line />
        <Line />
      </HamburgerIcon>
      <MenuList isOpen={isOpen}>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
      </MenuList>
    </HamburgerMenuWrapper>
  );
};

export default HamburgerMenu;
