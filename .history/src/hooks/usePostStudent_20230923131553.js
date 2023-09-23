import axios from 'axios';
import { useMutation } from 'react-query';

const postStudentData = async (data) => {
  await axios.post('http://localhost:8080/students', data);
};

const usePostStudent = () => {
  const mutation = useMutation(postStudentData);
  return { mutation };
};

export default usePostStudent;
