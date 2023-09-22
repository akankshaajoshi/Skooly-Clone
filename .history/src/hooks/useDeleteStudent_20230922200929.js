import axios from 'axios';
import { useMutation } from 'react-query';

export const deleteStudentData = async (studentIds) => {
  try {
    if (studentIds.length === 0) {
      return;
    }

    const deleteRequests = studentIds.map((studentId) =>
      axios.delete(`http://localhost:8080/students/${studentId}`),
    );

    await Promise.all(deleteRequests);
    console.log('Deleted students with IDs:', studentIds);
  } catch (error) {
    console.error('Error in deleting data:', error);
  }
};
