import axios from 'axios';
import { useErrorBoundary } from 'react-error-boundary';
import { useQuery } from 'react-query';

const fetchCourseData = async () => {
  const response = await axios.get('http://localhost:8080/courses');
  return response.data;
};

const useFetchCourse = () => {
  const { showBoundary } = useErrorBoundary();
  const {
    data: fakeCourses,
    isLoading,
    isError,
    error,
  } = useQuery('courseData', fetchCourseData);
  return { fakeCourses, isLoading, isError, error };
};

export default useFetchCourse;
