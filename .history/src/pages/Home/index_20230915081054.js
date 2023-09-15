import React from 'react'
import {Container} from "@/components/custom/Container"
import HeroContainer from "@/containers/HeroContainer"
import DownloadContainer from "@/containers/DownloadContainer"
import ForSchoolContainer from "@/containers/ForSchoolContainer"
import SchoolTypeContainer from "@/containers/SchoolTypeContainer"
import StatsContainer from "@/containers/StatsContainer/Index"

const index = () => {
  return (
    <Container>
    <HeroContainer/>
    <DownloadContainer/>
    <ForSchoolContainer/>
    <SchoolTypeContainer/>
    <StatsContainer/>
  </Container>
  )
}

export default index