import { useState } from 'react';
import styled from 'styled-components';
import usePatchCourse from '@/hooks/usePatchCourse';

const SlidingWindowContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-50%')};
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
  const { mutation } = usePatchCourse();

  const [formData, setFormData] = useState({
    id: index,
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? e.target.checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutateAsync({
      index,
      data: formData,
    });
    onClose();
  };

  return (
    <SlidingWindowContainer style={{}} open={open}>
      <SlidingWindowContent>
        <h2>Add staff</h2>
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
            <Label htmlFor="email">Email:</Label>
            <Input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone:</Label>
            <Input
              type="number"
              minLength={10}
              maxLength={10}
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="designation">Course Offering:</Label>
            <RadioGroup>
              <RadioButtonLabel>
                <RadioButton
                  type="radio"
                  id="Intern"
                  name="designation"
                  value="Intern"
                  checked={formData.designation === 'Intern'}
                  onChange={handleInputChange}
                />
                Intern
              </RadioButtonLabel>
              <RadioButtonLabel>
                <RadioButton
                  type="radio"
                  id="Employee"
                  name="designation"
                  value="Employee"
                  checked={formData.designation === 'Employee'}
                  onChange={handleInputChange}
                />
                Employee
              </RadioButtonLabel>
            </RadioGroup>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="location">Location</Label>
            <RadioGroup>
              <RadioButtonLabel>
                <RadioButton
                  type="radio"
                  id="Main"
                  name="location"
                  value="Main"
                  checked={formData.location === 'Main'}
                  onChange={handleInputChange}
                />
                Main
              </RadioButtonLabel>
              <RadioButtonLabel>
                <RadioButton
                  type="radio"
                  id="Other"
                  name="location"
                  value="Other"
                  checked={formData.location === 'Other'}
                  onChange={handleInputChange}
                />
                Other
              </RadioButtonLabel>
            </RadioGroup>
          </FormGroup>
          <div>
            <button type="submit">Add</button>
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
