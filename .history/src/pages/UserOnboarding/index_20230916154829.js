import React from 'react';
import styled from 'styled-components';
import { Container } from '@/components/custom/Container';
import { Card } from '@/components/custom/Card';

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const index = () => {
  return (
    <Container>
      <InnerContainer>
        <Card>
            
        </Card>
      </InnerContainer>
    </Container>
  );
};

export default index;
