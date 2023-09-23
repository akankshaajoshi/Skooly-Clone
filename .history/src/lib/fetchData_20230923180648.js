import axios from 'axios';

export const fetchApiData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/users');
    return response.data;
  } catch (error) {
    return 'Error in fetching data';
  }
};

export async function fetchCourseData() {
  const response = await axios.get('http://localhost:8080/courses');
  return response.data;
}

export const fetchStudentData = async () => {
  const response = await axios.get('http://localhost:8080/students');
  return response.data;
};

export const fetchStaffData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/staffs');
    return response.data;
  } catch (error) {
    // Handle errors here, e.g., log the error or throw a custom error
    console.error('Error fetching staff data:', error);
    throw error;
  }
};
