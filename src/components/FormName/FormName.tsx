import React from 'react';
import './FormNameStyles.css';

export const FormName = () => {
  return (
    <div className="form-name">
      <input
        type="text"
        placeholder="Name"
        pattern="[A-Za-zА-Яа-яЁё]{3,}[ ]{1}[A-Za-zА-Яа-яЁё]{3,}"
      />
    </div>
  );
};
