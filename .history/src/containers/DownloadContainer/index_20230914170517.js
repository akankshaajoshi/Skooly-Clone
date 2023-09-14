import React from 'react';
import styled from 'styled-components';
import { Container } from '@/components/custom/Container';
import { heights, colors } from '@/assets';

const containerStyle = {
  backgroundColor: `${colors.white}`,
  height: `${heights.small}`,
};

const cardContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-top: 10px;
`;

const cardLeft  = styled.div`
display: flex;
align-items: center;
flex-direction: row;
`

const cardRight = styled.div`
display: flex;
align-items: center;
flex-direction: center;
`

const index = () => {
  return <Container style={containerStyle}>

  </Container>;
};

export default index;
