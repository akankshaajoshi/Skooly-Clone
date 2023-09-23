import axios from 'axios';
import { useQuery } from 'react-query';
import { useErrorHandler } from 'react-error-boundary';

const useFetchCourse = () => {
  const handleError = useErrorHandler();
  async function fetchCourseData() {
    try {
      const response = await axios.get('http://localhost:8080/courses');
      return response.data;
    } catch (err) {
      handleError(err);
      return 1;
    }
  }
  const {
    data: fakeCourses,
    isLoading,
    isError,
    error,
  } = useQuery('courseData', fetchCourseData);
  return { fakeCourses, isLoading, isError, error };
};

export default useFetchCourse;
