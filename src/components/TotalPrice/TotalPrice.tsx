import React from 'react';
import './TotalStyles.css';

interface ITotalPrice {
  totalAmount: number;
}
export const TotalPrice = ({ totalAmount }: ITotalPrice) => {
  return (
    <div className="total-price">
      <div className="total-price__title">Card total:</div>
      <span className="total-price__sum">{`€ ${totalAmount}`}</span>
    </div>
  );
};
