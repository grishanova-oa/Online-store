import React from 'react';
import { Cart } from '../Cart';
import { Logo } from '../Logo';
import { TotalPrice } from '../TotalPrice';
import './HeaderStyles.css';

interface ITotalAmount {
  totalAmount: number;
  totalItemCount: number;
}
export const Header = ({ totalItemCount, totalAmount }: ITotalAmount) => {
  return (
    <header className="header">
      <Logo />
      <TotalPrice totalAmount={totalAmount} />
      <Cart totalItemCount={totalItemCount} />
    </header>
  );
};
