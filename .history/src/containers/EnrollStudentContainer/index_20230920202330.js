import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchStudentData } from '@/lib/fetchData';
import { deleteStudentData } from '@/lib/deleteData';
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
  display: flex;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

const DangerButton = styled.button`
  background-color: red;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;
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
  const { data: fakeStudents, isLoading, isError, error } = useQuery('studentData', fetchStudentData);
  const [filter, setFilter] = useState({
    name: '',
    gender: '',
    ageGroup: '',
    status: '',
    studentId: 'TESSE' + faker.number.int(),
    dob: '',
    mother: { email: '', number: '' },
    father: { email: '', number: '' },
  });
  const [selectedRows, setSelectedRows] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleCheckboxChange = (studentId) => {
    if (selectedRows.includes(studentId)) {
      setSelectedRows(selectedRows.filter((id) => id !== studentId));
    } else {
      setSelectedRows([...selectedRows, studentId]);
    }
  };

  const handleDeleteClick = (studentId) => {
    const updatedStudents = fakeStudents.filter((student) => student.id !== studentId);
    deleteStudentData([studentId]);

    setFilter({
      ...filter,
      name: '',
    }); // Reset the filter to clear the search results
    setSelectedRows([]);
    setShowDeletePopup(false);
  };

  const filteredStudents = fakeStudents
    ? fakeStudents.filter((student) => {
        return (
          student.name.toLowerCase().startsWith(filter.name.toString().toLowerCase()) &&
          student.status.toLowerCase().startsWith(filter.status.toString().toLowerCase()) &&
          student.gender.toString().toLowerCase().startsWith(filter.gender.toString().toLowerCase())
        );
      })
    : [];

  return (
    <FilterableTableContainer>
      <h1>Students</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Input
          type="text"
          placeholder="Filter by Name"
          name="courseName"
          value={filter.name}
          onChange={handleFilterChange}
        />
        <Link to="/register-school/preschool/dashboard/addstudent">
          <Button>Add Student</Button>
        </Link>
      </div>
      {isLoading && <LoadingContainer>Loading...</LoadingContainer>}
      {isError && <ErrorContainer>Error: {error.message}</ErrorContainer>}
      {!isLoading && !isError && (
        <>
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
                    <DeleteButton onClick={() => handleDeleteClick(student.id)}>Delete</DeleteButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </FilterableTableContainer>
  );
}

export default FilterableTable;
