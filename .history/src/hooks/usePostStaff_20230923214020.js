import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';

import { postStaffData } from '@/lib/postData';

const usePostStaff = () => {
  queryClient.invalidateQueries();

  const mutation = useMutation(postStaffData);
  return { mutation };
};

export default usePostStaff;
