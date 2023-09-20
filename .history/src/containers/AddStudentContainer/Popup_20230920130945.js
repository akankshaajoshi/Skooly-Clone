import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    grade: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      age: '',
      grade: '',
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
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
        <button onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default Popup;
