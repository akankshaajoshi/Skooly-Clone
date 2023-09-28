import { useMutation, useQueryClient } from 'react-query';

import { postStaffData } from '@/lib/postData';

const usePostStaff = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postStaffData,
    onSuccess: () => {
      queryClient.invalidateQueries('staffData');
    },
  });
  return { mutation };
};

export default usePostStaff;
