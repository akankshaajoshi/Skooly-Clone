import React from 'react';
import styled from 'styled-components';
import {Container} from "@/components/custom/Container";
import {colors} from "@/assets"

const InnerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 50%;
`;

const index = () => {
  return <Container style={{padding: "10px 80px 30px 80px", backgroundColor: `${colors.quaternary}`}}>
    <InnerContainer>

    </InnerContainer>
    <InnerContainer>
        
    </InnerContainer>
  </Container>;
};

export default index;
