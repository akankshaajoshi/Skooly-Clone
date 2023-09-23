import axios from 'axios';
import { useErrorBoundary } from 'react-error-boundary';
import { useQuery } from 'react-query';

const useFetchCourse = () => {
  const { showBoundary } = useErrorBoundary();
  async function fetchCourseData() {
    const response = await axios.get('http://localhost:8080/courses');
    return response.data;
  }
  const {
    data: fakeCourses,
    isLoading,
    isError,
    error,
  } = useQuery('courseData', fetchCourseData);
  return { fakeCourses, isLoading, isError, showBoundary(error): errorComp };
};

export default useFetchCourse;
