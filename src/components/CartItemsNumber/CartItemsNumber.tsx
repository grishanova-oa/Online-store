import React from 'react';
import './CartItemsNumberStyles.css';

export const CartItemsNumber = ({ index }: { index: number }) => {
  return <div className="items-num">{index}</div>;
};
