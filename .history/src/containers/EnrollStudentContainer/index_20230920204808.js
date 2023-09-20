import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchStudentData } from '@/lib/fetchData';
import axios from 'axios';

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

const DeleteButton = styled.button`
  background-color: red;
  color: #fff;
  padding: 5px 10px;
  border: none;
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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  for (let obj in fakeStudents){
    console.log(obj);
  }
  const handleDeleteClick = async (studentId) => {
    try {
      // // Send a DELETE request to your API to delete the student by ID
      // await axios({
      //   method: 'DELETE',
      //   url: 'http://localhost:8080/students/' + studentId
      // });; // Replace with your API endpoint

      // // Remove the deleted student from the local state
      // setFilter({
      //   ...filter,
      //   name: '',
      // });

      // // You should also refetch the data here to reflect the updated list
      // // Example:
      // // refetchStudentData();
      // fetchStudentData();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
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
                <Th>Delete</Th>
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
