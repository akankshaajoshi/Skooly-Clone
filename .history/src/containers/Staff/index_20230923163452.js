import { useMemo } from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import useFetchStaff from '@/hooks/useFetchStaff';

const Container = styled.div`
  width: 100%; /* Ensure the container spans the full width */
  padding: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-right: 130px;
`;

const Table = styled.table`
  width: 100%; /* Make the table span the full width */
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const DeletePopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const DeleteButton = styled.button`
  background-color: red;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

const DangerButton = styled.button`
  background-color: red;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 6px;
`;

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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, fakeStaff });

  return (
    <Container>
      <Table {...getTableProps}>
        {headerGroups.map((headerGroup) => {
          <tr {...headerGroup.headerGroupProps}></tr>;
        })}
        <tbody></tbody>
      </Table>
    </Container>
  );
}

export default Index;
