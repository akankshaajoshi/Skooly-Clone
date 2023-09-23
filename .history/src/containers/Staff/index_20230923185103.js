import { useState, useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
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
  {
    isLoading && setData([fakeStaff]);
  }
  const [data, setData] = useState([fakeStaff]);
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

  return (
    <Container>
      {!isLoading && !isError && (
        <table {...getTableProps()}>
          {error && showBoundary(error)}
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th key={column.id} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td key={row.cells.id} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Container>
  );
}

export default Index;
