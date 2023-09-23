import useFetchStaff from '@/hooks/useFetchStaff';
import { useMemo } from 'react';

function Index() {
  const { fakeStaff, isLoading, isError, error } = useFetchStaff();
  const columns = useMemo(()=>{
    {
      Header: 'ID',
      Accessor: 'name'
    },    {
      Header: 'ID',
      Accessor: 'name'
    },
    
  })
  return <div>index</div>;
}

export default Index;
