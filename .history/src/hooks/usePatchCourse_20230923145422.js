import axios from 'axios';
import { useMutation } from 'react-query';
import { updateCourseData } from '@/lib/postData';

const usePatchCourse = () => {
  const mutation = useMutation(updateCourseData);
  return { mutation };
};

export default usePatchCourse;
