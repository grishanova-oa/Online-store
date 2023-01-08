import React from 'react';
import './InfoAddToCartStyles.css';

export const InfoAddToCart = () => {
  return (
    <div className="info-add-to-cart">
      <div className="add-to-cart__btn">
        € prise
        <button className="info-cart__btn" aria-label="btn-info" type="button">
          Add to cart
        </button>
        <button className="info-cart__btn" aria-label="btn-info" type="button">
          Buy now
        </button>
      </div>
    </div>
  );
};
