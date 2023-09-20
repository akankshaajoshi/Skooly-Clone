import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #333;
  color: white;
  flex-wrap: wrap;
  max-width: 60px;
  gap: 20px;
`;

const NavbarImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
`;

const Button = styled.button`
width: 50px;
  border: none;
  background-color: blue;
  color: white;
  cursor: pointer;

  &:hover {
    color: pink;
    background-color: white;
  }
`;


function Navbar({ name, imageSrc }) {
  return (
    <NavbarContainer>
      <Link to="/register-school/preschool/dashboard/details" style={{textDecoration: "none"}}>
      <NavbarImage src={imageSrc} alt={name} />
      <span>Welcome, {name}</span>
      <Link to="/register-school/preschool/dashboard"><Button>Dashboard</Button></Link>
      </Link>
    </NavbarContainer>
  );
}

export default Navbar;
