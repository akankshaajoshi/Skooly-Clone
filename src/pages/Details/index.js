import React from 'react'
import styled from 'styled-components'
import {details} from "@/utils/constants"
import Navbar from '@/containers/DashboardContainer/Navbar';

const index = () => {
    const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;


// Create a styled inner container component
const InnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid #ccc;
`;

// Create a styled card component
const Card = styled.div`
  display: flex;
  width: 90%;
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;

// Create a styled content section for the card
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
  return (
<Container>
    <Navbar></Navbar>
    <InnerContainer>
       {details.map((ele)=>{return (<Card>
            <Content>
                <h3>{ele.header}</h3>
                <p>{ele.content}</p>
            </Content>
        </Card>)})}
    </InnerContainer>
</Container>  
  )
}

export default index