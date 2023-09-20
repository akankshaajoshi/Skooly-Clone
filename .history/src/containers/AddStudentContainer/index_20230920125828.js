import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const Modal = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

function JsonForm() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    gender: '',
    ageGroup: '',
    status: '',
    studentId: '',
    dob: '',
    mother: {
      email: '',
      number: '',
    },
    father: {
      email: '',
      number: '',
    },
  });

  const [isAddStudentModalVisible, setAddStudentModalVisible] = useState(
    false
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can submit the formData to your API or perform any desired action.
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const openAddStudentModal = () => {
    setAddStudentModalVisible(true);
  };

  const closeAddStudentModal = () => {
    setAddStudentModalVisible(false);
  };

  return (
    <Container>
      <button onClick={openAddStudentModal}>Add Student</button>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="id">ID:</Label>
        <Input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        {/* Add similar Input fields for other properties in the JSON object */}
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
      <Modal
        visible={isAddStudentModalVisible}
        onClick={closeAddStudentModal}
      >
        <ModalContent>
          <h2>Add Student</h2>
          <Form>
            {/* Add input fields for adding a new student here */}
            <SubmitButton type="submit">Add</SubmitButton>
          </Form>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default JsonForm;
