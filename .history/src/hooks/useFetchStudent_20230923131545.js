import axios from 'axios';
import { useQuery } from 'react-query';

const fetchStudentData = async () => {
  const response = await axios.get('http://localhost:8080/students');
  return response.data;
};

const useFetchStudent = () => {
  const {
    data: fakeStudents,
    isLoading,
    isError,
    error,
  } = useQuery('studentData', fetchStudentData);
  return { fakeStudents, isLoading, isError, error };
};

export default useFetchStudent;
