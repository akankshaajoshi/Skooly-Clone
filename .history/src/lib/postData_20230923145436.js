import axios from 'axios';

export const postUserData = async (index, data) => {
  try {
    await axios.post('http://localhost:8080/users', data);
  } catch (error) {
    console.log(index);
    console.log('error in posting data');
  }
};

export const updateCourseData = async ({ index, data }) => {
  await axios.patch(`http://localhost:8080/courses/${index}`, data);
};
