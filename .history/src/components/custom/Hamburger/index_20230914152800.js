import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MenuButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  padding: 4px 0;
  background-color: transparent;
  border: none;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  opacity: ${({ open }) => (open ? '0.9' : '0')};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: opacity 0.3s ease-in-out;
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? <CloseIcon style={{ color: '#fff' }} /> : <MenuIcon style={{ color: '#fff' }} />}
      </MenuButton>
      {isOpen && (
        <MenuContainer open={isOpen}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </MenuContainer>
      )}
    </>
  );
};

export default HamburgerMenu;
