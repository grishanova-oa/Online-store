import React from 'react';
import { CartItemAmount } from '../CartItemAmount';
import { CartItemsInfo } from '../CartItemsInfo';
import { CartItemsNumber } from '../CartItemsNumber';
import './CartItemsStyles.css';

interface ICartItems {
  id: number;
  title: string;
  description: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  price: number;
  thumbnail: string;
}
interface ITypes {
  count: number;
  item: ICartItems;
  onChangeCartCount: (id: number, price: number, isAdd: boolean) => void;
}

export const CartItems = ({ count, item, onChangeCartCount }: ITypes) => {
  return (
    <div className="container-items">
      <CartItemsNumber />
      <CartItemsInfo
        title={item.title}
        stock={item.stock}
        rating={item.rating}
        discount={item.discountPercentage}
        description={item.description}
        priceAmount={item.price * count}
        url={item.thumbnail}
      />
      <CartItemAmount id={item.id} price={item.price} onChangeCartCount={onChangeCartCount} />
    </div>
  );
};
