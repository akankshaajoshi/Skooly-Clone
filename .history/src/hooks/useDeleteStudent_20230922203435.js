import axios from 'axios';
import { useMutation } from 'react-query';

export const deleteStudentData = async (studentIds) => {
  try {
    for (const studentId of studentIds) {
      axios.delete(`http://localhost:8080/students/${studentId}`);
    }
    console.log('Deleted students with IDs:', studentIds);
  } catch (error) {
    console.error('Error in deleting data:', error);
  }
};

const useDeleteStudent = () => {
  const mutation = useMutation(deleteStudentData);
  return { mutation };
};

export default useDeleteStudent;
