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
    // Assuming each studentId is unique and represents a student's record
    for (const studentId of studentIds) {
      await axios.delete(`http://localhost:8080/students/${studentId}`);
      return;
     
    }
  } catch (error) {
    console.error('Error in deleting data:', error);
  }
};