import React from 'react';
import './CartStyles.css';

interface ITotalItemCont {
  totalItemCount: number;
}
export const Cart = ({ totalItemCount }: ITotalItemCont) => {
  return (
    <div className="cart">
      <div className="count-product">{totalItemCount}</div>
    </div>
  );
};
