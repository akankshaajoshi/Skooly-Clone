import axios from 'axios';

export const postUserData = async (index, data) => {
  try {
    await axios.post('http://localhost:8080/users', data);
  } catch (error) {
    console.log(index);
    console.log('error in posting data');
  }
};

export const updateCourseData = async (index, data) => {
  try {
    await axios.post('http://localhost:8080/courses', data);
  } catch (error) {
    console.log(index);
    console.log('error in posting data');
  }
};

export const postStudentData = async (index, data) => {
  try {
    await axios.post('http://localhost:8080/students', data);
  } catch (error) {
    console.log(index);
    console.log('error in posting data');
  }
};
