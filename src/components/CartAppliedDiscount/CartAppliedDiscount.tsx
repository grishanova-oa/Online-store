import React from 'react';
import { CartAppliedCode } from '../CartAppliedCode';
import './CartAppliedDiscountStyles.css';

interface ICartAppliedDiscount {
  discountList: string[];
  deleteDiscount: (value: string) => void;
}
export const CartAppliedDiscount = ({ deleteDiscount, discountList }: ICartAppliedDiscount) => {
  return (
    <div className="applied-code">
      <h3>Applied codes</h3>
      {discountList.map((name) => (
        <CartAppliedCode name={name} key={name} deleteDiscount={deleteDiscount} />
      ))}
    </div>
  );
};
