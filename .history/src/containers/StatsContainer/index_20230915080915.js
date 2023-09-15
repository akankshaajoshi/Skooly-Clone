import React, { useState } from 'react'
import styled from 'styled-components'
import {Container} from "@/components/custom/Container"
import {CardText} from "@/components/custom/CardText"
import {Heading, Text} from "@/components/base/Typography"



const Index = () => {
    const [count, setCount] = useState(0);
  return (
    <Container>
        <CardText>
            <Heading>
            No.1 platform enabling happier learning journeys
            </Heading>
            <Text>
            Skooly connects schools, educators & learners, enables easy collaboration to acheive their best - which is why we are trusted by thousands of schools worldwide
                </Text>
        </CardText>
        <Container>
            </Container>
        </Container>
  )
}

export default Index