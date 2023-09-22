import React, { useState } from 'react';
import styled from 'styled-components';

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

// Define the initial fakeStudents data
const initialFakeStudents = [
  {
    id: 1,
    studentId: 'TESSE001',
    name: 'John Doe',
    gender: 'Male',
    ageGroup: '18-24',
    status: 'Active',
    dob: '2000-01-01',
  },
  {
    id: 2,
    studentId: 'TESSE002',
    name: 'Jane Smith',
    gender: 'Female',
    ageGroup: '18-24',
    status: 'Active',
    dob: '2000-02-15',
  },
  // Add more students as needed
];

function FilterableTable() {
  const [fakeStudents, setFakeStudents] = useState(initialFakeStudents);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({
    name: '',
    gender: '',
    ageGroup: '',
    status: '',
    studentId: '',
    dob: '',
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

  const handleDeleteClick = async () => {
    if (selectedRows.length === 0) {
      return;
    }

    try {
      // Simulate deletion (replace this with your actual deletion logic)
      const updatedStudents = fakeStudents.filter(
        (student) => !selectedRows.includes(student.id),
      );
      setFakeStudents(updatedStudents);

      setSelectedRows([]);
      setShowDeletePopup(false);
    } catch (error) {
      console.error('Error deleting students:', error);
    }
  };

  return (
    <FilterableTableContainer>
      <h1>Student Table:</h1>
      <table>
        <TableHead>
          <tr>
            <Th>Select</Th>
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
          {fakeStudents.map((student) => (
            <tr key={student.id}>
              <Td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(student.id)}
                  onChange={() => handleCheckboxChange(student.id)}
                />
              </Td>
              <Td>{student.studentId}</Td>
              <Td>{student.name}</Td>
              <Td>{student.gender}</Td>
              <Td>{student.ageGroup}</Td>
              <Td>{student.status}</Td>
              <Td>{student.dob}</Td>
              <Td>
                <button
                  onClick={() => setShowDeletePopup(true)}
                  style={{
                    backgroundColor: 'red',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && <LoadingContainer>Loading...</LoadingContainer>}
      {isError && (
        <ErrorContainer>
          Error:
          {error.message}
        </ErrorContainer>
      )}
      {!isLoading && !isError && (
        <>
          <DeletePopup show={showDeletePopup}>
            <p>Are you sure you want to delete the selected row(s)?</p>
            <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>
          </DeletePopup>
          {selectedRows.length > 0 && (
            <DangerButton onClick={() => setShowDeletePopup(true)}>
              Delete Selected
            </DangerButton>
          )}
        </>
      )}
    </FilterableTableContainer>
  );
}

export default FilterableTable;
