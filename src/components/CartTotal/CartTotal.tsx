import React from 'react';
import { CartAppliedDiscount } from '../CartAppliedDiscount';
import { CartBuyNow } from '../CartBuyNow';
import { CartDiscount } from '../CartDiscount';
import { TotalFulPrice } from '../TotalFulPrice';
import './CartTotalStyles.css';
// import { Cart } from '../Cart';

interface ITotalAmount {
  deleteDiscount: (value: string) => void;
  discountList: string[];
  totalAmount: number;
  totalItemCount: number;
  addDiscount: (value: string) => void;
  setIsShowFormPay: (isOpen: boolean) => void;
}
export const CartTotal = ({
  deleteDiscount,
  discountList,
  addDiscount,
  totalItemCount,
  totalAmount,
  setIsShowFormPay,
}: ITotalAmount) => {
  const count = (totalAmount / 10) * +(10 - discountList.length);
  const isDiscount = Boolean(discountList.length);

  return (
    <div className="section-total-amount">
      <div className="total-amount">Total amount</div>
      <div className="ful-price">
        Products: <span>{totalItemCount}</span>
      </div>
      <TotalFulPrice totalAmount={totalAmount} isThrough={isDiscount} />
      {isDiscount && <TotalFulPrice totalAmount={+count.toFixed(2)} isThrough={!isDiscount} />}
      {Boolean(discountList.length) && (
        <CartAppliedDiscount discountList={discountList} deleteDiscount={deleteDiscount} />
      )}
      <CartDiscount addDiscount={addDiscount} />
      <CartBuyNow setIsShowFormPay={setIsShowFormPay} />
    </div>
  );
};
