import { useMemo } from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import useFetchStaff from '@/hooks/useFetchStaff';

const Container = styled.div`
  width: 100%; /* Ensure the container spans the full width */
  padding: 30px;
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

function Index() {
  const { fakeStaff, isLoading, isError, error } = useFetchStaff();
  const columns = useMemo(
    () => [
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
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, fakeStaff });

  return (
    <Container>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </tr>;
          ))}
        </TableHead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Index;
