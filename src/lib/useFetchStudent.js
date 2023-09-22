import axios from 'axios';
import { useQuery } from 'react-query';

const fetchStudentData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/students');
    return response.data;
  } catch (error) {
    return 'Error in fetching data';
  }
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
