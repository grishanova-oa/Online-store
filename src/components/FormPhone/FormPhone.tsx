import React from 'react';
import './FormPhoneStyles.css';

export const FormPhone = () => {
  return (
    <div className="form-phone">
      <input type="text" placeholder="Phone" pattern="[+]{1}[0-9]{11,}" />
    </div>
  );
};
