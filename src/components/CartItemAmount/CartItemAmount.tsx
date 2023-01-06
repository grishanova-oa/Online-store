import React from 'react';
import './CartItemAmountStyles.css';

interface ICartItemAmount {
  count: number;
  id: number;
  price: number;
  onChangeCartCount: (id: number, price: number, isAdd: boolean) => void;
}

export const CartItemAmount = ({ count, id, price, onChangeCartCount }: ICartItemAmount) => {
  return (
    <div className="item-amount">
      <button
        onClick={() => onChangeCartCount(id, price, false)}
        type="button"
        aria-label="btn-minus"
        className="item-amount__btn-minus"
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => onChangeCartCount(id, price, true)}
        type="button"
        aria-label="btn-plus"
        className="item-amount__btn-plus"
      >
        +
      </button>
    </div>
  );
};
