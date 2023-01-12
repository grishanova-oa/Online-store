import React from 'react';
import { Cart } from '../Cart';
import { Logo } from '../Logo';
import { TotalPrice } from '../TotalPrice';
import './HeaderStyles.css';

interface ITotalAmount {
  totalAmount: number;
  totalItemCount: number;
  changePageContent: (newActivePage: string) => void;
}
export const Header = ({ changePageContent, totalItemCount, totalAmount }: ITotalAmount) => {
  return (
    <header className="header">
      <Logo changePageContent={changePageContent} />
      <TotalPrice totalAmount={totalAmount} />
      <Cart changePageContent={changePageContent} totalItemCount={totalItemCount} />
    </header>
  );
};
