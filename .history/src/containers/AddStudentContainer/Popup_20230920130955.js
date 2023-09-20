import React, { useState } from 'react';
import Popup from './Popup'; // Make sure to use the correct import path

const Index = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleFormSubmit = (formData) => {
    // Add your logic to save the data here
    console.log('Form data submitted:', formData);
    closePopup();
  };

  return (
    <div>
      <button onClick={openPopup}>Add student</button>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Index;
import React, { useState } from 'react';
import Popup from './Popup'; // Make sure to use the correct import path

const Index = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleFormSubmit = (formData) => {
    // Add your logic to save the data here
    console.log('Form data submitted:', formData);
    closePopup();
  };

  return (
    <div>
      <button onClick={openPopup}>Add student</button>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Index;
