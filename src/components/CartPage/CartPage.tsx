import React from 'react';
import { CartEmpty } from '../CartEmpty';
import { CartList } from '../CartList';
import { CartTotal } from '../CartTotal';
import './CartPageStyles.css';

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
  setIsShowFormPay: (isOpen: boolean) => void;
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
  setIsShowFormPay,
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
      {cartData.length ? (
        <>
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
            setIsShowFormPay={setIsShowFormPay}
          />
        </>
      ) : (
        <CartEmpty />
      )}
    </section>
  );
};
