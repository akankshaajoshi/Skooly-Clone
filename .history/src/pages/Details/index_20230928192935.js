import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
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
  const values = Object.values(user);

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
                {ind === 0 ? '' : JSON.stringify(values[ind])}
              </p>
            </Content>
          </Card>
        ))}
      </InnerContainer>
    </Container>
  );
}

export default Index;
