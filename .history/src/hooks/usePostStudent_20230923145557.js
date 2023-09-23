import { useMutation } from 'react-query';
import { postStudentData } from '@/lib/postData';

const usePostStudent = () => {
  const mutation = useMutation(postStudentData);
  return { mutation };
};

export default usePostStudent;
