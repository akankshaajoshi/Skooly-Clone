import { useMutation } from 'react-query';
import { postStaffData } from '@/lib/postData';

const usePostStaff = () => {
  const mutation = useMutation(postStaffData);
  return { mutation };
};
