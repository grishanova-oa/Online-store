import React from 'react';
// import { inflateRaw } from 'zlib';
import './TotalFulPriceStyles.css';

interface ITotalFulPrice {
  totalAmount: number;
  isThrough: boolean;
}
export const TotalFulPrice = ({ totalAmount, isThrough }: ITotalFulPrice) => {
  return (
    <div className={`ful-price ${isThrough && 'through'}`}>
      Total:
      <span className={`ful-price__old ${isThrough && 'through'}`}>{`€ ${totalAmount}`}</span>
    </div>
  );
};
