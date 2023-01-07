import React from 'react';
import './CartItemsInfoStyles.css';

interface ICartItemsInfo {
  title: string;
  description: string;
  discount: number;
  rating: number;
  stock: number;
  priceAmount: number;
  url: string;
}
export const CartItemsInfo = ({
  title,
  rating,
  discount,
  url,
  description,
  stock,
  priceAmount,
}: ICartItemsInfo) => {
  return (
    <div className="items-info">
      <img src={url} alt="img" className="items-info__img" />
      <div className="items-info__details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="items-info__other">
        <p>
          Rating<span>{rating}</span>
        </p>
        <p>
          Discount<span>{discount}</span>
        </p>
        <p>
          Stock<span>{stock}</span>
        </p>
        <div className="item__prise">
          €<span>{priceAmount}</span>
        </div>
      </div>
    </div>
  );
};
