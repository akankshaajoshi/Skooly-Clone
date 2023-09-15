import React from 'react'
import {Container} from "@/components/custom/Container"
import {Navbar} from "@/components/shared/Navbar"
import HeroContainer from "@/containers/HeroContainer"
import DownloadContainer from "@/containers/DownloadContainer"
import ForSchoolContainer from "@/containers/ForSchoolContainer"
import SchoolTypeContainer from "@/containers/SchoolTypeContainer"
import StatsContainer from "@/containers/StatsContainer/Index"
import Footer from "@/components/shared/Footer"

const index = () => {
  return (
    <Container>
    <Navbar/>
    <HeroContainer/>
    <DownloadContainer/>
    <ForSchoolContainer/>
    <SchoolTypeContainer/>
    <StatsContainer/>
    <Footer/>
  </Container>
  )
}

export default index