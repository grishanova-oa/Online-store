import React from 'react';
import { CartList } from '../CartList';
import { CartTotal } from '../CartTotal';
import './CartPageStyles.css';
// import { CartEmpty } from '../CartEmpty';

export const CartPage = ({
  onChangeCartCount,
}: {
  onChangeCartCount: (id: number, price: number, isAdd: boolean) => void;
}) => {
  return (
    <section className="main__cart">
      {/* <CartEmpty /> */}
      <CartList onChangeCartCount={onChangeCartCount} />
      <CartTotal total={1000} />
    </section>
  );
};
