import React from 'react';
import { FormCardNumber } from '../FormCardNumber';
import { FormCardOther } from '../FormCardOther';
import './FormCardStyles.css';

export const FormCard = () => {
  return (
    <div className="form-card">
      <FormCardNumber />
      <FormCardOther />
    </div>
  );
};
