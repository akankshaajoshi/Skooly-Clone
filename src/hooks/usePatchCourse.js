import { useMutation, useQueryClient } from 'react-query';

import { updateCourseData } from '@/lib/patchData';

const usePatchCourse = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateCourseData,
    onSuccess: () => queryClient.invalidateQueries('courseData'),
  });
  return { mutation };
};

export default usePatchCourse;
