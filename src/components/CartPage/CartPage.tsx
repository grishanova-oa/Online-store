import React from 'react';
import { CartList } from '../CartList';
import { CartTotal } from '../CartTotal';
import './CartPageStyles.css';
// import { CartEmpty } from '../CartEmpty';
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
export const CartPage = ({ cartData, cartItemsCount, onChangeCartCount }: ICartItems) => {
  return (
    <section className="main__cart">
      {/* <CartEmpty /> */}
      <CartList
        cartData={cartData}
        cartItemsCount={cartItemsCount}
        onChangeCartCount={onChangeCartCount}
      />
      <CartTotal total={1000} />
    </section>
  );
};
