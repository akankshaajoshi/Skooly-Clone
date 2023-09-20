import axios from 'axios';

export const deleteUserData = async (index) => {
  try {
    await axios.delete(`http://localhost:8080/users/${index}`);
  } catch (error) {
    console.log(index);
    console.log('error in deleting data');
  }
};

export const deleteCourseData = async (index) => {
  try {
    await axios.delete(`http://localhost:8080/courses/${index}`);
  } catch (error) {
    console.log(index);
    console.log('error in deleting data');
  }
};

export const deleteStudentData = async (studentIds) => {
  try {
    if (studentIds.length === 0) {
      // No student IDs to delete, do nothing
      return;
    }

    // Assuming you have an endpoint for deleting students
    const deleteRequests = studentIds.map((studentId) => {
      return axios.delete(`http://localhost:8080/students/${studentId}`);
    });

    await Promise.all(deleteRequests);

    console.log('Deleted students with IDs:', studentIds);
  } catch (error) {
    console.error('Error in deleting data:', error);
  }
};
