import React from 'react';
import './CartDiscountPromoStyles.css';

interface ICartDiscountPromo {
  showDiscount: string;
  clickAddDiscount: () => void;
}
export const CartDiscountPromo = ({ showDiscount, clickAddDiscount }: ICartDiscountPromo) => {
  return (
    <div className="catr">
      {showDiscount && (
        <div className="discount__promo hidden-discount__promo">
          {showDiscount}
          <button
            className="promo__btn"
            aria-label="btn-promo"
            type="button"
            onClick={clickAddDiscount}
          >
            ADD
          </button>
        </div>
      )}
    </div>
  );
};
