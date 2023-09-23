import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';
import { postStaffData } from '@/lib/postData';

const usePostStaff = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postStaffData,
    mutationKey: 'staffData',
  });
  queryClient.invalidateQueries('staffData');
  return { mutation };
};

export default usePostStaff;
