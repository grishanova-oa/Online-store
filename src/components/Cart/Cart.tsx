import React from 'react';
import './CartStyles.css';

interface ITotalItemCont {
  totalItemCount: number;
  changePageContent: (newActivePage: string) => void;
}
export const Cart = ({ changePageContent, totalItemCount }: ITotalItemCont) => {
  const showCart = () => changePageContent('cart');

  return (
    <button className="cart" aria-label="btn-cart" type="button" onClick={showCart}>
      <div className="count-product">{totalItemCount}</div>
    </button>
  );
};
