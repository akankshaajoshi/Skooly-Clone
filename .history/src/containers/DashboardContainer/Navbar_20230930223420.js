import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchApiData } from '@/lib/fetchData';

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

function Navbar({ imageSrc }) {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useQuery('apiData', fetchApiData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  const user = data[0];
  dispatch(editUser(user));

  const [user, setUser] = useState(
    useSelector((state) => state.user.split(' ')[0]),
  );

  return (
    <NavbarContainer>
      <Link
        to="/register-school/preschool/dashboard/details"
        style={{ textDecoration: 'none' }}
      >
        <NavbarImage src={imageSrc} alt={user} />
      </Link>
      <span>
        Welcome
        <br />
        {user}
      </span>
      <Link to="/register-school/preschool/dashboard">
        <Button>Dashboard</Button>
      </Link>
    </NavbarContainer>
  );
}

export default Navbar;
