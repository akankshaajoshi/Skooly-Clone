import React from 'react';
import styled from 'styled-components';
import {Container} from "@/components/custom/Container";
import {colors} from "@/assets";
import SignupContainer from "@/containers/SignupContainer"
import {Heading} from "@/components/base/Typography";
import preschool1 from "@/assets/images/preschool1.jpg";
import preschool2 from "@/assets/images/preschool2.jpg";
import preschool3 from "@/assets/images/preschool3.jpg";

const InnerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 50%;
`;

const ImageWrapper = styled.div`
display: flex;
`;

const index = () => {
  return <Container style={{padding: "10px 80px 30px 80px", backgroundColor: `${colors.quaternary}`}}>
    <InnerContainer>
        <ImageWrapper>

        </ImageWrapper>
    </InnerContainer>
    <InnerContainer>
        <SignupContainer/>
    </InnerContainer>
  </Container>;
};

export default index;
