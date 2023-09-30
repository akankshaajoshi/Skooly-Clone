import Button from '@/components/base/Button';
import { colors, heights } from '@/assets';
import Container from '@/components/custom/Container';
import { Card } from '@/components/custom/Card';
import { CardImage } from '@/components/custom/CardImage';
import { CardText } from '@/components/custom/CardText';
import { Heading, Text } from '@/components/base/Typography';
import StyledLink from '@/components/custom/StyledLink';

import workspace from '@/assets/images/workspace.png';

const containerStyle = {
  backgroundColor: `${colors.tertiary}`,
  height: `${heights.xSmall}`,
  paddingTop: '30px',
};

const cardImageStyle = {
  minHeight: '55vh',
  minWidth: '45vw',
  paddingBottom: '0px',
  flex: '1',
};

const index = () => (
  <Container style={containerStyle}>
    <Card>
      <CardText
        style={{
          color: 'white',
          flex: '1',
          paddingLeft: '50px',
          paddingRight: '30px',
        }}
      >
        <Heading>
          #1 Software to run any type of school, try it for free
        </Heading>
        <Text>
          {' '}
          Supercharge your business with the world’s topmost school platform. Go
          online for enrollments, communication, billing & payments, attendance,
          bookings & class scheduling, live classes etc. Affordable, suitable
          for schools, centres of any sizes.{' '}
        </Text>
        <StyledLink to="/signup">
          {' '}
          <Button style={{ marginTop: '20px', backgroundColor: 'blue' }}>
            Learn more
          </Button>{' '}
        </StyledLink>
      </CardText>
      <CardImage src={workspace} style={cardImageStyle} />
    </Card>
  </Container>
);

export default index;
