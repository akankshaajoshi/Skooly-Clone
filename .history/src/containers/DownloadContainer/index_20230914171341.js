import React from 'react';
import styled from 'styled-components';
import { Container } from '@/components/custom/Container';
import { heights, colors } from '@/assets';
import { borderRadius } from '../../assets';

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
gap: 30px;
`;

const Card  = styled.div`
display: flex;
align-items: center;
flex-direction: row;
min-height: 300px;
flex: 1;
border-radius: ${borderRadius.medium}
`

const CardText = styled.div`
flex: 1;
`;

const CardImage = styled.img`
flex: 1;
`;

const index = () => {
  return <Container style={containerStyle}>
    <CardContainer>
        <Card style={{backgroundColor: `${colors.primary}`}}>
Content for card A
        </Card>
        <Card style={{backgroundColor: `${colors.secondary}`}}>
Content for card A

        </Card>
    </CardContainer>
  </Container>;
};

export default index;
