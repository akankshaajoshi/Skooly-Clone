import axios from 'axios';
import { useQuery } from 'react-query';
import { useErrorBoundary } from 'react-error-boundary';


const fetchCourseData = async () => {
  const { showBoundary } = useErrorBoundary();
  try {
    const response = await axios.get('http://localhost:8080/courses');
    return response.data;
  } catch (err) {
    showBoundary(err);
  }
};

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
