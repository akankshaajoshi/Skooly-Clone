import { fetchStaffData } from '@/lib/fetchData';
import { useQuery } from 'react-query';

const useFetchStaff = () => {
  const {
    data: fakeStaff,
    isLoading,
    isError,
    error,
  } = useQuery('staffData', fetchStaffData);
  return { fakeStaff, isLoading, isError, error };
};
