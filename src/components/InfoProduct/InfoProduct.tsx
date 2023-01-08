import React from 'react';
import { InfoProductBlock } from '../InfoProductBlock/InfoProductBlock';
import { InfoProductNav } from '../InfoProductNav';
import './InfoProductStyles.css';

export const InfoProduct = () => {
  return (
    <div className="info-product">
      <InfoProductNav />
      <InfoProductBlock />
    </div>
  );
};
