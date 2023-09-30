import { useQuery } from 'react-query';
import { fetchStaffData } from '@/lib/fetchData';

const useFetchStaff = async () => {
  const {
    data: fakeStaffs,
    isLoading,
    isError,
    error,
  } = useQuery('staffData', fetchStaffData);
  return { fakeStaffs, isLoading, isError, error };
};

export default useFetchStaff;
