import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import Signup from '@/pages/Signup';
import Login from '@/pages/Login';
import UserOnboarding from '@/pages/UserOnboarding';
import Preschool from '@/pages/Preschool';
import Dashboard from '@/pages/Dashboard';
import Details from "@/pages/Details";
import { AuthContext } from '@/contexts/AuthContext';

const AppRouter = () => {
  const { loginState } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} > </Route>
        <Route path="/register-school" element={<UserOnboarding />}/>
        <Route path="/register-school/preschool" element={<Preschool />} />
        <Route path="/register-school/preschool/dashboard" element={loginState ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/register-school/preschool/dashboard/details" element={loginState ? <Details/> : <Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
