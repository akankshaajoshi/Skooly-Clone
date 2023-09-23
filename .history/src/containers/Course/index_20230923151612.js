import { useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import ActionsDropdown from '@/components/custom/ActionsDropdown';
import useFetchCourse from '@/hooks/useFetchCourse';

const LoadingContainer = styled.div`
  width: 100%;
  padding: 30px;
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

function FilterableTable() {
  const { fakeCourses, isLoading, isError, error } = useFetchCourse();
  const [filter, setFilter] = useState({
    courseName: '',
    classType: '',
    category: '',
    pricingOption: '',
    branches: '',
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

  const handleCheckboxChange = (courseName) => {
    if (selectedRows.includes(courseName)) {
      setSelectedRows(selectedRows.filter((name) => name !== courseName));
    } else {
      setSelectedRows([...selectedRows, courseName]);
    }
  };

  const handleDeleteClick = () => {
    setSelectedRows([]);
    setShowDeletePopup(false);
  };

  const filteredCourses = fakeCourses
    ? fakeCourses.filter(
        (course) =>
          course.courseName
            .toLowerCase()
            .startsWith(filter.courseName.toString().toLowerCase()) &&
          course.classType
            .toString()
            .toLowerCase()
            .startsWith(filter.classType.toString().toLowerCase()) &&
          course.category
            .toString()
            .toLowerCase()
            .startsWith(filter.category.toString().toLowerCase()) &&
          course.pricingOption
            .toString()
            .toLowerCase()
            .startsWith(filter.pricingOption.toString().toLowerCase()) &&
          course.branches
            .toString()
            .toLowerCase()
            .startsWith(filter.branches.toString().toLowerCase()),
      )
    : [];

  const { showBoundary } = useErrorBoundary();

  return (
    <FilterableTableContainer>
      <h1>Courses</h1>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
      >
        <Input
          type="text"
          placeholder="Filter by Course Name"
          name="courseName"
          value={filter.courseName}
          onChange={handleFilterChange}
        />

        <Select
          name="category"
          value={filter.category}
          onChange={handleFilterChange}
        >
          <option value="">All Category Types</option>
          <option value="Preschool">Preschool</option>
          <option value="Online School">Online School</option>
        </Select>
        <Select
          name="classType"
          value={filter.classType}
          onChange={handleFilterChange}
        >
          <option value="">All Class Types</option>
          <option value="One to one">One to one</option>
          <option value="Group">Group</option>
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
      {isError && showBoundary(error)}
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
          <Table>
            <TableHead>
              <tr>
                <Th>Select</Th>
                <Th>Course Name</Th>
                <Th>Class Type</Th>
                <Th>Category</Th>
                <Th>Pricing Option</Th>
                <Th>Branches</Th>
                <Th>Action</Th>
              </tr>
            </TableHead>
            <tbody>
              {filteredCourses.map((course, index) => (
                <tr key={index}>
                  <Td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(course.courseName)}
                      onChange={() => handleCheckboxChange(course.courseName)}
                    />
                  </Td>
                  <Td>{course.courseName}</Td>
                  <Td>{course.classType}</Td>
                  <Td>{course.category}</Td>
                  <Td>{course.pricingOption}</Td>
                  <Td>{course.branches}</Td>
                  <Td>
                    <ActionsDropdown data={course} index={index} />
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
