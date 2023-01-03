import React from 'react';
import { Cart } from '../Cart';
import { Logo } from '../Logo';
import { TotalPrice } from '../TotalPrice';
import './HeaderStyles.css';

interface ITotalAmount {
  totalAmount: number;
}
export const Header = ({ totalAmount }: ITotalAmount) => {
  return (
    <header className="header">
      <Logo />
      <TotalPrice totalAmount={totalAmount} />
      <Cart />
    </header>
  );
};
