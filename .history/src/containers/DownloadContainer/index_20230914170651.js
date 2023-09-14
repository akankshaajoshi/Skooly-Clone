import React from 'react';
import styled from 'styled-components';
import { Container } from '@/components/custom/Container';
import { heights, colors } from '@/assets';

const containerStyle = {
  backgroundColor: `${colors.white}`,
  height: `${heights.small}`,
};

const CardContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-top: 10px;
`;

const CardLeft  = styled.div`
display: flex;
align-items: center;
flex-direction: row;
`

const CardRight = styled.div`
display: flex;
align-items: center;
flex-direction: center;
`

const index = () => {
  return <Container style={containerStyle}>
    <CardContainer>
        <CardLeft style={{backgroundColor: `${colors.primary}`}}></CardLeft>
        <CardRight style={{backgroundColor: `${colors.secondary}`}}></CardRight>
    </CardContainer>
  </Container>;
};

export default index;
