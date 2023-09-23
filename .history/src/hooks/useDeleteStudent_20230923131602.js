import { useMutation } from 'react-query'; // Import the necessary library for mutations
import axios from 'axios';

const deleteStudentData = async (studentIds) => {
  await axios.delete(`http://localhost:8080/students/${studentIds}`);
  console.log(`Deleted students with IDs: ${studentIds.join(', ')}`);
  return true;
};

const useDeleteStudent = () => {
  const mutation = useMutation(deleteStudentData);
  return { mutation };
};

export default useDeleteStudent;
