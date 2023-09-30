import React from 'react';
import styled from 'styled-components';
import { timelineData } from '@/utils/constants';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimelineEvent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-bottom: 20px;
  min-height: 150px;
`;

const TimelineDot = styled.div`
  width: 24px;
  height: 24px;
  background-color: #007bff; /* Blue color */
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  margin-right: 16px;
  position: relative;
`;

const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
`;

interface TimelineEventProps {
  event: [string, string];
}

function Timeline() {
  return (
    <TimelineContainer>
      {timelineData.map((event, index) => (
        <TimelineEvent key={index}>
          <TimelineDot>{event[0]}</TimelineDot>
          <TimelineContent>
            <h3>{event[1]}</h3>
          </TimelineContent>
        </TimelineEvent>
      ))}
    </TimelineContainer>
  );
}

function Index() {
  return (
    <div>
      <Timeline />
    </div>
  );
}

export default Index;
