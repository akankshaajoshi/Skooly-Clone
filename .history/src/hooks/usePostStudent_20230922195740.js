import axios from 'axios';
import { useMutation } from 'react-query';

const postStudentData = async (index, data) => {
  try {
    await axios.post('http://localhost:8080/students', data);
  } catch (error) {
    console.log(index);
    console.log('error in posting data');
  }
};

const usePostStudent = () => {
  const { mutate } = useMutation();
  return { data };
};

export default usePostStudent;
