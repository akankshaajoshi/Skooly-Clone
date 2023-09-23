import { useMutation } from 'react-query';
import { updateCourseData } from '@/lib/patchData';

const usePatchCourse = () => {
  const mutation = useMutation(updateCourseData);
  return { mutation };
};

export default usePatchCourse;
