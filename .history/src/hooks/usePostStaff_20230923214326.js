import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';
import { postStaffData } from '@/lib/postData';

const usePostStaff = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postStaffData,
  });
  return { mutation };
};

export default usePostStaff;
