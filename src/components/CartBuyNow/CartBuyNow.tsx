import React from 'react';
import './CartBuyNowStyles.css';

interface ICartBuy {
  setIsShowFormPay: (isOpen: boolean) => void;
}
export const CartBuyNow = ({ setIsShowFormPay }: ICartBuy) => {
  return (
    <button
      className="byw-now__btn"
      aria-label="btn-promo"
      type="button"
      onClick={() => setIsShowFormPay(true)}
    >
      Buy now
    </button>
  );
};
