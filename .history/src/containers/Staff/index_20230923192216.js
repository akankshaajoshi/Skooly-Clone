import { useEffect, useMemo, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useTable } from 'react-table';
import styled from 'styled-components';
import useFetchStaff from '@/hooks/useFetchStaff';

const Container = styled.div`
  width: 100%; /* Ensure the container spans the full width */
  padding: 30px;
  justify-items: flex-end;
  align-items: center;
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

const Tr = styled.tr`
  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
`;

const Button = styled.button`
  border: none;
  padding: 20px;
  background-color: lightblue;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;

function Index() {
  const { fakeStaff, isLoading, isError, error } = useFetchStaff();
  const data = useMemo(() => fakeStaff, []);
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Designation',
        accessor: 'designation',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Billing',
        accessor: 'billing',
      },
    ],
    [],
  );

  const { showBoundary } = useErrorBoundary();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleSubmit = () => {
    console.log('submitted!');
  };
  return (
    <Container>
      <Button onClick={handleSubmit}>Add staff</Button>
      {!isLoading && !isError && (
        <Table {...getTableProps()}>
          {error && showBoundary(error)}
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th key={column.id} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </Th>
                ))}
              </Tr>
            ))}
          </TableHead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <Tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td key={row.cells.id} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Index;
