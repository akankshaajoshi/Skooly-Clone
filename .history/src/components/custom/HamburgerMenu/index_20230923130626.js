import { useState } from 'react';
import styled from 'styled-components';
import { hamburgerItems } from '@/utils/constants';
import { colors } from '@/assets';

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
  position: fixed;
  list-style: none;
  padding: 10px;
  margin-top: 50px;
  text-align: center;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background-color: ${colors.white};
  border: 2px solid;
`;

const MenuItem = styled.li`
  margin: 10px 0;
`;

function HamburgerMenu() {
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
        {hamburgerItems.map((item, ind) => (
          <MenuItem key={ind}>
            {item}
            <hr />
          </MenuItem>
        ))}
      </MenuList>
    </HamburgerMenuWrapper>
  );
}

export default HamburgerMenu;
