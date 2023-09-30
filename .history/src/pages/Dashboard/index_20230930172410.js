import styled from 'styled-components';
import Navbar from '@/containers/DashboardContainer/Navbar';

// Create a styled container component
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

// TODO: Keep all the logged in user's information within a redux store that passes the required data to each page
// to prevent refetching

function index({ children }) {
  return (
    <Container style={{display: "flex", minHeight: '100vh', flexDirection: "row", justifyContent: "flex-start" /}}>
      <Navbar imageSrc="https://getskooly.com/skoolyweb/imgs/dashboard/school-image.png" />
      {/* <Dashboard/> */}
      {/* <Course/> */}
      {children}
    </Container>
  );
}

export default index;
