import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
import Home from "@/pages/Home"
import Signup from "@/pages/Signup"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/> 
    </Routes>
  )
}

export default AppRouter