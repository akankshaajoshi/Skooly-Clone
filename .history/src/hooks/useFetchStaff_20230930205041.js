import { useQuery } from 'react-query';
import { fetchStaffData } from '@/lib/fetchData';

const useFetchStaff = () => {
  const { data, isLoading, isError, error } = useQuery(
    'staffData',
    fetchStaffData,
  );
  console.log('Inside hook: ', data);
  return { data, isLoading, isError, error };
};

export default useFetchStaff;
