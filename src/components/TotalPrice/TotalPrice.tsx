import React from 'react';
import './TotalStyles.css';

export const TotalPrice = () => {
  return (
    <div className="total-price">
      <div className="total-price__title">Card total:</div>
      <span className="total-price__sum">€ 0.00</span>
    </div>
  );
};
