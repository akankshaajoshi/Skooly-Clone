import React from 'react';
import styled from 'styled-components';
import Container from '@/components/custom/Contanier';
import logo from "@/assets/images/skooly-logo"

const Info = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row
`;

const SmallContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column
`;

const Img = styled.img`
width: 80px;
height: 40px;
`

const index = () => {
  return (
    <Container>
      <Info>
        <SmallContainer>
            <Img src = {logo}/>
            <ButtonContainer>
                
            </ButtonContainer>
        </SmallContainer>
        <SmallContainer>

        </SmallContainer>
        <SmallContainer>

        </SmallContainer>
        <SmallContainer>

        </SmallContainer>
        <SmallContainer>

        </SmallContainer>
      </Info>
    </Container>
  );
};

export default index;
