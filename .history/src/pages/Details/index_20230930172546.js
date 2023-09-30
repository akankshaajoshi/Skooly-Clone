import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { editUser } from '@/store/userSlice';
import Navbar from '@/containers/DashboardContainer/Navbar';
import { details } from '@/utils/constants';
import { fetchApiData } from '@/lib/fetchData';
import { Container } from '@/components/custom/Container';
import { Card } from '@/components/custom/Card';
// Create a styled inner container component
const InnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid #ccc;
`;

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
    return <div>Error:{error.message}</div>;
  }

  const user = data[0];
  dispatch(editUser(user));
  console.log(user);

  const values = Object.values(user);

  return (
    <Container
      style={{ display: 'flex', justifyContent: 'space-between' }}
      flexDirection="row"
    >
      <Navbar
        name="details"
        imageSrc="https://getskooly.com/skoolyweb/imgs/dashboard/school-image.png"
      />
      <InnerContainer>
        {details.map((ele, ind) => (
          <Card
            key={values[0]}
            style={{
              display: 'flex',
              width: ' 90%',
              borderBottom: '1px solid #ccc',
              padding: '10px',
            }}
          >
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
