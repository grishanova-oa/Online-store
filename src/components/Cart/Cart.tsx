import React from 'react';
import './CartStyles.css';

interface ITotalItemCont {
  totalItemCount: number;
  changeShowCart: (value: boolean) => void;
}
export const Cart = ({ changeShowCart, totalItemCount }: ITotalItemCont) => {
  const showCart = () => changeShowCart(true);

  return (
    <button className="cart" aria-label="btn-cart" type="button" onClick={showCart}>
      <div className="count-product">{totalItemCount}</div>
    </button>
  );
};
