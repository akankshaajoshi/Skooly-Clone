import { useQuery } from 'react-query';
import { fetchStaffData } from '@/lib/fetchData';

const useFetchStaff = () => {
  const {
    data: fakeStaff,
    isLoading,
    isError,
    error,
  } = useQuery('staffData', fetchStaffData);
  console.log('Inside hook: ' + data);
  return { fakeStaff, isLoading, isError, error };
};

export default useFetchStaff;
