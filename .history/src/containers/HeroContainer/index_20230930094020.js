import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors, borderRadius, heights } from '@/assets';
import { Heading, SubSubHeading } from '@/components/base/Typography';
import Button from '@/components/base/Button/index.tsx';
import { Container } from '@/components/custom/Container';
import { StyledLink } from '@/components/custom/StyledLink';

const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: ${borderRadius.large};
  padding: 30px 30px;
`;
const containerStyle = {
  backgroundColor: `${colors.primary}`,
  height: `${heights.large}`,
};

const buttonStyle = {
  width: '300px',
  height: '50px',
  backgroundColor: `${colors.black}`,
  color: `${colors.white}`,
  borderRadius: `${borderRadius.small}`,
};

const index = () => (
  <Container style={containerStyle}>
    <ContainerInner>
      <Heading>Instantly join your school on Skooly</Heading>
      <Button
        style={buttonStyle}
        onClick={() => <Navigate to="/signup" />}
        data-testid="join"
      >
        Join now
      </Button>
    </ContainerInner>
    <SubSubHeading>
      <StyledLink to="https://getskooly.com/mpweb/#/exclusive">
        Register as school or teacher
      </StyledLink>
    </SubSubHeading>
  </Container>
);

export default index;
