import { useMutation } from 'react-query'; // Import the necessary library for mutations

// Define your mutation function
const deleteStudentData = async (studentIds) => {
  try {
    // Replace this with your actual API call or database operation to delete students
    await fetch(`http://localhost:8080/students/${studentIds}`, {
      method: 'DELETE',
    });
    // Simulate a successful deletion
    console.log(`Deleted students with IDs: ${studentIds.join(', ')}`);
    return true;
  } catch (error) {
    // Handle errors here
    console.error('Error deleting students:', error);
    throw new Error('Failed to delete students');
  }
};

const useDeleteStudent = () => {
  const mutation = useMutation(deleteStudentData);
  return { mutation };
};

export default useDeleteStudent;
