import { useQuery } from 'react-query';
import { fetchStudentData } from '@/lib/fetchData';

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
