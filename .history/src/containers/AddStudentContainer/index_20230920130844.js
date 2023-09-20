import React, { useState } from 'react';

const Index = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    grade: '',
  });

  const toggleForm = () => {
    setFormOpen(!isFormOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to save the data here
    console.log('Form data submitted:', formData);

    // Reset the form and close the pop-up
    setFormData({
      name: '',
      age: '',
      grade: '',
    });
    setFormOpen(false);
  };

  return (
    <div>
      <button onClick={toggleForm}>Add student</button>
      {isFormOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </label>
            <label>
              Grade:
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Add Data</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Index;
