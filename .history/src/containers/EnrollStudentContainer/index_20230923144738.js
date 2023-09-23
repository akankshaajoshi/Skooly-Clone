import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useErrorBoundary } from 'react-error-boundary';
import useFetchStudent from '@/hooks/useFetchStudent';
import useDeleteStudent from '../../hooks/useDeleteStudent';
import Loader from '@/components/base/Loader';

const { faker } = require('@faker-js/faker');

const FilterableTableContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-right: 130px;
`;

const Table = styled.table`
  width: 100%;
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

const Select = styled.select`
  padding: 6px;
`;

const Button = styled.button`
  padding: 8px;
  background: blue;
  color: white;
  border: none;
  cursor: pointer;
  min-width: 120px;

  &:hover {
    background: black;
    color: white;
  }
`;

function FilterableTable() {
  const { fakeStudents, isLoading, isError, error } = useFetchStudent();
  const { mutation } = useDeleteStudent();
  const { showBoundary } = useErrorBoundary();

  const [filter, setFilter] = useState({
    name: '',
    gender: '',
    ageGroup: '',
    status: '',
    studentId: `TESSE${faker.number.int()}`,
    dob: '',
    mother: { email: '', number: '' },
    father: { email: '', number: '' },
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleDeleteClick = async (studentId) => {
    setFilter({
      ...filter,
      name: '',
    });
    await mutation.mutateAsync(studentId);
    console.log('deleted', studentId);
  };

  const filteredStudents = fakeStudents
    ? fakeStudents.filter(
        (student) =>
          student.name
            .toLowerCase()
            .startsWith(filter.name.toString().toLowerCase()) &&
          student.status
            .toLowerCase()
            .startsWith(filter.status.toString().toLowerCase()) &&
          student.gender
            .toString()
            .toLowerCase()
            .startsWith(filter.gender.toString().toLowerCase()),
      )
    : [];

  return (
    <FilterableTableContainer>
      <h1>Enroll students: </h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <Input
          type="text"
          placeholder="Filter by Name"
          name="name"
          value={filter.name}
          onChange={handleFilterChange}
        />
        <Link to="/register-school/preschool/dashboard/addstudent">
          <Button>Add Student</Button>
        </Link>
        <Select
          name="status"
          value={filter.status}
          onChange={handleFilterChange}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="New">New</option>
          <option value="Waitlisted">Waitlisted</option>
        </Select>

        <Select
          name="gender"
          value={filter.gender}
          onChange={handleFilterChange}
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>
        <Select
          name="branches"
          value={filter.branches}
          onChange={handleFilterChange}
        >
          <option value="">All Branches</option>
          <option value="Main">Main</option>
          <option value="Other">Other</option>
        </Select>
      </div>
      {isLoading && 'Loading...'}
      {isError && showBoundary(error)}
      {!isLoading && !isError && (
        <Table>
          <TableHead>
            <tr>
              <Th>Student Id</Th>
              <Th>Name</Th>
              <Th>Gender</Th>
              <Th>Age Group</Th>
              <Th>Status</Th>
              <Th>Date of Birth</Th>
              <Th>Action</Th>
            </tr>
          </TableHead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <Td>{student.studentId}</Td>
                <Td>{student.name}</Td>
                <Td>{student.gender}</Td>
                <Td>{student.ageGroup}</Td>
                <Td>{student.status}</Td>
                <Td>{student.dob}</Td>
                <Td>
                  <Button
                    onClick={() => handleDeleteClick(student.id)}
                    style={{ backgroundColor: 'red', color: '#fff' }}
                  >
                    Delete
                  </Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </FilterableTableContainer>
  );
}

export default FilterableTable;
