import React from 'react';
import { IProducts } from '../../modules/types';
import './InfoAddToCartStyles.css';

interface IAddToCart {
  price: number;
  isInCart: boolean;
  activeProduct: IProducts;
  setIsShowFormPay: (isOpen: boolean) => void;
  addToCart: (value: IProducts, isInCart: boolean) => void;
}
export const InfoAddToCart = ({
  setIsShowFormPay,
  price,
  isInCart,
  addToCart,
  activeProduct,
}: IAddToCart) => {
  return (
    <div className="info-add-to-cart">
      <div className="add-to-cart__btn">
        € {price}
        <button
          className="info-cart__btn"
          aria-label="btn-info"
          type="button"
          onClick={() => addToCart(activeProduct, !isInCart)}
        >
          {isInCart ? 'Delete' : 'Add to cart'}
        </button>
        <button
          className="info-cart__btn"
          aria-label="btn-info"
          type="button"
          onClick={() => setIsShowFormPay(true)}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};
