import axios from 'axios';

export const updateUserData = async (index, data) => {
  try {
    await axios.patch(`http://localhost:8080/users/${index}`, data);
  } catch (error) {
    console.log(index);
    console.log('error in patching data');
  }
};

export const updateCourseData = async ({ index, data }) => {
  await axios.patch(`http://localhost:8080/courses/${index}`, data);
};

export const updateStaffData = async ({ index, data }) => {
  await axios.patch(`http://localhost:8080/courses/${index}`, data);
};
