import axios from 'axios';

export const fetchApiData = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/users`); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchCourseData = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/courses`); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchStudentData = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/students`); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};


