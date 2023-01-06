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
  deleteDiscount: (value: string) => void;
  discountList: string[];
  totalAmount: number;
  totalItemCount: number;
  cartData: ICartData[];
  cartItemsCount: Record<string, number>;
  onChangeCartCount: (id: number, price: number, isAdd: boolean) => void;
  addDiscount: (value: string) => void;
}
export const CartPage = ({
  deleteDiscount,
  discountList,
  totalItemCount,
  totalAmount,
  cartData,
  cartItemsCount,
  onChangeCartCount,
  addDiscount,
}: ICartItems) => {
  return (
    <section className="main__cart">
      {/* <CartEmpty /> */}
      <CartList
        cartData={cartData}
        cartItemsCount={cartItemsCount}
        onChangeCartCount={onChangeCartCount}
      />
      <CartTotal
        deleteDiscount={deleteDiscount}
        addDiscount={addDiscount}
        totalItemCount={totalItemCount}
        totalAmount={totalAmount}
        discountList={discountList}
      />
    </section>
  );
};
