import React, { useState } from 'react';
import styled from 'styled-components';
import SlidingWindow from '@/containers/SlidingWindow';

const DropdownContainer = styled.div`
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

function ActionsDropdown({ data, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSlidingWindow, setShowSlidingWindow] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openSlidingWindow = () => {
    setIsOpen(false); // Close the dropdown when opening the sliding window
    setShowSlidingWindow(true);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>Actions</DropdownButton>
      <SlidingWindow
        open={showSlidingWindow}
        onClose={() => setShowSlidingWindow(false)}
        data={data}
        index={index}
      />
      <DropdownContent open={isOpen}>
        <DropdownItem onClick={openSlidingWindow}>Edit course</DropdownItem>
        <DropdownItem onClick={openSlidingWindow}>View course</DropdownItem>
        <DropdownItem onClick={openSlidingWindow}>Copy course</DropdownItem>
        <DropdownItem onClick={openSlidingWindow}>Delete course</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
}

export default ActionsDropdown;
