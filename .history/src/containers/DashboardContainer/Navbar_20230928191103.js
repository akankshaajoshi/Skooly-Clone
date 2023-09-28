import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UseSelector } from 'react-redux/es/hooks/useSelector';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 30px;
  background-color: #333;
  color: white;
  max-width: 60px;
  gap: 30px;
`;

const NavbarImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  border: none;
  background-color: blue;
  color: white;
  cursor: pointer;
  min-height: 40px;

  &:hover {
    color: blue;
    background-color: white;
  }
`;

function Navbar({ name, imageSrc }) {
  return (
    <NavbarContainer>
      <Link
        to="/register-school/preschool/dashboard/details"
        style={{ textDecoration: 'none' }}
      >
        <NavbarImage src={imageSrc} alt={name} />
      </Link>
      <span>
        Welcome
        <br />
        {name}
      </span>
      <Link to="/register-school/preschool/dashboard">
        <Button>Dashboard</Button>
      </Link>
    </NavbarContainer>
  );
}

export default Navbar;
