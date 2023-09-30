import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { editUser } from '@/store/userSlice';
import Navbar from '@/containers/DashboardContainer/Navbar';
import { details } from '@/utils/constants';
import { fetchApiData } from '@/lib/fetchData';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Create a styled inner container component
const InnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid #ccc;
`;

// Create a styled card component
const Card = styled.div`
  display: flex;
  width: 90%;
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;

// Create a styled content section for the card
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
function Index() {
  const details = useSelector((state) => state);
  const values = Object.values(details);

  return (
    <Container>
      <Navbar
        name="details"
        imageSrc="https://getskooly.com/skoolyweb/imgs/dashboard/school-image.png"
      />
      <InnerContainer>
        {details.map((ele, ind) => (
          <Card key={values[0]}>
            <Content>
              <h3>{ele.header}</h3>
              <p>
                {ele.content}
                {ind === 0 ? '' : JSON.stringify(values[ind]).slice(1, -1)}
              </p>
            </Content>
          </Card>
        ))}
      </InnerContainer>
    </Container>
  );
}

export default Index;
