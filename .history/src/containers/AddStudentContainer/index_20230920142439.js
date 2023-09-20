import React, { useState } from 'react';
import styled from 'styled-components';
import { postStudentData } from '@/lib/postData';
const { faker } = require('@faker-js/faker');

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

function SlidingWindow({ open, onClose, data, index }) {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    ageGroup: '',
    status: '',
    studentId: "TESSE"+faker.number.int(),
    dob: '',
    mother: { email: '', number: '' },
    father: { email: '', number: '' },
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (name.includes('.')) {
      // Handle nested fields like 'father.email' and 'father.number'
      const [parentKey, childKey] = name.split('.');
      setFormData((prevFormData) => ({
        ...prevFormData,
        [parentKey]: {
          ...prevFormData[parentKey],
          [childKey]: type === 'checkbox' ? e.target.checked : value,
        },
      }));
    } else {
      // Handle top-level fields
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === 'checkbox' ? e.target.checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update method here to handle form submission
    console.log('Form data:', formData);
    postStudentData(index, formData);
    // onClose();
  };

  return (
    <SlidingWindowContainer style={{}} open={open}>
      <SlidingWindowContent>
        <h2>Add student</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Student Name:</Label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="ageGroup">Age group:</Label>
            <RadioGroup>
              <RadioButtonLabel>
                <RadioButton
                  type="radio"
                  id="Child"
                  name="ageGroup"
                  value="Child"
                  checked={formData.ageGroup === 'Child'}
                  onChange={handleInputChange}
                  default
                />
                Child
              </RadioButtonLabel>
              <RadioButtonLabel>
                <RadioButton
                  type="radio"
                  id="Adult"
                  name="ageGroup"
                  value="Adult"
                  checked={formData.ageGroup === 'Adult'}
                  onChange={handleInputChange}
                />
                Adult
              </RadioButtonLabel>
            </RadioGroup>
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
            <Label htmlFor="status">Status:</Label>
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
                  id="Active"
                  name="status"
                  value="Active"
                  checked={formData.status === 'Active'}
                  onChange={handleInputChange}
                  default
                />
                Active
              </RadioButtonLabel>
              <RadioButtonLabel>
                <RadioButton
                  type="radio"
                  id="Waitlisted"
                  name="status"
                  value="Waitlisted"
                  checked={formData.status === 'Waitlisted'}
                  onChange={handleInputChange}
                />
                Waitlisted
              </RadioButtonLabel>
            </RadioGroup>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="dob">Date of Birth: </Label>
            <Input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="branch">Select Branch:</Label>
            <Input as="select" id="Branch" name="Branch" value={formData.Branch} onChange={handleInputChange}>
              <option value="">Select Branch</option>
              <option value="Main">Main</option>
              <option value="Other">Other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="father.email">Father Email:</Label>
            <Input
              type="text"
              id="father.email"
              name="father.email"
              value={formData.father.email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="father.number">Father Number:</Label>
            <Input
              type="text"
              id="father.number"
              name="father.number"
              value={formData.father.number}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="mother.email">Mother Email:</Label>
            <Input
              type="text"
              id="mother.email"
              name="mother.email"
              value={formData.mother.email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="mother.number">Mother Number:</Label>
            <Input
              type="text"
              id="mother.number"
              name="mother.number"
              value={formData.mother.number}
              onChange={handleInputChange}
            />
          </FormGroup>
          <div>
            <button type="submit">Add student</button>
            {/* <button type="button" onClick={onClose}>
              Cancel
            </button> */}
          </div>
        </Form>
      </SlidingWindowContent>
    </SlidingWindowContainer>
  );
}

export default SlidingWindow;
