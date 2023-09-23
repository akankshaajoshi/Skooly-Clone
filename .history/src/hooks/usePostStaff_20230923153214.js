import { postStaffData } from '@/lib/postData';
import { useMutation } from 'react-query';

const usePostStaff = () => {
  const mutation = useMutation(postStaffData);
  return { mutation };
};
