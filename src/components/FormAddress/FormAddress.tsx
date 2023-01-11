import React from 'react';
import './FormAddressStyles.css';

export const FormAddress = () => {
  return (
    <div className="form-address">
      <input
        type="text"
        placeholder="Address"
        pattern="[A-Za-zA-Яа-яЁё]{5,}[ ]{1}[A-Za-zA-Яа-яЁё]{5,}[ ]{1}[A-Za-zA-Яа-яЁё]{5,}[ ]{1}[A-Za-zA-Яа-яЁё]{5,}[ ]{1}[A-Za-zA-Яа-яЁё]{5,}"
      />
    </div>
  );
};
