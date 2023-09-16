import React from 'react';
import styled from 'styled-components';
import {Container} from "@/components/custom/Container";
import {colors} from "@/assets";
import SignupContainer from "@/containers/SignupContainer"
import {Heading} from "@/components/base/Typography";
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
`;

const index = () => {
  return <Container style={{flexDirection: "row", alignItems: "flex-start", padding: "10px 80px 30px 80px", backgroundColor: `${colors.quaternary}`}}>
    <InnerContainer  style={{flex: "1"}}>
        <Heading>
        Start your own Preschool or register your Preschool !!
        </Heading>
        <ImageWrapper>

        </ImageWrapper>
    </InnerContainer>
    <InnerContainer style={{flex: "10"}}>
        <SignupContainer/>
    </InnerContainer>
  </Container>;
};

export default index;
