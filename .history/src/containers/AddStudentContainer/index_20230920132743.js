import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AddStudentForm = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can call your postStudentData function with formData
    // For example: postStudentData(formData);
    console.log(formData);
  };

  return (
    <FormContainer>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="id">ID:</Label>
          <Input
            type="number"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        {/* Repeat similar blocks for other form fields */}
        
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default AddStudentForm;
