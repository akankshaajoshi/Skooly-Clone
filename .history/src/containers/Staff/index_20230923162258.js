import { useMemo } from 'react';
import useFetchStaff from '@/hooks/useFetchStaff';

function Index() {
  const { fakeStaff, isLoading, isError, error } = useFetchStaff();
  const columns = useMemo(() => [
    {
      Header: 'ID',
      Accessor: 'id',
    },
    {
      Header: 'Name',
      Accessor: 'name',
    },
    {
      Header: 'Email',
      Accessor: 'email',
    },
    {
      Header: 'Phone',
      Accessor: 'phone',
    },
    {
      Header: 'Designation',
      Accessor: 'designation',
    },
    {
      Header: 'Location',
      Accessor: 'location',
    },
    {
      Header: 'Role',
      Accessor: 'role',
    },
    {
      Header: 'Billing',
      Accessor: 'billing',
    },
  ]);
  return <div>index</div>;
}

export default Index;
