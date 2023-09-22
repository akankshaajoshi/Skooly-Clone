import axios from 'axios';
import { useMutation } from 'react-query';

const updateCourseData = async ({ index, data }) => {
  try {
    await axios.patch(`http://localhost:8080/courses/${index}`, data);
  } catch (error) {
    throw new error();
  }
};

const usePatchCourse = () => {
  const mutation = useMutation(updateCourseData);
  return { mutation };
};

export default usePatchCourse;
