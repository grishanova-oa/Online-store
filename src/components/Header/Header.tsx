import React from 'react';
import { Cart } from '../Cart';
import { Logo } from '../Logo';
import { TotalPrice } from '../TotalPrice';
import './HeaderStyles.css';

interface ITotalAmount {
  totalAmount: number;
  totalItemCount: number;
  changeShowCart: (value: boolean) => void;
}
export const Header = ({ changeShowCart, totalItemCount, totalAmount }: ITotalAmount) => {
  return (
    <header className="header">
      <Logo changeShowCart={changeShowCart} />
      <TotalPrice totalAmount={totalAmount} />
      <Cart changeShowCart={changeShowCart} totalItemCount={totalItemCount} />
    </header>
  );
};
