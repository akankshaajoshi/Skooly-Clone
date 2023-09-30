import { Container } from '@/components/custom/Container';
import { colors } from '@/assets';
import SignupContainer from '@/containers/SignupContainer';
import { Heading } from '@/components/base/Typography';
import img from '@/assets/images/skooly-logo.png';
import { Header, Img } from '@/pages/Signup/helpers';
import {
  InnerContainer,
  Header,
  ImageWrapper,
  ColumnWrapper,
  DisplayImage,
  DisplayImageC,
} from '@/pages/Preschool/helpers';
import preschool1 from '@/assets/images/preschool1.jpg';
import preschool2 from '@/assets/images/preschool2.png';
import preschool3 from '@/assets/images/preschool3.png';

const index = () => (
  <Container
    style={{
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: '10px 80px 30px 80px',
      backgroundColor: `${colors.quaternary}`,
    }}
  >
    <InnerContainer style={{ flex: '1' }}>
      <Header>
        <Img src={img} />
      </Header>
      <Heading style={{ justifyContent: 'center' }}>
        Start your own Preschool or register your Preschool !!
      </Heading>
      <ImageWrapper>
        <DisplayImage src={preschool1} />
        <ColumnWrapper>
          <DisplayImageC src={preschool2} />
          <DisplayImageC src={preschool3} />
        </ColumnWrapper>
      </ImageWrapper>
    </InnerContainer>
    <InnerContainer style={{ flex: '1' }}>
      <SignupContainer header="Preschool" />
    </InnerContainer>
  </Container>
);

export default index;
