import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@/components/custom/Container';
import { SubSubHeading, Text } from '@/components/base/Typography';
import { CardText } from '@/components/custom/CardText';
import { CardImage } from '@/components/custom/CardImage';
import { colors, borderRadius } from '@/assets';
import StyledLink from '@/components/custom/StyledLink';
import Copyright from '@/components/custom/Copyright';
import img from '@/assets/images/skooly-logo.png';
import { userOnboarding } from '@/utils/constants';

import { Header, ItemTitle, Img } from '@/pages/Signup/helpers';

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  margin: 10px;
  padding: 10px;
  border-radius: ${borderRadius.large};
  background-color: ${colors.white};
  box-shadow: 0 4px 8px 0 rgba(16, 25, 40, 0.08);

  &:hover {
    cursor: pointer;
    box-shadow: 0 16px 32px 0 rgba(16, 25, 40, 0.16);
  }
`;

const index = () => (
  <Container
    style={{
      backgroundColor: `${colors.quaternary}`,
      borderRadius: `${borderRadius.xLarge}`,
      paddingTop: '30px',
    }}
  >
    <Header style={{ flexDirection: 'row', gap: '10px' }}>
      <Link to="/">
        <ArrowBackIcon />
      </Link>
      <Img src={img} />
    </Header>
    <ItemTitle style={{ marginTop: '20px' }}>Register for free</ItemTitle>
    <ElementContainer>
      {userOnboarding.map((el) => (
        <Element>
          <CardText style={{ alignItems: 'flex-start', padding: '20px' }}>
            <StyledLink to={el[3]}>
              <SubSubHeading style={{ margin: '0px' }}>{el[0]}</SubSubHeading>
              <Text>{el[1]}</Text>
            </StyledLink>
          </CardText>
          <CardImage
            style={{ maxWidth: '50px', maxHeight: '80px' }}
            src={el[2]}
          />
        </Element>
      ))}
    </ElementContainer>
    <Copyright />
  </Container>
);

export default index;
