import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deleteStudentData } from '@/lib/deleteData';
import useFetchStudent from '@/hooks/useFetchStudent';
import useDeleteStudent from '../../hooks/useDeleteStudent';

const { faker } = require('@faker-js/faker');

const LoadingContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

const ErrorContainer = styled.div`
  width: 100%;
  padding: 30px;
  color: red;
`;

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
    try {
      await mutation.mutateAsync(studentId);
      console.log('deleted', studentId);
    } catch (error) {
      console.error('Error deleting students:', error);
    }
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
      {isLoading && <LoadingContainer>Loading...</LoadingContainer>}
      {isError && (
        <ErrorContainer>
          Error:
          {error.message}
        </ErrorContainer>
      )}
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
