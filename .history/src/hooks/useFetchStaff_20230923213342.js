import { useQuery } from 'react-query';
import { fetchStaffData } from '@/lib/fetchData';

const useFetchStaff = () => {
  const { data, isLoading, isError, error } = useQuery(
    'staffData',
    fetchStaffData,
  );
  const fakeStaff = [data];
  return { fakeStaff, isLoading, isError, error };
};

export default useFetchStaff;
