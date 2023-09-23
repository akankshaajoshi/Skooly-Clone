import { useMutation } from 'react-query';
import { updateCourseData } from '@/lib/patchData';
import { useQueryClient } from 'react-query';

const usePatchCourse = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateCourseData,
    onSuccess: () => queryClient.invalidateQueries('courseData'),
  });
  return { mutation };
};

export default usePatchCourse;
