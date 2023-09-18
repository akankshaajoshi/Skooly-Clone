import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "@/pages/Home"
import Signup from "@/pages/Signup"
import Login from "@/pages/Login"
import UserOnboarding from "@/pages/UserOnboarding";
import Preschool from "@/pages/Preschool"
import Dashboard from '@/pages/Dashboard';
import ProtectedRoute from "@/routes/ProtectedRoute"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/login" element={<Login/>}/>
      <Route path='/register-school' element={<UserOnboarding/>}></Route>
      <Route path="/register-school/preschool" element={<Preschool/>}/>
      <Route path="/register-school/preschool/dashboard" element={
        <ProtectedRoute>
      <Dashboard/>
      </ProtectedRoute>
    }/>
    </Routes>
  )
}

export default AppRouter