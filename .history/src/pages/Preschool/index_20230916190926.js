import React from 'react';
import styled from 'styled-components';
import {Container} from "@/components/custom/Container";
import {colors} from "@/assets";
import SignupContainer from "@/containers/SignupContainer"
import {Heading} from "@/components/base/Typography";
import img from '@/assets/images/skooly-logo.png';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Header, Img} from '@/pages/Signup/helpers';
import preschool1 from "@/assets/images/preschool1.jpg";
import preschool2 from "@/assets/images/preschool2.png";
import preschool3 from "@/assets/images/preschool3.png";

const InnerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;

const ImageWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`;

const DisplayImage = styled(Img)`
&&{
    width: 300px;
    height: 500px;
}
`
const DisplayImageC = styled(Img)`
&&{
    width: 300px;
    height: 245px;
}
`

const ColumnWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const index = () => {
  return <Container style={{flexDirection: "row", alignItems: "flex-start", padding: "10px 80px 30px 80px", backgroundColor: `${colors.quaternary}`}}>
    <InnerContainer  style={{flex: "1"}}>
        <Heading>
             <Link to="/register-school">
          <ArrowBackIcon fontSize='large'/>
        </Link>
        <Header>
          <Img src={img} />
        </Header>
        Start your own Preschool or register your Preschool !!
        </Heading>
        <ImageWrapper>
            <DisplayImage src={preschool1}></DisplayImage>
            <ColumnWrapper>
            <DisplayImageC src={preschool2}></DisplayImageC>
            <DisplayImageC src={preschool3}></DisplayImageC>
            </ColumnWrapper>
        </ImageWrapper>
    </InnerContainer>
    <InnerContainer style={{flex: "1"}}>
        <SignupContainer/>
    </InnerContainer>
  </Container>;
};

export default index;
