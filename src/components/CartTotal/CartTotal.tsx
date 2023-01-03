import React from 'react';
import './CartTotalStyles.css';

interface ICartTotal {
  total: number;
}
export const CartTotal = ({ total }: ICartTotal) => {
  return (
    <div>
      <div className="total-amount">Total amount</div>
    </div>
  );
};
