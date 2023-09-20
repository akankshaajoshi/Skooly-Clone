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

export const deleteStudentData = async (studentId) => {
  try {
    for(let id in studentId){
      const response = await axios.delete(`http://localhost:8080/students/${id}`);
      if (response.status === 200) {
        console.log(`Deleted student with ID: ${id}`);
      } else {
        console.error(`Failed to delete student with ID: ${id}`);
      }

    }

  } catch (error) {
    console.error('Error in deleting data:', error);
  }
};
