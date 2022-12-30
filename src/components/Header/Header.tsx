import React from 'react';
import { Cart } from '../Cart/Cart';
import { Logo } from '../Logo';
import { TotalPrice } from '../TotalPrice';
import './HeaderStyles.css';

export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <TotalPrice />
      <Cart />
    </div>
  );
};
