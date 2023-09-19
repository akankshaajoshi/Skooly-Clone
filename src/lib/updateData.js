import axios from 'axios';

export const updateCourseData = async ( index, data ) => {
  try {
    await axios.patch(`http://localhost:8080/courses/${index}`, data);
  } catch (error) {
    console.log(index);
    console.log('error in patching data');
  }
};
