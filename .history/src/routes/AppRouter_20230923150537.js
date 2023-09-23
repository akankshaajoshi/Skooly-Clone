import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import Signup from '@/pages/Signup';
import Login from '@/pages/Login';
import UserOnboarding from '@/pages/UserOnboarding';
import Preschool from '@/pages/Preschool';
import Dashboard from '@/pages/Dashboard';
import Details from '@/pages/Details';
import { AuthContext } from '@/contexts/AuthContext';
import DashboardContainer from '@/containers/DashboardContainer';
import ScheduleContainer from '@/containers/ScheduleContainer';
import EnrollStudentContainer from '@/containers/EnrollStudentContainer';
import AddStudentContainer from '@/containers/AddStudentContainer';
import Staff from '@/containers/Staff';

import Course from '@/containers/Course';

function AppRouter() {
  const { loginState } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />}>
        {' '}
      </Route>
      <Route path="/register-school" element={<UserOnboarding />} />
      <Route path="/register-school/preschool" element={<Preschool />} />
      <Route
        path="/register-school/preschool/dashboard"
        element={
          loginState ? (
            <Dashboard children={<DashboardContainer />} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/register-school/preschool/dashboard/details"
        element={
          loginState ? <Details children={<Details />} /> : <Navigate to="/" />
        }
      />
      <Route
        path="/register-school/preschool/dashboard/course"
        element={
          loginState ? <Dashboard children={<Course />} /> : <Navigate to="/" />
        }
      />
      <Route
        path="/register-school/preschool/dashboard/schedule"
        element={
          loginState ? (
            <Dashboard children={<ScheduleContainer />} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/register-school/preschool/dashboard/student"
        element={
          loginState ? (
            <Dashboard children={<EnrollStudentContainer />} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/register-school/preschool/dashboard/addstudent"
        element={
          loginState ? (
            <Dashboard children={<AddStudentContainer />} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/register-school/preschool/dashboard/addstaff"
        element={
          loginState ? <Dashboard children={<Staff />} /> : <Navigate to="/" />
        }
      />
    </Routes>
  );
}

export default AppRouter;
