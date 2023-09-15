import React from 'react';
import styled from 'styled-components';
import Container from '@/components/custom/Contanier';

const Info = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row
`;

const SmallContainers = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column
`;


const index = () => {
  return (
    <Container>
      <Info>


      </Info>
    </Container>
  );
};

export default index;
