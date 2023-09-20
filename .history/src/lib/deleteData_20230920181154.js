import axios from 'axios';

export const deleteUserData = async (index, data) => {
  try {
    await axios.delete(`http://localhost:8080/users/${index}`, data);
  } catch (error) {
    console.log(index);
    console.log('error in patching data');
  }
};

export const deleteCourseData = async (index, data) => {
  try {
    await axios.delete(`http://localhost:8080/courses/${index}`, data);
  } catch (error) {
    console.log(index);
    console.log('error in patching data');
  }
};
export const deleteStudentData = async (index, data) => {
  try {
    await axios.delete(`http://localhost:8080/students/${index}`, data);
  } catch (error) {
    console.log(index);
    console.log('error in patching data');
  }
};
