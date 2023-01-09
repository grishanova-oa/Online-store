import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from '../Products/Products';
import { Error404 } from '../Error/Error';
import { IProducts } from '../../../modules/types';
import classes from './Main.module.css';

interface Imain {
  cartData: IProducts[];
  addToCart: (value: IProducts, isInCart: boolean) => void;
}

export const Main: React.FC<Imain> = ({ cartData, addToCart }) => {
  return (
    <BrowserRouter>
      <main className={classes.main}>
        <Routes>
          <Route path="/" element={<Products cartData={cartData} addToCart={addToCart} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
