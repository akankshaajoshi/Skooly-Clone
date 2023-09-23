import { useQuery } from 'react-query';
import { fetchCourseData } from '@/lib/fetchData';

const useFetchCourse = () => {
  const {
    data: fakeCourses,
    isLoading,
    isError,
    error,
  } = useQuery('courseData', fetchCourseData);
  return { fakeCourses, isLoading, isError, error };
};

export default useFetchCourse;
