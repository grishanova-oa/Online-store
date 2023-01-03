import React from 'react';
import './CartListStyles.css';
import { CartItems } from '../CartItems';
import { CartListHeader } from '../CartListHeader';

interface ICartData {
  id: number;
  title: string;
  description: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  price: number;
  thumbnail: string;
}
interface ICartItems {
  cartData: ICartData[];
  cartItemsCount: Record<string, number>;
  onChangeCartCount: (id: number, price: number, isAdd: boolean) => void;
}
export const CartList = ({ cartData, cartItemsCount, onChangeCartCount }: ICartItems) => {
  return (
    <div className="cart-list">
      <CartListHeader />
      {cartData.map((item) => (
        <CartItems
          count={cartItemsCount[item.id]}
          onChangeCartCount={onChangeCartCount}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
};
