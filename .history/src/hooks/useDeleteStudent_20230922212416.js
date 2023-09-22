import { useMutation } from 'react-query'; // Import the necessary library for mutations
import axios from 'axios';

const deleteStudentData = async (studentIds) => {
  try {
    await axios.delete(`http://localhost:8080/students/${studentIds}`);
    console.log(`Deleted students with IDs: ${studentIds.join(', ')}`);
    return true;
  } catch (error) {
    console.error('Error deleting students:', error);
    throw new Error('Failed to delete students');
  }
};

const useDeleteStudent = () => {
  const mutation = useMutation(deleteStudentData);
  return { mutation };
};

export default useDeleteStudent;
