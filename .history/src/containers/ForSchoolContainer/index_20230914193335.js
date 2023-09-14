import React from 'react'
import {colors, heights} from "@/assets"
import {Container} from '@/components/custom/Container'
import {Card} from '@/components/custom/Card'
import {CardImage} from '@/components/custom/CardImage'
import {CardText} from '@/components/custom/CardText'
import workspace from '@/assets/images/workspace.png'
import {Heading, Text} from "@/components/base/Typography"
import {Button} from "@/components/base/Button"

const containerStyle = {
  backgroundColor: `${colors.tertiary}`,
  height: `${heights.xSmall}`,
  paddingTop: "30px"
};

const cardImageStyle = {
  minHeight: "55vh",
  minWidth: "45vw",
  paddingBottom: "0px",
  flex: "1"
}

const index = () => {
  return (
    <Container style={containerStyle}>
      <Card>
        <CardText style={{color: "white", flex: "1", paddingLeft: "40px", paddingRight: "30px"}}>
          <Heading>
          #1 Software to run any type of school, try it for free
          </Heading>
          <Text> Supercharge your business with the world’s topmost school platform. Go online for enrollments, communication, billing & payments, attendance, bookings & class scheduling, live classes etc. Affordable, suitable for schools, centres of any sizes. </Text>
        <Button style={{marginTop: "20px", backgroundColor: "blue"}}>Learn more</Button>
        </CardText>
        <CardImage src={workspace} style={cardImageStyle}/>
      </Card>
    </Container>
  )
}

export default index