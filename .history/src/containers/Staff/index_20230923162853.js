import { useMemo } from 'react';
import useFetchStaff from '@/hooks/useFetchStaff';
import { useTable } from 'react-table';

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
  const table = useTable({ columns, fakeStaff });

  return <div>index</div>;
}

export default Index;
