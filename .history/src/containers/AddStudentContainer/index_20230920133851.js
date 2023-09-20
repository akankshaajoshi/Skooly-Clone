import React, { useState } from 'react';
import styled from 'styled-components';
import { postStudentData } from '@/lib/postData';

const SlidingWindowContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  z-index: 999;
  overflow-y: auto;
`;

const SlidingWindowContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0px;
`;

const Label = styled.label`
  width: 30%;
  font-weight: bold;
`;

const Input = styled.input`
  width: 70%;
  padding: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const RadioButton = styled.input`
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

function SlidingWindow({ open, onClose, data, index }) {
  const [formData, setFormData] = useState({
      name: "",
      gender: "",
      ageGroup: "",
      status: "",
      studentId: "",
      dob: "",
      mother: { "email": "", "number": "" },
      father: { "email": "", "number": "" }
  }
  );

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? e.target.checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update method here to handle form submission
    console.log('Form data:', formData);
    postStudentData(index, formData);
    onClose();
  };

  return (
    <SlidingWindowContainer style={{}} open={open}>
      <SlidingWindowContent>
        <h2>Add student</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="courseOffering">Gender:</Label>
            <RadioGroup>
              <RadioButtonLabel>
                <RadioButton
                  type="radio"
                  id="Male"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleInputChange}
                />
                Male
              </RadioButtonLabel>
              <RadioButtonLabel>
                <RadioButton
                  type="radio"
                  id="Female"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleInputChange}
                />
                Female
              </RadioButtonLabel>
            </RadioGroup>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="status">Type of Class:</Label>
            <RadioGroup>
              <RadioButtonLabel>
                <RadioButton
                  type="radio"
                  id="New"
                  name="status"
                  value="New"
                  checked={formData.status === 'New'}
                  onChange={handleInputChange}
                />
                New
              </RadioButtonLabel>
              <RadioButtonLabel>
                <RadioButton
                  type="radio"
                  id="One to one"
                  name="status"
                  value="One to one"
                  checked={formData.status === 'One to one'}
                  onChange={handleInputChange}
                />
                One to one or Private class
              </RadioButtonLabel>
            </RadioGroup>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="fixedCourseDate">Fixed Course Date:</Label>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                id="fixedCourseDate"
                name="fixedCourseDate"
                checked={formData.fixedCourseDate}
                onChange={handleInputChange}
              />
              Fixed Course Date
            </CheckboxLabel>
          </FormGroup>
          {formData.fixedCourseDate && (
            <>
              <FormGroup>
                <Label htmlFor="startDate">Start Date:</Label>
                <Input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="endDate">End Date:</Label>
                <Input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </>
          )}
          <FormGroup>
            <Label htmlFor="category">Category:</Label>
            <Input
              as="select"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Select Category</option>
              <option value="Online school">Online school</option>
              <option value="Preschool">Preschool</option>
              {/* Add more options as needed */}
            </Input>
          </FormGroup>
          <div>
            <button type="submit">Update</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </Form>
      </SlidingWindowContent>
    </SlidingWindowContainer>
  );
}

export default SlidingWindow;
