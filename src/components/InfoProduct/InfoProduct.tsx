import React from 'react';
import { IProducts } from '../../modules/types';
import { InfoProductBlock } from '../InfoProductBlock/InfoProductBlock';
import { InfoProductNav } from '../InfoProductNav';
import './InfoProductStyles.css';

interface ITypes {
  activeProduct: IProducts | null;
  cartData: IProducts[];
  addToCart: (value: IProducts, isInCart: boolean) => void;
  setIsShowFormPay: (isOpen: boolean) => void;
}
export const InfoProduct = ({ setIsShowFormPay, activeProduct, cartData, addToCart }: ITypes) => {
  if (!activeProduct) {
    return null;
  }

  return (
    <div className="info-product">
      <InfoProductNav
        category={activeProduct.category}
        brand={activeProduct.brand}
        title={activeProduct.title}
      />
      <InfoProductBlock
        setIsShowFormPay={setIsShowFormPay}
        cartData={cartData}
        addToCart={addToCart}
        activeProduct={activeProduct}
      />
    </div>
  );
};
